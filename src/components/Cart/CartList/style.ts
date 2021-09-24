import {colors, makeStyles, Theme} from 'react-native-elements';

const useStyles = makeStyles((theme: Theme, props: any) => ({
  container: {
    flex: 1,
  },
  headerContainer: {
    display: 'flex',
    height: 40,
    backgroundColor: theme.colors?.secondary,
    flexDirection: 'row',
    margin: 3,
    borderRadius: 5,
  },
  productCell: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 5,
  },
  priceCell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityCell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 40,
  },
  totalCell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors?.black,
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
}));

export default useStyles;
