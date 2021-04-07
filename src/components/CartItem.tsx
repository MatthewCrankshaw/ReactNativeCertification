import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

type CartItemType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

interface CartItemPropType {
  item: CartItemType;
  styles: any;
  handleRemoveItems: any;
}

export default function CartItem(props: CartItemPropType) {
  return (
    <View style={props.styles.listRowContainer}>
      <View style={props.styles.listProductContainer}>
        <Text style={props.styles.listItemText}>{props.item.name}</Text>
      </View>
      <View style={props.styles.listItemContainer}>
        <Text style={props.styles.listItemText}>{props.item.price}</Text>
      </View>
      <View style={props.styles.listItemContainer}>
        <Text style={props.styles.listItemText}>{props.item.quantity}</Text>
      </View>
      <View style={props.styles.listItemContainer}>
        <Text style={props.styles.listItemText}>
          {props.item.price * props.item.quantity}
        </Text>
      </View>
      <View style={props.styles.listItemContainerBorderless}>
        <TouchableOpacity
          style={styles.removeTouchable}
          onPress={() => {
            props.handleRemoveItems(props.item.id);
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
