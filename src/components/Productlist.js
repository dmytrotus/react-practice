import React from 'react'
import Product from './Product'
import ProductData from './ProductData'

function Productlist(){

	console.log(ProductData)


	const product = ProductData.map(item => <Product name={item.name} price={item.price} key={item.id} />);
	//const product = ProductData.map(item => <Product />)


	return (

		<div>
		{product}
		</div>

	)
}

export default Productlist