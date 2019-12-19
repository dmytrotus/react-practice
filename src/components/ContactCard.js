import React from 'react';

function ContactCard(props){

	console.log(props.contact)

/*Можна задавати або просто props. Тоді на 
Виході буде props.name і так далі
А можна задавати так як в Contact.js
<ContactCard contact={{name: "Mr. Kiciuś 1"}}/>
Тоді треба до value йти так props.contact.name
Це зручніше.
Я це не показав на цьому прикладі бо тут йде loop
і якщо я візьму value з props.contact.name то 1 шаблон спрацює
а інші 3 дадуть помилку Cannot read property 'name' of undefined*/

	return(

		<div className="contact-card">
			<img src={props.imgUrl} alt=""/>
			<h3>{props.name}</h3>
			<p>Phone: {props.phone}</p>
			<p>Email: {props.email}</p>
		</div>
	)
}


export default ContactCard



/*		<div className="contact-card">
			<img src="./cats/1.jpeg" alt=""/>
			<h3>Mr. Kiciuś 1</h3>
			<p>Phone: 444 999 222</p>
			<p>Email: cat1@meow.com</p>
		</div>*/