import "./DashboardHeader.css";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Heading from "../../atoms/Heading/Heading";

import avatar from "../../../assets/avatar.jpg";

const DashboardHeader = () => {

    return (

        <Box className="dashboard-header">

            <Heading

                title="Cash acceleration"

                subtitle="Place to create new cash kicks to run your business"

            />

            <Box className="profile">

                <Avatar

                    src={avatar}

                    className="avatar"

                />

                <KeyboardArrowDownIcon className="arrow"/>

            </Box>

        </Box>

    );

};

export default DashboardHeader;