import "./LaunchCard.css";

import Button from "../../atoms/Button/Button";

const LaunchCard=({onOpen})=>{

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

                onClick={onOpen}

            />

        </div>

    );

};

export default LaunchCard;