import {TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const Cart = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        margin: 20,
      }}>
      <Icon name="arrow-left" size={30} color="black" />
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          marginVertical: 15,
          color: 'black',
        }}>
        Tony Roma's - C.C. Meridiano
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: 'black',
        }}>
        Your Items
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
          paddingVertical: 10,
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#eee',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: 15,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
              backgroundColor: '#eee',
              padding: 8,
              borderRadius: 10,
            }}>
            1
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Carolina Honey
          </Text>
        </View>

        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black',
          }}>
          $ 10.00
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: '#777',
          }}>
          Subtotal
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black',
          }}>
          $ 10.00
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: '#777',
          }}>
          Total
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black',
          }}>
          $ 33.33
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#000',
          position: 'absolute',
          bottom: 10,
          width: '100%',
          margin: 'auto',
          height: 60,
          borderRadius: 10,
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
          }}>
          Checkout
        </Text>
        <Icon name="shopping-cart" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
