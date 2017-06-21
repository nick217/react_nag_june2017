import React from 'react';

export default class CreateEventForm extends React.Component {

	constructor(props) {
		super(props);
		    this.onFormSubmit = this.onFormSubmit.bind(this);
    }

	onFormSubmit(event){
        event.preventDefault();
        console.log("Form Submitted");
	
    }

    onInputChange(event){
        console.log("Input Changed " + event.target.name + ", Value: " + event.target.value);
    }

	render() {
    
        const breathe={marginTop: "10px", marginBottom: "2px"}


		return (

		    <form onSubmit={this.onFormSubmit}>


                <div style={breathe}>Event Title</div>
                <input placeholder="Event Title" name='title' onChange={this.onInputChange}/>

                <div style={breathe}>Event Venue</div>
                <input placeholder="Event Venue" name='venue' onChange={this.onInputChange}/>


                <div style={breathe}>Event Start Time</div>
                <input placeholder="Event Start Date & Time" name='startTime' onChange={this.onInputChange}/>

                <div style={breathe}>Event End Time</div>
                <input placeholder="Event End Date & Time" name='endTime' onChange={this.onInputChange}/>

                <div style={breathe}>Event Message</div>
                <input placeholder="Event Message" name='message' onChange={this.onInputChange}/>


                <div style={breathe}>Invitees</div>
                <input placeholder="Event Invitees" name='invitees' onChange={this.onInputChange}/>

                <div style={breathe}/>
                <button onClick={this.onFormSubmit}>Create Event </button>

            </form>

		);
	}
}