import React from "react";
import CommonHeader from "../Common/common-header";
import HostingTable from "./hosting-table";



// fetch data
// send data to props
var events =
    [
            {
                "id": 1,
                "title": "Another Great Event",
                "startTime": "2017-06-05T00:00:00.000Z",
                "endTime": "2017-06-07T00:00:00.000Z",
                "venue": "New Delhi",
                "hostId": 1

             },

             {
        "id": 2,
        "title": "Nagarro Javascript Bootcamp",
        "startTime": "2017-06-02T00:00:00.000Z",
        "endTime": "2017-06-20T00:00:00.000Z",
        "venue": "Nagarro Office, Gurgaon",
        "hostId": 1
            },

            {
        "id": 3,
        "title": "Champions Trophy Final",
        "startTime": "2017-06-18T00:00:00.000Z",
        "endTime": "2017-06-18T00:00:00.000Z",
        "venue": "England",
        "hostId": 2
            }
    ];

export default class EventDashboard extends React.Component{


    render(){ return (
        <div style={{marginTop: "20px", marginLeft: "20px"}}>
         <CommonHeader 
            title="My Events"
            buttonLabel="Create Event"
            onButtonClick={function(){console.log("This should trigger the Create Event UI")}}
         />
         <HostingTable myEvents={events} />
        </div>
    )}


}
