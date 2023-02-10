import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface RestaurantCardProps {
  props: {
    id: string;
    name: string;
    image: string;
    deliveryFee: number;
    minDeliveryTime: number;
    maxDeliveryTime: number;
    rating: number;
  };
}

function RestaurantCard({props}: RestaurantCardProps) {
  return (
    <View>
      <View style={styles.restaurantCard}>
        <Image
          source={{
            uri: `${props.image}`,
          }}
          style={styles.restaurantImage}
        />

        <View style={styles.cardFooter}>
          <View style={styles.details}>
            <Text style={styles.restaurantName}>{props.name}</Text>
            <Text style={styles.restaurantDistance}>
              {props.deliveryFee} {props.minDeliveryTime}-
              {props.maxDeliveryTime} min
            </Text>
          </View>
          <View>
            <Text style={styles.ratings}>{props.rating}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default RestaurantCard;

const styles = StyleSheet.create({
  restaurantCard: {
    margin: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    borderRadius: 10,
  },
  restaurantImage: {
    width: '100%',
    borderRadius: 10,
    aspectRatio: 4 / 3,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  details: {
    justifyContent: 'space-between',
    padding: 10,
  },
  restaurantName: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#333',
  },
  restaurantDistance: {
    fontSize: 13,
    color: '#777',
  },
  ratings: {
    backgroundColor: '#eee',
    textAlign: 'center',
    width: 40,
    height: 25,
    color: 'black',
    borderRadius: 15,
    margin: 10,
    fontWeight: 'bold',
  },
});
