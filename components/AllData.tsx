import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { sensorsData } from '../types/types'
import SingleData from './SingleData'

const AllData = () => {
  useEffect(() => {
    async function getAllData () {
      try {
        const result = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/sensors-data`)
        const data = await result.json()
        setAllData(data.reverse())
      } catch (error) {
        console.log(error)
      }
    }
    getAllData()
  }, [])

  const [allData, setAllData] = useState<sensorsData[]>([])
  
  return (
    <ScrollView style={styles.scrollContainer}>
      {allData.length > 0 ? allData.map(data => {
        return <SingleData key={data.date} data={data}/>
      }) : <Text>No data!</Text>}
    </ScrollView>
  )
}

export default AllData

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    width: '100%'
  }
})