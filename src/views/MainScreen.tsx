import React from 'react'; 
import {Button, SafeAreaView, StatusBar, View} from 'react-native';
import CartList from '../components/CartList';
import store from '../redux/store';

export default function MainScreen() {

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
                <CartList />
                <Button title="Add to cart" onPress={handleAdd} />
                <Button title="Remove from cart" onPress={handleRemove} />
            </SafeAreaView> 
        </View>
    );
}