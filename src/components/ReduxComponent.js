import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { increment } from '../actions';
import { decrement } from '../actions';

import { incrementBy } from '../actions';
import { decrementBy } from '../actions';

function ReduxComponent(){

	const counter = useSelector(state => state.counter);
	const dispatch = useDispatch();

	return(
		<div>
		Hello, I'm new ReduxComponent 
		<div className="form-group">
			<span className="text-center h1 d-block">{counter}</span>
			<button onClick={ () => dispatch(increment()) }
			className="btn btn-danger w-50 p-2">+</button>
			<button onClick={ () => dispatch(decrement()) }
			className="btn btn-danger w-50 p-2">-</button>

			<button onClick={ () => dispatch(incrementBy(5)) }
			className="btn mt-2 btn-danger w-50 p-2">+5</button>
			<button onClick={ () => dispatch(decrementBy(10)) }
			className="btn mt-2 btn-danger w-50 p-2">-10</button>

		</div>
		</div>
		)
}

export default ReduxComponent;