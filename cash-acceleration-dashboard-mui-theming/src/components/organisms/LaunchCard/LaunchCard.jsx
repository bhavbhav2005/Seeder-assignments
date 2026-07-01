import "./LaunchCard.css";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import Button from "../../atoms/Button/Button";

const LaunchCard=({onOpen})=>{

return(

<Box className="launch-card">

<Typography variant="h4">

Launch a new

<br/>

Cash Kick

</Typography>

<Typography className="launch-text">

You have upto $730,000.00 available

for a new cash advance

</Typography>

<Button

text="New Cash Kick"

onClick={onOpen}

/>

</Box>

);

};

export default LaunchCard;