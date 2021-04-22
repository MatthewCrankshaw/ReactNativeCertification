import {
  faMinusCircle,
  faPlusCircle,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useRef} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {Swipeable, TouchableOpacity} from 'react-native-gesture-handler';

import {store} from '../redux/store';
import {CartProduct} from '../types/types';
import {moneyFormat} from '../Utils';

interface CartItemPropType {
  item: CartProduct;
  handleDelete: Function;
}

export default function CartItem(props: CartItemPropType) {
  const handleAdd = () => {
    const {product} = props.item;
    store.dispatch({
      type: 'cart/add',
      payload: {
        product: {
          id: product.id,
          name: product.name,
          price: product.price,
        },
        quantity: 1,
      },
    });
  };

  const swipeableRef: React.Ref<Swipeable> = useRef(null);

  const handleRemove = () => {
    const {product} = props.item;
    store.dispatch({type: 'cart/remove', payload: product.id});
  };

  const renderDeleteTouchable = (dragX: Animated.Value) => {
    const translation = dragX.interpolate({
      inputRange: [0, 1],
      outputRange: [100, 0],
    });

    return (
      <Animated.View
        style={[
          styles.deleteContainer,
          {
            transform: [{translateX: translation}],
          },
        ]}>
        <View style={styles.deleteOverflow} />
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={styles.deleteTouchable}
            onPress={() => {
              props.handleDelete(props.item.product.id);
              swipeableRef.current?.close();
            }}>
            <FontAwesomeIcon icon={faTrashAlt} size={24} />
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  };

  return (
    <View style={[styles.listItemContainer, {margin: '1%'}]}>
      <Swipeable
        ref={swipeableRef}
        containerStyle={styles.listItemContainer}
        childrenContainerStyle={styles.listItemContent}
        renderRightActions={renderDeleteTouchable}>
        <View style={styles.listItemContent}>
          <View style={styles.listItemProductName}>
            <Text style={styles.centered}>Product</Text>
            <View style={styles.listItemTextContainer}>
              <Text style={styles.listItemText}>{props.item.product.name}</Text>
            </View>
          </View>
          <View style={styles.listItemPrice}>
            <Text style={styles.centered}>Price</Text>
            <View style={styles.listItemTextContainer}>
              <Text style={styles.listItemText}>
                {moneyFormat(props.item.product.price)}
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.centered}>Quantity</Text>
            <View style={styles.listItemQuantityContainer}>
              <TouchableOpacity
                style={styles.listItemQuantityButton}
                onPress={handleRemove}>
                <FontAwesomeIcon icon={faMinusCircle} size={24} />
              </TouchableOpacity>
              <View style={styles.listItemQuantityView}>
                <Text style={styles.listItemText}>{props.item.quantity}</Text>
              </View>
              <TouchableOpacity
                style={styles.listItemQuantityButton}
                onPress={handleAdd}>
                <FontAwesomeIcon icon={faPlusCircle} size={24} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.listItemTotal}>
            <Text style={styles.centered}>Total</Text>
            <View style={styles.listItemTextContainer}>
              <Text style={styles.listItemText}>
                {moneyFormat(props.item.quantity * props.item.product.price)}
              </Text>
            </View>
          </View>
        </View>
      </Swipeable>
    </View>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    display: 'flex',
    height: 70,
    borderRadius: 8,
    elevation: 5,
  },
  listItemContent: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  listItemTextContainer: {
    borderWidth: 2,
    borderColor: 'skyblue',
    borderRadius: 5,
    marginRight: 5,
    marginLeft: 5,
  },
  centered: {
    alignSelf: 'center',
  },
  listItemText: {
    fontSize: 20,
    paddingLeft: 10,
  },
  listItemProductName: {
    flex: 3,
    justifyContent: 'center',
  },
  listItemPrice: {
    flex: 2,
    justifyContent: 'center',
  },
  listItemQuantityContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemQuantityButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'skyblue',
    width: 32,
  },
  listItemQuantityView: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'skyblue',
    width: 40,
  },
  listItemTotal: {
    flex: 2,
    justifyContent: 'center',
    marginRight: 5,
    marginLeft: 5,
  },
  deleteContainer: {
    width: 100,
  },
  deleteTouchable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteOverflow: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 1000,
    backgroundColor: 'tomato',
  },
});
