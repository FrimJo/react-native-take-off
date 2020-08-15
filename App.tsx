import { css } from '@emotion/native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View
      style={css`
        flex: 1;
        background-color: #fff;
        align-items: center;
        justify-content: center;
      `}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}
