import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import Timeline from 'react-native-timeline-flatlist'
import _ from 'lodash'
import { MAIN_COLOR } from '../../config/config/config'
import CalendarStrip from '../../components/CalendarStrip'

const styles = StyleSheet.create({
  content: { flex: 1 },
  titleEntry: {
    marginTop: -10,
  },
  timeEntry: { minWidth: 52, marginTop: -5 },
  timeStyle: {
    textAlign: 'center',
    backgroundColor: MAIN_COLOR,
    color: 'white',
    padding: 5,
    borderRadius: 13,
  },
  descriptionEntry: { color: 'gray', marginBottom: 15 },
})

const ProgramScreen = () => {
  const [selectedDay, setSelectedDay] = useState(1)
  const [program, setProgram] = useState()

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('program')
      .onSnapshot(querySnapshot => {
        // console.log(querySnapshot.docs)
        const myProgram = {}

        querySnapshot.docs.forEach(documentSnapshot => {
          myProgram[documentSnapshot.id] = { ...documentSnapshot.data() }
        })

        setProgram(myProgram)
      })

    return () => unsubscribe()
  }, [])

  const renderTimeline = () => {
    if (program && program[selectedDay] && program[selectedDay].elements) {
      const data = _.sortBy(program[selectedDay].elements, [
        o => {
          return o.time
        },
      ])

      return (
        <Timeline
          circleSize={20}
          circleColor="rgb(45,156,219)"
          lineColor="rgb(45,156,219)"
          timeContainerStyle={styles.timeEntry}
          data={data}
          titleStyle={styles.titleEntry}
          timeStyle={styles.timeStyle}
          descriptionStyle={styles.descriptionEntry}
          options={{
            style: { padding: 20 },
          }}
          showTime={true}
        />
      )
    }
  }

  return (
    <View style={styles.content}>
      <CalendarStrip
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      <View style={styles.content}>{renderTimeline()}</View>
    </View>
  )
}

ProgramScreen.navigationOptions = {
  title: 'Programme',
  headerStyle: {
    backgroundColor: MAIN_COLOR,
  },
  headerTintColor: '#fff',
  drawerLabel: 'Home',
}

export default ProgramScreen
