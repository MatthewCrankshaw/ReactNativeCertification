 import React from 'react';
 import {
   SafeAreaView,
   StatusBar,
   Text,
   View,
 } from 'react-native';
 import {Provider} from 'react-redux';
 import store from './store';
 
 const App = () => {

  console.log('state', store.getState().cart);

   return (
     <Provider store={store}>
      <SafeAreaView>
        <StatusBar />
          <View>
            <Text>

            </Text>
          </View>
      </SafeAreaView>
     </Provider>
   );
 };

 export default App;
