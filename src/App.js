import {View, StatusBar} from 'react-native';
import React from 'react';
import Index from './navigation/Index';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './store/Index';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#363A5A" barStyle="dark-content" />
      <Provider store={store} persistor={persistor}>
        <PersistGate persistor={persistor}>
          <Index />
        </PersistGate>
      </Provider>
    </View>
  );
};

export default App;
