import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import HomeScreen from './screens/HomeScreen'
import { Store } from './Store'

export default function App() {
  return (
    <Provider store={Store}>
      <HomeScreen />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
