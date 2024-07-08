import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{
        headerTitle: 'Data actual'
      }} />
    </Stack>
  )
}

const styles = StyleSheet.create({})