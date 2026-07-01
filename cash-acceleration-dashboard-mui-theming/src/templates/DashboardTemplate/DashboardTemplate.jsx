import { useState } from "react";
import Box from "@mui/material/Box";
import "./DashboardTemplate.css";
import DashboardHeader from "../../components/organisms/DashboardHeader/DashboardHeader";
import StatsSection from "../../components/organisms/StatsSection/StatsSection";
import LaunchCard from "../../components/organisms/LaunchCard/LaunchCard";
import CashKickModal from "../../components/organisms/CashKickModal/CashKickModal";
const DashboardTemplate = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Box className="dashboard">
            <DashboardHeader/>
            <Box className="dashboard-content">
                <StatsSection/>
                <LaunchCard
                    onOpen={handleOpen}
                />
            </Box>
            <CashKickModal
                open={open}
                onClose={handleClose}
            />
        </Box>
    );
};

export default DashboardTemplate;