import React from 'react';
import {Button, View} from 'react-native';
import CartList from '../components/CartList';

export default function CartScreen({navigation}: any) {
  return (
    <View>
      <CartList />
      <Button
        title="Go to Shop"
        onPress={() => {
          navigation.navigate('ShopScreen');
        }}
      />
    </View>
  );
}
