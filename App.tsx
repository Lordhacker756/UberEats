import React from 'react';
import Cart from './src/screens/Cart/Cart';
import Details from './src/screens/Details/Details';
import Home from './src/screens/Home/Home';
import MenuItem from './src/screens/MenuItem/MenuItem';
import OrderDetails from './src/screens/OrderDetails/OrderDetails';
import OrderPage from './src/screens/OrderPage/OrderPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="RestaurantDetails"
          component={Details}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MenuItem"
          component={MenuItem}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OrderDetails"
          component={OrderDetails}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OrderPage"
          component={OrderPage}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
