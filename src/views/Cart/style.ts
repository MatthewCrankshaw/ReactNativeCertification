import {makeStyles, Theme} from 'react-native-elements';

const useStyles = makeStyles((theme: Theme, props: any) => ({
  productsContainer: {
    flex: 4,
  },
  headerText: {
    color: theme.colors?.secondary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcon: {
    color: theme.colors?.secondary,
  },
  summary: {
    flex: 1,
    maxHeight: 90,
    minHeight: 30,
    justifyContent: 'flex-end',
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
}));

export default useStyles;
