import React from 'react'; 
import {Button, SafeAreaView, StatusBar, View} from 'react-native';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { selectCartItems } from '../redux/feature/cartSlice';
import store from '../redux/store';

export default function MainScreen() {
    
    const items = useSelector(selectCartItems); 

    const renderItems = () => {
        let id = 0;
        return items.map((item: any) => {
            id++;
            return <CartItem key={id} item={item} />
        });
    }

    const handleAdd = () => {
        store.dispatch({type: 'cart/add', payload: {name: 'a', price: 20, quantity: 10}});
    }

    const handleRemove = () => {
        store.dispatch({type: 'cart/remove'});
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <SafeAreaView>
                <StatusBar />
                {renderItems()}
                <Button title="Add to cart" onPress={handleAdd} />
                <Button title="Remove from cart" onPress={handleRemove} />
            </SafeAreaView> 
        </View>
    );
}