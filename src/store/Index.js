import {createStore, applyMiddleware, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import MyReducer from './reducer/MyReducer';

const reducer = combineReducers({MyReducer});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const middleWare = [thunk];

const store = createStore(persistedReducer, applyMiddleware(...middleWare));

export const persistor = persistStore(store);

export default store;
