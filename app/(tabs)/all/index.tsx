import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AllData from '../../../components/AllData'

export default function Page() {
  return (
    <View style={styles.container}>
      <AllData />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: 10,
  }
})