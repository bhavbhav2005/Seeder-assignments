import { Component } from "react";

import "./LaunchCard.css";

import Button from "../../atoms/Button/Button";

class LaunchCard extends Component{

    render(){

        return(

            <div className="launch-card">

                <h3>

                    Launch a new

                    <br/>

                    Cash Kick

                </h3>

                <p>

                    You have upto $730,000.00 available
                    for a new cash advance

                </p>

                <Button

                    text="New Cash Kick"

                    onClick={this.props.onOpen}

                />

            </div>

        );

    }

}

export default LaunchCard;