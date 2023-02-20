import React from 'react'
import { View, StyleSheet } from 'react-native'

export const Hr = () => {
  return (
    <View style={{
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'black',
        borderStyle:'solid', 
        marginBottom: 10,
        resizeMode: 'contain'
      }}/>
  )
}
