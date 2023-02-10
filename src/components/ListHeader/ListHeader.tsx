import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

export default function ListHeader() {
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
        <Text style={styles.restaurantRating}>$$ . 4.5 ⭐</Text>
      </View>
      <View>
        <Text style={styles.menu}>Menu</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 15,
    backgroundColor: 'white',
    borderBottomColor: '#eee',
    borderBottomWidth: 2,
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  restaurantName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  restaurantRating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#777',
  },
  menu: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#777',
    padding: 15,
  },
});
