import React from 'react';

import ContactCard from './ContactCard';




function Contact(){
	
	return(
		<div className="contacts">

			<ContactCard
				contact={{imgUrl: "./cats/1.jpeg", name: "Mr. Kiciuś 1", phone: "444 999 222", email: "cat1@meow.com"}}
			 />

			<ContactCard
				imgUrl="./cats/2.jpg"
				name="Mr. Kiciuś 2"
				phone="222 111 333"
				email="cat2@meow.com"
			 />
			<ContactCard
				imgUrl="./cats/3.jfif"
				name="Mr. Kiciuś 3"
				phone="444 555 777"
				email="cat3@meow.com"
			 />
			<ContactCard
				imgUrl="./cats/4.jpg"
				name="Mr. Kiciuś 4"
				phone="111 222 333"
				email="cat4@meow.com"
			 />

		</div>
	)
}

export default Contact


/*imgUrl="./cats/1.jpeg"
name="Mr. Kiciuś 1"
phone="444 999 222"
email="cat1@meow.com"*/


/*<div className="contact-card">
	<img src="./cats/2.jpg" alt=""/>
	<h3>Mr. Kiciuś 2</h3>
	<p>Phone: 222 111 333</p>
	<p>Email: cat2@meow.com</p>
</div>

<div className="contact-card">
	<img src="./cats/3.jfif" alt=""/>
	<h3>Mr. Kiciuś 3</h3>
	<p>Phone: 444 555 777</p>
	<p>Email: cat3@meow.com</p>
</div>



<div className="contact-card">
	<img src="./cats/4.jpg" alt=""/>
	<h3>Mr. Kiciuś 4</h3>
	<p>Phone: 111 222 333</p>
	<p>Email: cat4@meow.com</p>
</div>*/