import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import data from '../../../data/restaurants.json';
export default function Home() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <RestaurantCard props={{...item}} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
