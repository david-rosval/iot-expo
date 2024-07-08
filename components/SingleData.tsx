import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { sensorsData } from '../types/types'

export default function SingleData({ data }: { data: sensorsData }) {
  const { temperature, humidity, ammonia, date } = data

  let calendar
  let timeMs
  let time

  if (date?.includes('T')){
    [calendar, timeMs] = date?.split('T')
    time = timeMs.split('.')[0]
  }

  return (
    <View style={styles.singleContainer}>
      <View style={styles.date}>
        <Text style={styles.dateText}>{calendar}</Text>
        <Text style={styles.dateText}>{time}</Text>
      </View>
      <Text>Temperatura: {temperature?.toFixed(2) ?? 0}°C</Text>
      <Text>Humedad: {humidity ?? 0}%</Text>
      <Text>Amoniaco: {ammonia?.toFixed(2) ?? 0} ppm</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  singleContainer: {
    backgroundColor: '#ffffff',
    marginBottom: 10,
    flex: 1,
    
  },
  date: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateText: {
    fontWeight: 'bold'
  }
})