import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react'; 
import {Button, SafeAreaView, StatusBar, View} from 'react-native';
import { useSelector } from 'react-redux';
import CartList from '../components/CartList';
import { selectAllProducts } from '../redux/feature/productSlice';
import store from '../redux/store';

export default function MainScreen() {

    const allProducts = useSelector(selectAllProducts);
    const [selectedProduct, setSelectedProduct] = useState(allProducts[0]);

    const handleAdd = () => {
        store.dispatch({
            type: 'cart/add', 
            payload: {
                id: selectedProduct.id, 
                name: selectedProduct.name, 
                price: selectedProduct.price, 
                quantity: 1
            }
        });
    }

    const generateOptions = () => {
        return allProducts.map((product: any) => {
            return <Picker.Item key={product.id} label={product.name + ' $' + product.price} value={product.id} />
        });
    }

    return (
        <View>
            <SafeAreaView>
                <StatusBar />
                <CartList />
                <Picker onValueChange={(itemValue, itemIndex) => {setSelectedProduct(allProducts[itemIndex])}}>
                    {generateOptions()}
                </Picker>
                <Button title="Add to cart" onPress={handleAdd} />
            </SafeAreaView> 
        </View>
    );
}