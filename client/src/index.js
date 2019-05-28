import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';	
import 'semantic-ui-css/semantic.min.css';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
ReactDOM.render(	ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root')); 
=======
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> 6e00a5944d0a39da9fd156bdbfe5f7dafef18ac7

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
<<<<<<< HEAD
// serviceWorker.unregister();
=======
serviceWorker.unregister();
>>>>>>> 6e00a5944d0a39da9fd156bdbfe5f7dafef18ac7
