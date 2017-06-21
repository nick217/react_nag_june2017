import React from "react";
import * as ReactDOM from "react-dom";


import EventDashboard from "./components/EventDashboard/event-dashboard";
import CreateEvent from "./components/CreateEvent/create-event";

class App extends React.Component{

    render(){ return(
         <EventDashboard/>

    );
    }
}

var app = <App/>;
console.log(app);
var node = document.getElementById("app");
console.log(node);
ReactDOM.render(app, node);
