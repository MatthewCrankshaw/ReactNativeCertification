import React from 'react';
import {View, Text} from 'react-native';

type CartItemType = {
    name: string,
    price: number,
    quantity: number
}

interface CartItemPropType {
    item: CartItemType
}

export default function CartItem(props: CartItemPropType) {
    return (
        <View>
            <Text>{props.item.name}</Text>
            <Text>{props.item.price}</Text>
            <Text>{props.item.quantity}</Text>
        </View>
    );
}