import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Flatcard from './components/Flatcard'
import { StyleSheet } from 'react-native/types_generated/index'
import Elivatedcard from './components/Elivatedcard'
import Fancycard from './components/Fancycard'

const App = () => {
  return (
    <View>
      <ScrollView>
      <Flatcard/>
      <Elivatedcard/>
      <Fancycard/>
      </ScrollView>
    </View>
  )
}
export default App
