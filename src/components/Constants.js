import React from 'react'

function Constants(){
	const firstName = "Dima"
	const lastName = "Tus"

	var text = "";
	var i;
	for (i = 1; i < 29; i++) {
		text += '<li>' + i + '</li>';
	}


	return(
	<div>
		<h1>Hello {firstName + " "+ lastName}. How are  you?</h1>
		<b>My age is: {60/2-1}</b>
		<p>List of numbers</p>
		<ul>
			{text}
		</ul>
	</div>

		)
}

export default Constants