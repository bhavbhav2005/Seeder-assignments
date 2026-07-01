import { Component } from "react";

import "./Value.css";

class Value extends Component{

    render(){

        return(

            <h2>

                {this.props.value}

            </h2>

        );

    }

}

export default Value;