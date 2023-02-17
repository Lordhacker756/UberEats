import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

export default function OrdersHeader() {
  return (
    <View>
      <Image
        style={styles.headerImage}
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg',
        }}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.restaurantName}>Tony Roma's - C.C. Meridiano</Text>
        <Text style={styles.restaurantRating}>
          NEW . 2022-04-16T18:56:21.890Z
        </Text>
      </View>
      <View>
        <Text style={styles.orders}>Your Orders</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 15,
    backgroundColor: 'white',
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  restaurantName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  restaurantRating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#777',
  },
  orders: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});
