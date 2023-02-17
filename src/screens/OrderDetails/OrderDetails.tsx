import React from 'react';
import {StyleSheet, Text, View, FlatList, Pressable} from 'react-native';

import data from '../../../data/restaurants.json';
import Icon from 'react-native-vector-icons/FontAwesome5';
import OrdersHeader from '../../components/ListHeader/OrdersHeader';
import {useNavigation} from '@react-navigation/native';
const dishes = data[0].dishes;

export default function OrderDetails() {
  const navigation = useNavigation();
  return (
    <View style={styles.pageContainer}>
      <FlatList
        ListHeaderComponent={OrdersHeader}
        data={dishes}
        renderItem={({item}) => (
          <View style={styles.menuItemContainer}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
              }}>
              <Text style={styles.itemCount}>1</Text>
              <Text style={styles.itemName}>{item.name}</Text>
            </View>
            <Text style={styles.itemPrice}>$ {item.price}</Text>
          </View>
        )}
      />
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate('Home')}>
        <Icon name="arrow-circle-left" size={30} color="white" />
      </Pressable>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#eee',
    borderBottomWidth: 2,
    margin: 10,
  },
  itemName: {
    fontSize: 15,
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
  back: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  itemCount: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: '#eee',
    padding: 8,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
