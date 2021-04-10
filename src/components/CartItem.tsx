import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CartProduct} from '../types/types';
interface CartItemPropType {
  item: CartProduct;
  styles: any;
  handleRemoveItems: Function;
}

export default function CartItem(props: CartItemPropType) {
  return (
    <View style={props.styles.listRowContainer}>
      <View style={props.styles.listProductContainer}>
        <Text style={props.styles.listItemText}>{props.item.product.name}</Text>
      </View>
      <View style={props.styles.listItemContainer}>
        <Text style={props.styles.listItemText}>
          {props.item.product.price}
        </Text>
      </View>
      <View style={props.styles.listItemContainer}>
        <Text style={props.styles.listItemText}>{props.item.quantity}</Text>
      </View>
      <View style={props.styles.listItemContainer}>
        <Text style={props.styles.listItemText}>
          {props.item.product.price * props.item.quantity}
        </Text>
      </View>
      <View style={props.styles.listItemContainerBorderless}>
        <TouchableOpacity
          style={styles.removeTouchable}
          onPress={() => {
            props.handleRemoveItems(props.item.product.id);
          }}>
          <Text style={styles.removeTouchableText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  removeTouchable: {
    backgroundColor: 'tomato',
    width: 50,
    height: 24,
    borderRadius: 10,
  },
  removeTouchableText: {
    fontSize: 12,
    textAlign: 'center',
  },
});
