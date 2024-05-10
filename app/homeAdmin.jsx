import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const homeAdmin = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }} >
        <View className="w-full justify-top  min-h-[85vh] px-4 my-6">
          <Text>homeAdmin</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default homeAdmin