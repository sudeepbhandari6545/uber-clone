import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

const data = [
  {
    id: '1',
    title: 'Get a Ride',
    image: 'https://cdn.mos.cms.futurecdn.net/2LDXhWbsWQ3VWreWPsrahn.jpg',
    screen: 'MapScreen',
  },
  {
    id: '5',
    title: 'Order Fode',
    image: 'https://clipartmag.com/images/cool-logos-to-draw-28.jpg',
    screen: 'FoodScreen',
  },
]

const NavOption = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <Text> {item.title} </Text>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOption
