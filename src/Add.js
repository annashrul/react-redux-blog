import React, { Component } from 'react';

export default class App extends Component {
	
	state = {
		name : "", age : "", status : ""
	};
	
	handleChange = (e) => {
		this.setState({
			[e.target.id] : e.target.value
		})
	};
	
	handleSubmit = (e) => {
		e.preventDefault();
		// console.log(this.state);
		this.props.addKontakProps(this.state);
		this.setState({
			name:"",age:"",status:""
		})
	};
	
	render(){
		return(
			<div className="row">
				<form onSubmit={this.handleSubmit} className="col s12">
					<div className="row">
						<div className="col s4">
							<label htmlFor="Nama">Nama</label>
							<input placeholder="Nama" type="text" id="name" onChange={this.handleChange} value={this.state.name}/>
						</div>
						<div className="col s4">
							<label htmlFor="Usia">Usia</label>
							<input placeholder="Usia" type="number" id="age" onChange={this.handleChange} value={this.state.age}/>
						</div>
						<div className="col s4">
							<label htmlFor="status">Status</label>
							<input placeholder="Usia" type="text" id="status" onChange={this.handleChange} value={this.state.status}/>
						</div>
						<div className="input-field col s6">
							<button className="btn waves-effect waves-light" type="submit" name="action">Submit
								<i className="material-icons right">send</i>
							</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}