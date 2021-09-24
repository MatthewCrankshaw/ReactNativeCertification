import {makeStyles, Theme} from 'react-native-elements';

const useStyles = makeStyles((theme: Theme, props: any) => ({
  container: {
    display: 'flex',
    height: 80,
    borderWidth: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: theme.colors?.white,
  },
  text: {
    fontSize: 14,
  },
  paddedText: {
    paddingLeft: 5,
  },
  centeredText: {
    textAlign: 'center',
  },
  productCell: {
    flex: 2,
    padding: 3,
    justifyContent: 'center',
  },
  priceCell: {
    flex: 1,
    justifyContent: 'center',
  },
  quantityCell: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 40,
  },
  quantityButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
  },
  quantityIcon: {
    color: theme.colors?.primary,
  },
  totalCell: {
    flex: 1,
    justifyContent: 'center',
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
    backgroundColor: theme.colors?.error,
  },
  deleteIcon: {
    color: theme.colors?.black,
  },
}));

export default useStyles;
