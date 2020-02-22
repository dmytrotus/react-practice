import React from 'react'

function Product(props){

	console.log(props)
	
	return(
		<div className="product">
		<h1>{props.name}</h1>
		<p>{props.price}</p>
		Blabla
		</div>
	)
}

export default Product