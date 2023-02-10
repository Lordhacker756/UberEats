import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const MenuItem = () => {
  return (
    <View>
      <Text>MenuItem</Text>
      <Icon name="arrow-circle-left" size={30} color="black" />
    </View>
  );
};

export default MenuItem;
