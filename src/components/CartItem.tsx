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
import {Divider} from 'react-native-elements';

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

  const renderDeleteTouchable = (
    progress: Animated.AnimatedInterpolation,
    dragX: Animated.AnimatedInterpolation,
  ) => {
    const translation = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [0, 100],
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
            <Text style={styles.listItemText}>{props.item.product.name}</Text>
          </View>
          <Divider width={2} orientation="vertical" />
          <View style={styles.listItemPrice}>
            <View>
              <Text style={styles.listItemText}>
                {moneyFormat(props.item.product.price)}
              </Text>
            </View>
          </View>
          <Divider width={2} orientation="vertical" />
          <View>
            <View style={styles.listItemQuantityContainer}>
              <TouchableOpacity
                style={styles.listItemQuantityButton}
                onPress={handleAdd}>
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  size={24}
                  color="skyblue"
                />
              </TouchableOpacity>
              <View>
                <Text style={styles.listItemQuantityText}>
                  {props.item.quantity}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.listItemQuantityButton}
                onPress={handleRemove}>
                <FontAwesomeIcon
                  icon={faMinusCircle}
                  size={24}
                  color="skyblue"
                />
              </TouchableOpacity>
            </View>
          </View>
          <Divider width={2} orientation="vertical" />
          <View style={styles.listItemTotal}>
            <View>
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
    height: 80,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
  },
  listItemContent: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  listItemText: {
    fontSize: 16,
    paddingLeft: 10,
  },
  listItemQuantityText: {
    textAlign: 'center',
  },
  listItemProductName: {
    flex: 3,
    padding: 3,
    justifyContent: 'center',
  },
  listItemPrice: {
    flex: 2,
    justifyContent: 'center',
  },
  listItemQuantityContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemQuantityButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
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
