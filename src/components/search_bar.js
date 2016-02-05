/**
 * using the {} is the same as using: const Component = React.Component
 * it Imports React and then pulls off the property called component
 */
import React, { Component } from 'react';

/**
 * {{{{ WARNING !!! }}}}
 * Never set state in component like so: this.state.term = e.target.value
 * Always use 'this.setState({})''
 */

//Create a new class called SearchBar & give it access to all the functionality of React.Component
class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = { term: '' }; // ONLY in constructor function we set state with "this.state ="
	}

	// render the class component
	render() {

		return  (
			//Controlled compenent telling the input to recieve its value from state
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={ e => this.setState({ term: e.target.value})} />
			</div>
			);
		}
	}

// Allows this component to be requested by other files
export default SearchBar;