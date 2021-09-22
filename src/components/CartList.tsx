import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

import {selectCartItems} from '../redux/feature/cartSlice';
import {store} from '../redux/store';
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
      <View
        style={{
          display: 'flex',
          height: 40,
          backgroundColor: '#031e45',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
            Product
          </Text>
        </View>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
            Price
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
            Qty
          </Text>
        </View>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
            Total
          </Text>
        </View>
      </View>
      <ScrollView>
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
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
});
