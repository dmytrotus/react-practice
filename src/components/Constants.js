import React from 'react'

function Constants(){
	const firstName = "Dima"
	const lastName = "Tus"

	var text = [1,2,3,5];
	var i;
/*	for (i = 1; i < 29; i++) {
		text += i;
	}*/

	let timeofday
	const date = new Date()
	const hours = date.getHours();

	let styles = {
		color:"#fff",
		backgroundColor: "#000"
	}

	if( hours < 10 ){
		timeofday = 'Morning'
	} else if ( hours >= 10 && hours <= 17 ){
		timeofday = 'Afternoon'
		styles.color = "red"
	} else {
		timeofday = 'Night'
	}

	


	return(
	<div className="constants">
		<h1>Hello {firstName + " "+ lastName}. How are  you?</h1>
		<h1>Hello {`${firstName} ${lastName}`}! Good <span style={{color:"red", backgroundColor: "#fff"}}>{timeofday}</span> to you</h1>
		<h1>Hello {`${firstName} ${lastName}`}! Good <span style={styles}>{timeofday}</span> to you</h1>
		<b>My age is: {60/2-1}</b>
		<p>List of numbers</p>
		<ul>
			{text.map((item) => <li>{item}</li>)}
		</ul>
	</div>

		)
}

export default Constants