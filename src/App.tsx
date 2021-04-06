 import React from 'react';
 import {
   SafeAreaView,
   StatusBar,
   Text,
   View,
 } from 'react-native';
 import {Provider} from 'react-redux';
 import store from './redux/store';
 
 const App = () => {
   return (
     <Provider store={store}>
      <SafeAreaView>
        <StatusBar />
          <View>
            <Text>
              Hello world
            </Text>
          </View>
      </SafeAreaView>
     </Provider>
   );
 };

 export default App;
