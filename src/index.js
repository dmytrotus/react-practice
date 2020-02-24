import React from 'react';
import ReactDOM from 'react-dom';

import ReduxComponent from './components/ReduxComponent';
import { createStore } from 'redux';
import allReducer from './reducers';///mistake

import { Provider } from 'react-redux';

import NumberFromRedux from './components/NumberFromRedux';


const store = createStore(
	allReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);





ReactDOM.render(
	<Provider store={store}>
	<ReduxComponent />
	</Provider>, document.getElementById("root"));

ReactDOM.render(
	<Provider store={store}>
	<NumberFromRedux />
	</Provider>, document.getElementById("number"));