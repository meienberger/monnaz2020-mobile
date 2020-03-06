import React, { useState, useEffect } from 'react'
import Masonry from 'react-native-masonry'
import FastImage from 'react-native-fast-image'
import PropTypes from 'prop-types'

const MasonryGallery = ({ images }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    if (images) {
      const newData = images.map(uri => {
        return { uri }
      })

      setData(newData)
    }
  }, [images])

  return <Masonry bricks={data} columns={3} customImageComponent={FastImage} />
}

MasonryGallery.propTypes = {
  images: PropTypes.array.isRequired,
}

export default MasonryGallery
