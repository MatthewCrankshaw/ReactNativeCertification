import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import ProductItem from '../components/ProductItem';
import {selectAllProducts} from '../redux/feature/productSlice';
import {Product} from '../types/types';

export default function MainScreen({navigation}: any) {
  const allProducts = useSelector(selectAllProducts);

  const generateOptions = () => {
    return allProducts.map((product: Product) => {
      return <ProductItem key={product.id} product={product} />;
    });
  };

  return (
    <View>
      <SafeAreaView>
        <ScrollView style={styles.productsScrollView} bounces={true}>
          <View style={styles.productsContainer}>{generateOptions()}</View>
        </ScrollView>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate('CartScreen')}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Checkout</Text>
        </TouchableOpacity>
        <StatusBar />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  productsScrollView: {
    width: '100%',
    height: '90%',
  },
  productsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#DDD',
  },
  cartButton: {
    width: '90%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 20,
    marginLeft: '5%',
    marginTop: 10,
  },
});
