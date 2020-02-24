import React from 'react';
import ReactDOM from 'react-dom';

import ReduxComponent from './components/ReduxComponent';

import { createStore } from 'redux';



//store -> Globalized State


//Action
const increment = () => {
	return {
		type: 'INCREMENT'
	}
}

const decrement = () => {
	return {
		type: 'DECREMENT'
	}
}

//reducer
const counter = (state = 0, action) => {
	switch(action.type){
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			return state - 1;
	}
};

//create variable
let store = createStore(counter);

//display it in the console
store.subscribe(() => console.log(store.getState()));



//dispatch
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())

store.dispatch(decrement())
store.dispatch(decrement())






ReactDOM.render(<ReduxComponent />, document.getElementById("root"));