/*import React from 'react'

function Productclass(){

	return(
		<div className="product">
		Blablade
		</div>
	)
}

export default Productclass*/


/*import React from 'react'

class Productclass extends React.Component {
	render(){

		return(
			<div className="product">
			Blablade
			</div>
		)

	}


}

export default Productclass*/

/*import React from 'react'

function User(props){
	return(
		<div>
			User name: {props.username}
		</div>
	)
}

export default User*/

import React from 'react'

class User extends React.Component{

	render(){
		return(
			<div>
				User name: {this.props.username}
			</div>
		)

	}

}

export default User

