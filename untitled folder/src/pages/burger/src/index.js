import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {legacy_createStore,applyMiddleware, compose, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'
import reducer from './store/reducer/reducer';

import thunk from 'redux-thunk';
import orderReducer from './store/reducer/order-reducer';
import auth from './store/reducer/auth-reducer';


const rootReducer = combineReducers({
        reducer : reducer,
        orderReducer : orderReducer,
        auth : auth,

})
const composeEhancers = process.env.NODE_ENV ==="development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose; 
const store = legacy_createStore(rootReducer, composeEhancers(
    applyMiddleware(thunk)
))
const app = (
    <Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    </Provider>  
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app)

registerServiceWorker();
