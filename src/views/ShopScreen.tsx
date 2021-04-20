import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

import ProductItem from '../components/ProductItem';
import {selectCartCount} from '../redux/feature/cartSlice';
import {selectAllProducts} from '../redux/feature/productSlice';
import {Product} from '../types/types';

export default function MainScreen({navigation}: any) {
  const allProducts = useSelector(selectAllProducts);
  const cartCount = useSelector(selectCartCount);

  const generateOptions = () => {
    return allProducts.map((product: Product) => {
      return <ProductItem key={product.id} product={product} />;
    });
  };

  const formatCartCount = () => {
    return cartCount ? '(' + cartCount + ')' : '';
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.productsContainer}>
        <ScrollView bounces={true}>
          <View style={styles.productsList}>{generateOptions()}</View>
        </ScrollView>
      </View>
      <View style={styles.checkoutButtonView}>
        <TouchableOpacity
          style={styles.cartTouchable}
          onPress={() => navigation.navigate('CartScreen')}>
          <Text style={styles.checkoutText}>Checkout {formatCartCount()}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  productsContainer: {
    flex: 15,
  },
  productsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#DDD',
  },
  checkoutButtonView: {flex: 1, justifyContent: 'center'},
  cartTouchable: {
    height: '100%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkoutText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
