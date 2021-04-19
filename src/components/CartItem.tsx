import React from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {Swipeable, TouchableOpacity} from 'react-native-gesture-handler';

import store from '../redux/store';
import {CartProduct} from '../types/types';
import {moneyFormat} from '../Utils';
interface CartItemPropType {
  item: CartProduct;
  handleDelete: Function;
}

export default function CartItem(props: CartItemPropType) {
  const handleAdd = () => {
    const {product} = props.item;
    store.dispatch({
      type: 'cart/add',
      payload: {
        product: {
          id: product.id,
          name: product.name,
          price: product.price,
        },
        quantity: 1,
      },
    });
  };

  const handleRemove = () => {
    const {product} = props.item;
    store.dispatch({type: 'cart/remove', payload: product.id});
  };

  const renderDeleteTouchable = (dragX: Animated.Value) => {
    const translation = dragX.interpolate({
      inputRange: [0, 1],
      outputRange: [100, 0],
    });

    return (
      <Animated.View
        style={[
          styles.deleteContainer,
          {
            transform: [{translateX: translation}],
          },
        ]}>
        <View style={styles.deleteOverflow} />
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => props.handleDelete(props.item.product.id)}>
          <Text>Remove</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View style={styles.listItemContainer}>
      <View style={styles.listItemContent}>
        <Swipeable
          containerStyle={styles.listItemContent}
          childrenContainerStyle={styles.listItemContent}
          renderRightActions={renderDeleteTouchable}>
          <View style={styles.listItemProductName}>
            <Text style={styles.listItemText}>{props.item.product.name}</Text>
          </View>
          <View style={styles.listItemPrice}>
            <Text style={styles.listItemText}>
              {moneyFormat(props.item.product.price)}
            </Text>
          </View>
          <View style={styles.listItemQuantityContainer}>
            <View style={styles.listItemQuantityButton}>
              <TouchableOpacity style={styles.touchable} onPress={handleRemove}>
                <Text style={{fontSize: 30}}>-</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.listItemQuantityButton}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                {props.item.quantity}
              </Text>
            </View>
            <View style={styles.listItemQuantityButton}>
              <TouchableOpacity style={styles.touchable} onPress={handleAdd}>
                <Text style={{fontSize: 30}}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.listItemTotal}>
            <Text style={styles.listItemText}>
              {moneyFormat(props.item.quantity * props.item.product.price)}
            </Text>
          </View>
        </Swipeable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    flex: 1,
    height: 80,
    backgroundColor: 'white',
    margin: 3,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
  },
  listItemContent: {
    flex: 1,
    flexDirection: 'row',
  },
  listItemText: {
    fontSize: 20,
    paddingLeft: 20,
  },
  listItemProductName: {
    flex: 3,
    justifyContent: 'center',
    padding: 5,
  },
  listItemPrice: {
    flex: 2,
    justifyContent: 'center',
    borderLeftWidth: 2,
    borderColor: 'grey',
    padding: 5,
  },
  listItemQuantityContainer: {
    flex: 1,
    flexDirection: 'row',
    borderLeftWidth: 2,
    borderColor: 'grey',
  },
  listItemQuantityButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    borderRadius: 5,
    margin: 3,
  },
  touchable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemTotal: {
    flex: 2,
    justifyContent: 'center',
    borderLeftWidth: 2,
    borderColor: 'grey',
    padding: 5,
  },
  deleteContainer: {
    width: 100,
  },
  deleteOverflow: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 1000,
    backgroundColor: 'tomato',
  },
});
