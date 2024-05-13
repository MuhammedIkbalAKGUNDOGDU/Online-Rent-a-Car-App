import { View, Text } from 'react-native'
import React from 'react'

const FAS = () => {
  return (
    <View>
      <Text>Why sometimes i cant see car in map ?</Text>
      <Text>Because we render map at every 5 seconds and in first enter to map taking car informations from database can take 5 seconds</Text>
      <Text></Text>
      <Text>Why sometimes i cant see my informations in profile screen ?</Text>
      <Text>Because we render profile screnn at every 5 seconds and in first enter to profile taking profile informations from database can take 5 seconds</Text>
      <Text></Text>
      <Text>Why i cant see my informations in profile screen and pay money to my account?</Text>
      <Text>Because you can enter your informations at wrong type or design or your informations cant include unvalid characters</Text>
      <Text>You can contact with us at this situation with muhammedikbalcmp@gmail.com</Text>
    </View>
  )
}

export default FAS