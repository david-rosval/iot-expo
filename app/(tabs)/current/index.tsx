import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CurrentData from '../../../components/CurrentData'

export default function Page() {
  return (
    <View style={styles.container}>
      <CurrentData />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  }
})