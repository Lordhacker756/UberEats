import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import data from '../../../data/orders.json';

const OrderPage = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          height: 50,
          marginBottom: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Your Orders
        </Text>
      </View>
      <FlatList
        data={data}
        style={{flex: 1}}
        renderItem={({item}) => (
          <View
            style={{
              height: 120,
              width: '100%',
              flexDirection: 'row',
              borderBottomColor: '#eee',
              borderBottomWidth: 2,
              marginVertical: 5,
              paddingVertical: 5,
            }}>
            <View>
              <Image
                source={{uri: item.Restaurant.image}}
                style={{height: 100, width: 100, borderRadius: 8}}
              />
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                justifyContent: 'center',
                gap: 5,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                {item.Restaurant.name}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: '#777',
                }}>
                Order ID {item.orderRestaurantId}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default OrderPage;
