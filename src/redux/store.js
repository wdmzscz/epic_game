import {createStore,applyMiddleware} from 'react-redux';
import Reducer from './reducer';
import thunk from 'react-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

export default createStore(Reducer,composeWithDevTools(applyMiddleware(thunk)));