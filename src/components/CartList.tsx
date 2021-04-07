import React from 'react';
import {View} from 'react-native';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../redux/feature/cartSlice';
import CartItem from './CartItem';

export default function CartList() {

    const items = useSelector(selectCartItems);

    const renderItems = () => {
        return items.map((item: any, index: number) => {
            return <CartItem key={index} item={item} />
        });
    }

    return (
        <View>
            {renderItems()}
        </View>
    );
}