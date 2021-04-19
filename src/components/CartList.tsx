import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

import {selectCartItems} from '../redux/feature/cartSlice';
import store from '../redux/store';
import {CartProduct} from '../types/types';
import CartItem from './CartItem';

export default function CartList(): React.ReactElement {
  const items = useSelector(selectCartItems);

  const handleDelete = (id: number): void => {
    store.dispatch({type: 'cart/delete', payload: id});
  };

  const renderItems = (): React.ReactElement => {
    return items.map((item: CartProduct, index: number) => {
      return <CartItem key={index} item={item} handleDelete={handleDelete} />;
    });
  };

  return (
    <View style={styles.listContainer}>
      <ScrollView style={{flex: 1}}>
        {items.length > 0 ? (
          renderItems()
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>
              There are no items in your cart!
            </Text>
          </View>
        )}
      </ScrollView>
      <Text style={{fontSize: 25, fontWeight: 'bold'}}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    height: '90%',
  },
});
