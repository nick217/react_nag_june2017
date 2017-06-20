import React from "react";
import EventButton from "../event-button";

export default class DashboardHeader extends React.Component{


    render(){ return (
        <div className="row" style={{marginTop:"20px"}}>

            <h1 className="col-md-8">My Events </h1>

            <EventButton className="col-md-4" label="Create Event" />
        </div>
    )}


}


