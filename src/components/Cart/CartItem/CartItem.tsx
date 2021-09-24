import {
  faMinusCircle,
  faPlusCircle,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useRef} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {Swipeable, TouchableOpacity} from 'react-native-gesture-handler';
import {store} from '../../../redux/store';
import {CartProduct} from '../../../types/types';
import {moneyFormat} from '../../../Utils';
import {Divider} from 'react-native-elements';
import useStyles from './style';

interface CartItemPropType {
  item: CartProduct;
  handleDelete: Function;
}

export default function CartItem(props: CartItemPropType) {
  const styles = useStyles();

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
        <View>
          <TouchableOpacity
            style={styles.deleteTouchable}
            onPress={() => {
              props.handleDelete(props.item.product.id);
              swipeableRef.current?.close();
            }}>
            <FontAwesomeIcon
              icon={faTrashAlt}
              size={24}
              style={styles.deleteIcon}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <Swipeable
        ref={swipeableRef}
        containerStyle={styles.container}
        childrenContainerStyle={styles.content}
        renderRightActions={renderDeleteTouchable}>
        <View style={styles.content}>
          <View style={styles.productCell}>
            <Text style={[styles.text, styles.paddedText]}>
              {props.item.product.name}
            </Text>
          </View>
          <Divider width={2} orientation="vertical" />
          <View style={styles.priceCell}>
            <View>
              <Text style={[styles.text, styles.paddedText]}>
                {moneyFormat(props.item.product.price)}
              </Text>
            </View>
          </View>
          <Divider width={2} orientation="vertical" />
          <View>
            <View style={styles.quantityCell}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={handleAdd}>
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  size={24}
                  style={styles.quantityIcon}
                />
              </TouchableOpacity>
              <View>
                <Text>{props.item.quantity}</Text>
              </View>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={handleRemove}>
                <FontAwesomeIcon
                  icon={faMinusCircle}
                  size={24}
                  style={styles.quantityIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Divider width={2} orientation="vertical" />
          <View style={styles.totalCell}>
            <View>
              <Text style={[styles.text, styles.paddedText]}>
                {moneyFormat(props.item.quantity * props.item.product.price)}
              </Text>
            </View>
          </View>
        </View>
      </Swipeable>
    </View>
  );
}
