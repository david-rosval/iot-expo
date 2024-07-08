import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function Page() {
  return (
    <Tabs>
      <Tabs.Screen name='current' options={{
        headerTitle: 'Actual',
        headerShown: false
      }} />
      <Tabs.Screen name='all' options={{
        headerTitle: 'Toda',
        headerShown: false
      }} />
    </Tabs>
  )
}

const styles = StyleSheet.create({})