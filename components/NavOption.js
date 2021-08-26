import React from 'react'
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

const data = [
  {
    id: '1',
    title: 'Get a Ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '5',
    title: 'Order Food',
    image: 'https://links.papareact.com/28w',
    screen: 'FoodScreen',
  },
]

const NavOption = () => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View>
            <Image
              style={{ width: 100, height: 100, resizeMode: 'contain' }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}> {item.title} </Text>
            <Icon name="arrowright" color="white" type="antdesign" />
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOption
