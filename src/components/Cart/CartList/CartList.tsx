import React from 'react';
import {Text, View} from 'react-native';
import {Divider} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

import {selectCartItems} from '../../../redux/feature/cartSlice';
import {store} from '../../../redux/store';
import {CartProduct} from '../../../types/types';
import CartItem from '../CartItem/CartItem';
import useStyles from './style';

export default function CartList(): React.ReactElement {
  const styles = useStyles();
  const items = useSelector(selectCartItems);

  const handleDelete = (id: number): void => {
    store.dispatch({type: 'cart/delete', payload: id});
  };

  const renderItems = (): React.ReactElement => {
    return items.map((item: CartProduct, index: number) => {
      return <CartItem key={index} item={item} handleDelete={handleDelete} />;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Divider width={2} orientation="vertical" />
        <View style={styles.productCell}>
          <Text style={styles.headerText}>Product</Text>
        </View>
        <Divider width={2} orientation="vertical" />
        <View style={styles.priceCell}>
          <Text style={styles.headerText}>Price</Text>
        </View>
        <Divider width={2} orientation="vertical" />
        <View style={styles.quantityCell}>
          <Text style={styles.headerText}>Qty</Text>
        </View>
        <Divider width={2} orientation="vertical" />
        <View style={styles.totalCell}>
          <Text style={styles.headerText}>Total</Text>
        </View>
        <Divider width={2} orientation="vertical" />
      </View>
      <ScrollView>
        {items.length > 0 ? (
          renderItems()
        ) : (
          <View style={styles.placeholderContainer}>
            <Text style={styles.placeholderText}>
              There are no items in your cart!
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
