import React, { Component } from 'react';
import axios from 'axios';

class ReactForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: '',
			email: ''
		}
	}

	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault();
		console.log(this.state);
		axios.post('http://localhost/blog-management/public/api/testrequest', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render(){
		const { name, email } = this.state

		return(
			
		<form onSubmit={this.submitHandler}>
			<div className="form-group">
				<input className="form-control" placeholder="Name" type="text"
					value={name} name="name"
					onChange={this.changeHandler}
				/>
				<input className="form-control" placeholder="email" type="text"
					value={email} name="email"
					onChange={this.changeHandler}
				/>
				<button className="m-2 btn btn-primary" type="submit">Send Form</button>
			</div>
		</form>
		)
	}
}

export default ReactForm;