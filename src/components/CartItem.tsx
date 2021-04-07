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
        <View style={{height: 30, backgroundColor: 'teal'}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{marginLeft: 10, marginRight: 10}}>
                    <Text>{props.item.name}</Text>
                </View>
                <View style={{marginLeft: 10, marginRight: 10}}>
                    <Text>{props.item.price}</Text>
                </View>
                <View style={{marginLeft: 10, marginRight: 10}}>
                    <Text>{props.item.quantity}</Text>
                </View>
            </View>
        </View>
    );
}