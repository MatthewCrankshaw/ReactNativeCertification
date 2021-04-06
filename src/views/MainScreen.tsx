import React from 'react'; 
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import CartItem from '../components/CartItem';

export default function MainScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <SafeAreaView>
                <StatusBar />
                <CartItem item={{name: 'hello', price: 10, quantity: 10}}/>
            </SafeAreaView> 
        </View>
    );
}