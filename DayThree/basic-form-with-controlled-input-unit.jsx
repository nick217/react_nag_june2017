import React from 'react';


export default class BasicForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {ename: ""}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEventNameChange = this.handleEventNameChange.bind(this);

    }


    handleEventNameChange(event){
        console.log(event.target);
        this.setState({ename: event.target.value })

    }
    handleSubmit(event){

        //Suppress Default Behaviour
        event.preventDefault();
        // Do Something To Handle This Based On Your Design Choices
        // Validate maybe?

        // Do a POST call to your API Server

        // Will the function here involve a this?
        // Let's assume that
    }
    render(){ return(

        <form onSubmit={this.handleSubmit}>

            <input placeholder="Event Name 1" value={this.state.ename}
            onChange={this.handleEventNameChange}/>
            <button>Submit</button>

        </form>

    );

    }
}