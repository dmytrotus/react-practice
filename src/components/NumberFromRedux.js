import React from 'react';
import { useSelector } from 'react-redux';

function NumberFromRedux(){

	const counter = useSelector(state => state.counter);

	return(
		<div>
		Hello, I'm new NumberFromRedux 
		<div className="form-group">
			<span className="text-center h1 d-block">{counter}</span>
		</div>
		</div>
		)
}

export default NumberFromRedux;