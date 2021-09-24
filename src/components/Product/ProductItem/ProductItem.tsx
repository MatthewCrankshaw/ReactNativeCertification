import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlusCircle, faMinusCircle} from '@fortawesome/free-solid-svg-icons';

import {selectCartItems} from '../../../redux/feature/cartSlice';
import {store} from '../../../redux/store';
import {CartProduct, Product} from '../../../types/types';
import {moneyFormat} from '../../../Utils';
import useStyles from './style';
import {Divider} from 'react-native-elements';
import {useOrientation} from '../../../hooks/useOrientation';

type productItemPropsType = {
  product: Product;
};

export default function ProductItem(props: productItemPropsType) {
  const orientation = useOrientation();
  const styles = useStyles({orientation: orientation});

  const handleAdd = () => {
    store.dispatch({
      type: 'cart/add',
      payload: {
        product: {
          id: props.product.id,
          name: props.product.name,
          price: props.product.price,
        },
        quantity: 1,
      },
    });
  };

  const handleRemove = () => {
    store.dispatch({type: 'cart/remove', payload: props.product.id});
  };

  const cartItems = useSelector(selectCartItems);

  const cartItem = cartItems.find(
    (item: CartProduct) => item.product.id === props.product.id,
  );

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Text style={styles.productText}>{props.product.name}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{moneyFormat(props.product.price)}</Text>
      </View>
      {cartItem ? (
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={[styles.quantityCell, styles.quantityCellLeft]}
            onPress={() => handleRemove()}>
            <FontAwesomeIcon
              icon={faMinusCircle}
              size={24}
              style={styles.quantityContents}
            />
          </TouchableOpacity>
          <Divider width={2} orientation="vertical" />
          <View style={styles.quantityCell}>
            <Text style={[styles.text, styles.quantityContents]}>
              {cartItem && cartItem.quantity}
            </Text>
          </View>
          <Divider width={2} orientation="vertical" />
          <TouchableOpacity
            style={[styles.quantityCell, styles.quantityCellRight]}
            onPress={handleAdd}>
            <FontAwesomeIcon
              icon={faPlusCircle}
              size={24}
              style={styles.quantityContents}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.addToCartCell} onPress={handleAdd}>
          <Text style={styles.text}>Add To Cart</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
