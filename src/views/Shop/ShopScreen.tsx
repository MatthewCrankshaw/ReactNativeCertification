import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

import ProductItem from '../../components/Product/ProductItem/ProductItem';
import {selectCartCount} from '../../redux/feature/cartSlice';
import {selectAllProducts} from '../../redux/feature/productSlice';
import {Product} from '../../types/types';
import {Button, Header} from 'react-native-elements';
import useStyles from './styles';

export default function MainScreen({navigation}: any) {
  const allProducts = useSelector(selectAllProducts);
  const cartCount = useSelector(selectCartCount);
  const styles = useStyles();

  const generateOptions = () => {
    return allProducts.map((product: Product) => {
      return <ProductItem key={product.id} product={product} />;
    });
  };

  const formatCartCount = () => {
    return cartCount ? 'Checkout (' + cartCount + ')' : 'Checkout';
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        centerComponent={{
          text: 'React Native Certification',
          style: styles.headerText,
        }}
      />
      <View style={styles.container}>
        <ScrollView bounces={true}>
          <View style={styles.listContainer}>{generateOptions()}</View>
        </ScrollView>
      </View>
      <Button
        title={formatCartCount()}
        style={styles.checkoutButton}
        onPress={() => navigation.navigate('CartScreen')}
      />
    </SafeAreaView>
  );
}
