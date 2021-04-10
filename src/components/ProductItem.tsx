import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectCartItems} from '../redux/feature/cartSlice';
import store from '../redux/store';
import {CartProduct, Product} from '../types/types';

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

  const moneyFormat = (value: number) => {
    return '$' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
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
            style={styles.productQuantityTouchable}
            onPress={() => handleRemove()}>
            <Text style={styles.productQuantityText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.productQuantityTouchable}>
            <Text style={styles.productQuantityText}>
              {cartItem && cartItem.quantity}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.productQuantityTouchable}
            onPress={handleAdd}>
            <Text style={styles.productQuantityText}>+</Text>
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
    width: '48%',
    height: 200,
    backgroundColor: 'white',
    margin: 3,
    display: 'flex',
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
  productQuantityTouchable: {
    backgroundColor: 'skyblue',
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 5,
  },
  productAddToCartTouchable: {
    backgroundColor: 'skyblue',
    width: '100%',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productNameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productPriceText: {
    fontSize: 20,
  },
  productAddToCartText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  productQuantityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
