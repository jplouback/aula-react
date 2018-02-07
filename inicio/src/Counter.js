import React from 'react';

class Counter extends React.Component {

	constructor(props) {
		super(props);

		this.handleDecrementClick = this.handleDecrementClick.bind(this);
		this.handleIncrementClick = this.handleIncrementClick.bind(this);
		
		this.state = {
			counter: props.initialCount
		}

	}

	handleDecrementClick(){
		this.setState({ counter: this.state.counter - 1 });
	}

	handleIncrementClick() {
		this.setState({ counter: this.state.counter + 1 });
	}

	render() {

		const style = {
			color: this.props.color
		}

		return (
			<div>
				<button onClick={ this.handleDecrementClick }>-</button>
				<span style={style}>A conta está em: {this.state.counter}</span>
				<button onClick={ this.handleIncrementClick }>+</button>
			</div>
		);

	}
}



export default Counter;