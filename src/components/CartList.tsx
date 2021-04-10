import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectCartItems} from '../redux/feature/cartSlice';
import store from '../redux/store';
import {CartProduct} from '../types/types';
import CartItem from './CartItem';

export default function CartList(): React.ReactElement {
  const items = useSelector(selectCartItems);

  const handleRemoveItem = (id: number): void => {
    store.dispatch({type: 'cart/remove', payload: id});
  };

  const renderItems = (): React.ReactElement => {
    return items.map((item: CartProduct, index: number) => {
      return (
        <CartItem
          key={index}
          item={item}
          styles={styles}
          handleRemoveItems={handleRemoveItem}
        />
      );
    });
  };

  return (
    <View style={styles.listContainer}>
      <View style={styles.listRowContainer}>
        <View style={styles.listProductContainer}>
          <Text style={styles.listItemHeaderText}>Product</Text>
        </View>
        <View style={styles.listItemContainer}>
          <Text style={styles.listItemHeaderText}>Price</Text>
        </View>
        <View style={styles.listItemContainer}>
          <Text style={styles.listItemHeaderText}>Qty</Text>
        </View>
        <View style={styles.listItemContainer}>
          <Text style={styles.listItemHeaderText}>Total</Text>
        </View>
        <View style={styles.listItemContainerBorderless}></View>
      </View>
      {renderItems()}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    height: '90%',
  },
  listRowContainer: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
  },
  listProductContainer: {
    height: 30,
    flex: 2,
    borderWidth: 1,
    backgroundColor: 'skyblue',
    borderColor: 'dodgerblue',
  },
  listItemContainer: {
    height: 30,
    flex: 1,
    borderWidth: 1,
    backgroundColor: 'skyblue',
    borderColor: 'dodgerblue',
    alignItems: 'center',
  },
  listItemContainerBorderless: {
    height: 30,
    flex: 1,
    alignItems: 'center',
  },
  listItemHeaderText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  listItemText: {
    fontSize: 14,
  },
});
