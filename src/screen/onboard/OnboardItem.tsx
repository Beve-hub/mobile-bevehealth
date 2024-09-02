import { View, Text } from 'react-native'
import React from 'react'

interface Props {
  item: {
    id: string;
    title: string;
    description: string;
    image: string;
  }
}

const OnboardItem = ({item}: Props) => {
  return (
    <View>
      <Text>OnboardItem</Text>
    </View>
  )
}

export default OnboardItem