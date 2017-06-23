import React from 'react';
import axios from 'axios';
import formurlencoded from "form-urlencoded";

export default class CreateEventForm extends React.Component {

    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {fields: {
            title : "",
            venue: "",
            startTime : "",
            endTime: "",
            message: "",
            invitees: ""

        }}

        this.onInputChange = this.onInputChange.bind(this);
    }

    onFormSubmit(event){
        // Prevent Default Behaviour
        event.preventDefault();

        const AuthStr = "Bearer 4HuMdML7iEZ0UZSu6jX8";

        console.log(formurlencoded(this.state.fields));

        axios.post(
            "http://localhost:3456/api/events/new",
            formurlencoded(this.state.fields),
            {
                "headers" :
                    {"Authorization" : AuthStr,
                        "Content-Type" : "application/x-www-form-urlencoded"
                    }

            }
        ).then(function(response){console.log(response)});



    }

    onInputChange(event){
        console.log("Input Changed " + event.target.name + ", Value: " + event.target.value);
        const fields = this.state.fields;
        fields[event.target.name] = event.target.value;

        this.setState( {fields: fields});
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
                <button>Create Event </button>

            </form>

        );
    }
}