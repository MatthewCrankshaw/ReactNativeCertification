import {Dimensions} from 'react-native';
import {makeStyles, Theme} from 'react-native-elements';

const useStyles = makeStyles((theme: Theme, props: any) => {
  const width =
    props.orientation == 'PORTRAIT'
      ? (Dimensions.get('window').width - 10 * 2) / 2
      : (Dimensions.get('window').width - 10 * 3) / 3;

  return {
    container: {
      display: 'flex',
      width: width,
      height: 200,
      backgroundColor: theme.colors?.white,
      alignSelf: 'center',
      elevation: 5,
      borderRadius: 5,
      margin: 5,
    },
    productContainer: {
      flex: 1,
      paddingTop: 5,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    priceContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    quantityCell: {
      backgroundColor: theme.colors?.secondary,
      flex: 1,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    quantityCellLeft: {
      borderBottomLeftRadius: 5,
    },
    quantityCellRight: {
      borderBottomRightRadius: 5,
    },
    quantityContents: {
      color: theme.colors?.primary,
    },
    addToCartCell: {
      backgroundColor: theme.colors?.secondary,
      height: 40,
      borderBottomRightRadius: 5,
      borderBottomLeftRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    productText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    priceText: {
      fontSize: 25,
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.colors?.primary,
    },
  };
});

export default useStyles;
