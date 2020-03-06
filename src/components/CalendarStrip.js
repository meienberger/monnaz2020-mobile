import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PropTypes from 'prop-types'
import { MAIN_COLOR } from '../config/config/config'

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
    height: 70,
    justifyContent: 'center',
  },
  datesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  dateContainer: {
    alignItems: 'center',
    padding: 10,
    width: 50,
    height: 50,
  },
  dayText: {
    fontWeight: 'bold',
    color: '#333',
  },
  dayDay: {
    fontSize: 18,
    color: '#333',
  },
  selectedDateContainer: {
    backgroundColor: MAIN_COLOR,
    borderRadius: 25,
  },
  selectedDayText: {
    color: 'white',
  },
})

const CalendarStrip = ({ selectedDay = 1, setSelectedDay }) => {
  return (
    <View style={styles.container}>
      <View style={styles.datesContainer}>
        <TouchableOpacity
          onPress={() => setSelectedDay(1)}
          style={[
            styles.dateContainer,
            selectedDay === 1 ? styles.selectedDateContainer : null,
          ]}
        >
          <Text
            style={[
              styles.dayText,
              selectedDay === 1 ? styles.selectedDayText : null,
            ]}
          >
            MER.
          </Text>
          <Text
            style={[
              styles.dayDay,
              selectedDay === 1 ? styles.selectedDayText : null,
            ]}
          >
            1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedDay(2)}
          style={[
            styles.dateContainer,
            selectedDay === 2 ? styles.selectedDateContainer : null,
          ]}
        >
          <Text
            style={[
              styles.dayText,
              selectedDay === 2 ? styles.selectedDayText : null,
            ]}
          >
            JEU.
          </Text>
          <Text
            style={[
              styles.dayDay,
              selectedDay === 2 ? styles.selectedDayText : null,
            ]}
          >
            2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedDay(3)}
          style={[
            styles.dateContainer,
            selectedDay === 3 ? styles.selectedDateContainer : null,
          ]}
        >
          <Text
            style={[
              styles.dayText,
              selectedDay === 3 ? styles.selectedDayText : null,
            ]}
          >
            VEN.
          </Text>
          <Text
            style={[
              styles.dayDay,
              selectedDay === 3 ? styles.selectedDayText : null,
            ]}
          >
            3
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedDay(4)}
          style={[
            styles.dateContainer,
            selectedDay === 4 ? styles.selectedDateContainer : null,
          ]}
        >
          <Text
            style={[
              styles.dayText,
              selectedDay === 4 ? styles.selectedDayText : null,
            ]}
          >
            SAM.
          </Text>
          <Text
            style={[
              styles.dayDay,
              selectedDay === 4 ? styles.selectedDayText : null,
            ]}
          >
            4
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedDay(5)}
          style={[
            styles.dateContainer,
            selectedDay === 5 ? styles.selectedDateContainer : null,
          ]}
        >
          <Text
            style={[
              styles.dayText,
              selectedDay === 5 ? styles.selectedDayText : null,
            ]}
          >
            DIM.
          </Text>
          <Text
            style={[
              styles.dayDay,
              selectedDay === 5 ? styles.selectedDayText : null,
            ]}
          >
            5
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

CalendarStrip.propTypes = {
  selectedDay: PropTypes.number.isRequired,
  setSelectedDay: PropTypes.func.isRequired,
}

export default CalendarStrip
