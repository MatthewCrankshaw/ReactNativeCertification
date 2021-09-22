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
import {Header} from 'react-native-elements';

export default function CartScreen({navigation}: any) {
  const total = useSelector(selectGrandTotal);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        leftComponent={{
          icon: 'chevron-left',
          type: 'font-awesome',
          color: '#000',
          size: 20,
          iconStyle: {color: '#000'},
          onPress: () => navigation.navigate('ShopScreen'),
        }}
        centerComponent={{
          text: 'Cart',
          style: {color: '#000', fontSize: 18, fontWeight: 'bold'},
        }}
      />
      <View style={styles.productsContainer}>
        <CartList />
      </View>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 20}}>Total: {moneyFormat(total)}</Text>
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
