import { StyleSheet, Text, View } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import { sensorsData } from '../types/types'

export default function CurrentData () {
  useEffect(() => {
    async function getCurrentData () {
      try {
        const result = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/sensors-data/current`)
        const data = await result.json()
        setCurrentData(data)
      } catch (error) {
        console.log(error)
      }
    }
    getCurrentData()
  }, [])

  const [currentData, setCurrentData] = useState<sensorsData>({})
  
  const { temperature, humidity, ammonia } = currentData

  return (
    <>
      <Text style={styles.text}>Temperatura: {temperature?.toFixed(2) ?? 0}°C</Text>
      <Text style={styles.text}>Humedad: {humidity ?? 0}%</Text>
      <Text style={styles.text}>Amoniaco: {ammonia?.toFixed(2) ?? 0}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    marginVertical: 10
  }
})