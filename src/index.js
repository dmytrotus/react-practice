import React from 'react';
import ReactDOM from 'react-dom';

/*12-02-2020 Грався з реактом*/


import SitesHeader1 from './components/SitesHeader1';
import ContentBody from './components/ContentBody';
import FooterBody from './components/FooterBody';


ReactDOM.render(<SitesHeader1 />, document.getElementById("root"))

ReactDOM.render(<ContentBody />, document.getElementById("body"))

ReactDOM.render(<FooterBody />, document.getElementById("footer"))

//Lesson 11 Lesson make classes

/*import Userlist from './components/Userlist'
ReactDOM.render(<Userlist />, document.getElementById("root"))*/

/*import Productclass from './components/Productclass'
ReactDOM.render(<Productclass />, document.getElementById("root"))*/



//Lesson 10 Lesson with array

/*import Productlist from './components/Productlist'
ReactDOM.render(<Productlist />, document.getElementById("root"))*/


//Lesson 9

/*import Contact from './components/Contact'
ReactDOM.render(<Contact />, document.getElementById("root"))*/


//Lesson 8

/*import AppCheckboxWithTodoItems from './components/AppCheckboxWithTodoItems'
ReactDOM.render(<AppCheckboxWithTodoItems />, document.getElementById("root"))*/



//Lesson 7

/*import Constants from './components/Constants'

ReactDOM.render(<Constants />, document.getElementById("root"))*/

//Lesson 6

/*import App from './App'

ReactDOM.render(<App />, document.getElementById("root"))*/

//Lesson 5
/*import AppCheckbox from './components/AppCheckbox'
ReactDOM.render(<AppCheckbox />, document.getElementById("root"))*/


//Lesson 4

/*import App from './App'

ReactDOM.render(<App />, document.getElementById("root"))*/




//Lesson 3

/*import MyInfo from './components/MyInfo';

ReactDOM.render(<MyInfo />, document.getElementById("root"))*/





//Lesson 2
/*function MyInfo(){
	return (
	<div className="MyInfo">
		<h1>Dima</h1>
		<p>London is the Capital of Grean Britain</p>
		<ul>I'd like to visit
			<li>Barcelona</li>
			<li>Quebec</li>
			<li>Australia</li>
		</ul>
	</div>
	)
}

ReactDOM.render(<MyInfo />, document.getElementById("root"))*/


//Lesson 1

/*function MyApp(){
	return (
	<ul>This is UL
		<li>1</li>
		<li>2</li>
		<li>3</li>
	</ul>
	)
}

ReactDOM.render(
	<MyApp />,
	
 document.getElementById('root'));*/