import { Component } from "react";
import "./Heading.css";
class Heading extends Component{
    render(){
        return(
            <div className="heading">
                <h1>
                    {this.props.title}
                </h1>
                <p>
                    {this.props.subtitle}
                </p>
            </div>
        );
    }
}

export default Heading;