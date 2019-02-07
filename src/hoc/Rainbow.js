import React from 'react'

const Rainbow = (WrappedComponent) => {
	const colour = ["red","blue","green","orange"];
	const randomColour = colour[Math.floor(Math.random() * 3)];
	const className = randomColour + '-text';
	
	return(props) => {
		return(
			<div className={className}>
				<WrappedComponent {...props}/>
			</div>
		)
	}
};

export default Rainbow;