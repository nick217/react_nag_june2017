import React from "react";
import CommonHeader from "../Common/common-header";
import CreateEventForm from "./create-event-form";


export default class CreateEvent extends React.Component{

    render(){ return (
        <div style={{marginTop: "20px", marginLeft: "20px"}}>
            <CommonHeader 
                title="Create Event" 
                buttonLabel="Close"
                onButtonClick={function(){console.log("This should close the Create Event screen");}} />
            <CreateEventForm />
        </div>
    )}


}
