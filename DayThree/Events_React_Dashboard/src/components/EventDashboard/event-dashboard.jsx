import React from "react";
import CommonHeader from "../Common/common-header";
import HostingTable from "./hosting-table";
import axios from "axios";



var events =
    [
            {
                "id": 1,
                "title": "Another Great Event",
                "startTime": "2017-06-05T00:00:00.000Z",
                "endTime": "2017-06-07T00:00:00.000Z",
                "venue": "New Delhi",
                "hostId": 1

             }];

export default class EventDashboard extends React.Component{


    constructor(props){
        super(props)
        this.state = {events : []}

    }

    componentDidMount(){

        var url = "http://localhost:3456/api/events";
        var config = {};
        config.headers = {
            "Authorization" : "Bearer e90IjAeX7WyZ5pmyzX1x",
            "Content-Type" : "application/x-www-form-urlencoded"
        };

        axios.get(url, config).then(
            function(response){
                console.log(response);

                // Parse response.data to fit your this.state.variable format
                // Modify State
                var events = response.data;
                this.setState({events: events});
            }.bind(this))

    }
    render(){ return (
        <div style={{marginTop: "20px", marginLeft: "20px"}}>
         <CommonHeader 
            title="My Events"
            buttonLabel="Create Event"
            onButtonClick={function(){console.log("This should trigger the Create Event UI")}}
         />
         <HostingTable myEvents={this.state.events} />
        </div>
    )}


}
