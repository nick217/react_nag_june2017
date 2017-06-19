
import React from "react";
import ReactDOM from "react-dom";

// Define a React Component Here
// This will generate a <div> with the text Hello World in it

class HelloWorld extends React.Component{
    render(){
        return (<div>Hello World From React</div>);
    }
}

var elem = <HelloWorld/>; // React Element : Instantiation of RC
var node = document.getElementById("app");

// Render this React Component into the DOM
ReactDOM.render(elem, node);