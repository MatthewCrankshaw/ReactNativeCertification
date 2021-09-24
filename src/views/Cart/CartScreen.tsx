import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import CartList from '../../components/Cart/CartList/CartList';
import {selectGrandTotal} from '../../redux/feature/cartSlice';
import {moneyFormat} from '../../Utils';
import {Button, Header} from 'react-native-elements';
import useStyles from './style';

export default function CartScreen({navigation}: any) {
  const styles = useStyles();
  const total = useSelector(selectGrandTotal);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        leftComponent={{
          icon: 'chevron-left',
          type: 'font-awesome',
          size: 20,
          iconStyle: styles.headerIcon,
          onPress: () => navigation.navigate('ShopScreen'),
        }}
        centerComponent={{
          text: 'Cart',
          style: styles.headerText,
        }}
      />
      <View style={styles.productsContainer}>
        <CartList />
      </View>
      <View style={styles.summary}>
        <Text style={styles.text}>Total: {moneyFormat(total)}</Text>
        <Button title="Finish & Pay" />
      </View>
    </SafeAreaView>
  );
}
