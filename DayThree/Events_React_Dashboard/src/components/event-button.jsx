import React from 'react';


export default class EventButton extends React.Component {

	render() {
		return (

            <button className="btn btn-primary"> {this.props.label} </button>
			
		);
	}
}