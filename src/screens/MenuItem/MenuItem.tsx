import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Btn from 'react-native-vector-icons/AntDesign';
import Cart from 'react-native-vector-icons/Entypo';

const MenuItem = () => {
  const [amount, setAmount] = useState(1);
  return (
    <View style={styles.mainContainer}>
      <Icon
        style={styles.backArrow}
        name="arrow-left"
        size={30}
        color="black"
      />
      <Text style={styles.heading}>Carolina Honey</Text>
      <Text style={styles.description}>
        Our famous ribs marinatead iwth our Carolina honey sauce, a mixture of
        honey with our orignal sauce with our origal sauce. Ideal for those
        looking for a sweet touch. Served with fries and coleslaw.
      </Text>
      <View style={styles.amountConatiner}>
        <Pressable
          onPress={() => {
            setAmount(amount + 1);
          }}>
          <Btn name="pluscircleo" size={50} color="black" />
        </Pressable>
        <Text style={styles.amount}>{amount}</Text>
        <Pressable
          onPress={() => {
            if (amount > 1) {
              setAmount(amount - 1);
            }
          }}>
          <Btn name="minuscircleo" size={50} color="black" />
        </Pressable>
      </View>
      <View style={styles.cartContainer}>
        <TouchableOpacity style={styles.addToCart}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
          <Cart name="shopping-cart" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  backArrow: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: 15,
    marginBottom: 5,
    lineHeight: 25,
    color: 'black',
  },
  amountConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    marginVertical: 10,
    borderTopWidth: 2,
    borderTopColor: '#eee',
  },
  amount: {
    fontSize: 40,
    fontWeight: 'bold',
    marginHorizontal: 20,
    color: 'black',
  },
  addToCart: {
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
  },
  addToCartText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cartContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
