import { StyleSheet, Text, View } from 'react-native'
import { Redirect } from 'expo-router';

export default function StartPage() {
  return (
    <Redirect href='/current' />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});