import {makeStyles, Theme} from 'react-native-elements';

const useStyles = makeStyles((theme: Theme, props: any) => ({
  container: {
    flex: 1,
  },
  headerText: {
    color: theme.colors?.secondary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#DDD',
  },
  checkoutButton: {
    flex: 1,
    maxHeight: 50,
  },
}));

export default useStyles;
