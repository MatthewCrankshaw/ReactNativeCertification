import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlusCircle, faMinusCircle} from '@fortawesome/free-solid-svg-icons';

import {selectCartItems} from '../redux/feature/cartSlice';
import {store} from '../redux/store';
import {CartProduct, Product} from '../types/types';
import {moneyFormat} from '../Utils';

type productItemPropsType = {
  product: Product;
};

export default function ProductItem(props: productItemPropsType) {
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
    (item: CartProduct) => item.product.id == props.product.id,
  );

  return (
    <View style={styles.productItemContainer}>
      <View style={styles.productNameContainer}>
        <Text style={styles.productNameText}>{props.product.name}</Text>
      </View>
      <View style={styles.productPriceContainer}>
        <Text style={styles.productPriceText}>
          {moneyFormat(props.product.price)}
        </Text>
      </View>
      {cartItem ? (
        <View style={styles.productQuantityContainer}>
          <TouchableOpacity
            style={[styles.productQuantity, styles.productQuantityLeft]}
            onPress={() => handleRemove()}>
            <FontAwesomeIcon icon={faMinusCircle} size={24} />
          </TouchableOpacity>
          <View style={[styles.productQuantity, styles.productQuantityView]}>
            <Text style={styles.productQuantityText}>
              {cartItem && cartItem.quantity}
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.productQuantity, styles.productQuantityRight]}
            onPress={handleAdd}>
            <FontAwesomeIcon icon={faPlusCircle} size={24} />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.productAddToCartTouchable}
          onPress={handleAdd}>
          <Text style={styles.productAddToCartText}>Add To Cart</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  productItemContainer: {
    display: 'flex',
    width: '48%',
    height: 200,
    backgroundColor: 'white',
    margin: '1%',
    elevation: 5,
    borderRadius: 8,
  },
  productNameContainer: {
    height: 80,
    paddingTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  productPriceContainer: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productQuantityContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  productQuantity: {
    backgroundColor: 'skyblue',
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productQuantityLeft: {
    borderBottomLeftRadius: 5,
  },
  productQuantityRight: {
    borderBottomRightRadius: 5,
  },
  productQuantityView: {
    borderColor: 'white',
    borderLeftWidth: 3,
    borderRightWidth: 3,
  },
  productAddToCartTouchable: {
    backgroundColor: 'skyblue',
    width: '100%',
    height: 40,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productNameText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  productPriceText: {
    fontSize: 25,
  },
  productAddToCartText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productQuantityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
