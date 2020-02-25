import React from 'react';

import { MyNewClass } from '../classes/MyNewClass';




 function MyFirstOopComponent(){

 	const myClass = new MyNewClass();

 	myClass.sayHello();

 	myClass.sayGoodBye();

 	return(
 		<div>blabla</div>
 	)
 }


 export default MyFirstOopComponent;