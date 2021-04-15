import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Swipeable, TouchableOpacity} from 'react-native-gesture-handler';
import {CartProduct} from '../types/types';
import {moneyFormat} from '../Utils';
interface CartItemPropType {
  item: CartProduct;
  handleRemoveItem: Function;
}

export default function CartItem(props: CartItemPropType) {
  const renderDeleteTouchable = () => {
    return (
      <View style={{width: 100, backgroundColor: 'red'}}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => props.handleRemoveItem(props.item.product.id)}>
          <Text>Remove</Text>
        </TouchableOpacity>
      </View>
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
          <View style={styles.listItemQuantity}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'skyblue',
              }}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 30}}>-</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                borderWidth: 2,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                {props.item.quantity}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: 'skyblue',
              }}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
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
    backgroundColor: '#DDD',
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
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
  listItemQuantity: {
    flex: 1,
    flexDirection: 'row',
    borderLeftWidth: 2,
    borderColor: 'grey',
    padding: 5,
  },
  listItemTotal: {
    flex: 2,
    justifyContent: 'center',
    borderLeftWidth: 2,
    borderColor: 'grey',
    padding: 5,
  },
});
