import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import IconBox from "../../atoms/IconBox/IconBox";
import Value from "../../atoms/Value/Value";

import "./StatCard.css";

const StatCard = ({ icon, title, value }) => {

    return (

        <Box className="stat-card">

            <IconBox>

                {icon}

            </IconBox>

            <Box className="label-row">

                <Typography className="label">

                    {title}

                </Typography>

                <InfoOutlinedIcon className="info-icon"/>

            </Box>

            <Value value={value}/>

        </Box>

    );

};

export default StatCard;