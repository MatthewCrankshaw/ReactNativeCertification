import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import CartList from '../components/CartList';
import {selectGrandTotal} from '../redux/feature/cartSlice';
import {moneyFormat} from '../Utils';

export default function CartScreen({navigation}: any) {
  const total = useSelector(selectGrandTotal);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.productsContainer}>
        <CartList />
      </View>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 20}}>Total: {moneyFormat(total)}</Text>
      </View>
      <View style={styles.checkoutButtonView}>
        <TouchableOpacity
          style={styles.cartTouchable}
          onPress={() => navigation.navigate('ShopScreen')}>
          <Text style={styles.checkoutText}>Back To Shop</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  productsContainer: {
    flex: 15,
    height: '100%',
  },
  productsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#DDD',
  },
  checkoutButtonView: {flex: 1},
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
