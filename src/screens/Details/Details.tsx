import React from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import ListHeader from '../../components/ListHeader/ListHeader';
import data from '../../../data/restaurants.json';

const dishes = data[0].dishes;

export default function Details() {
  return (
    <View style={styles.pageContainer}>
      <FlatList
        ListHeaderComponent={ListHeader}
        data={dishes}
        renderItem={({item}) => (
          <View style={styles.menuItemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemIngredients}>{item.description}</Text>
            <Text style={styles.itemPrice}>$ {item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  menuItemContainer: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    rowGap: 5,
    borderBottomColor: '#eee',
    borderBottomWidth: 2,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  itemIngredients: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#777',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
