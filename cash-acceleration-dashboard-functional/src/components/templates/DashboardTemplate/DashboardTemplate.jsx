import { useState } from "react";

import "./DashboardTemplate.css";

import DashboardHeader from "../../organisms/DashboardHeader/DashboardHeader";
import StatsSection from "../../organisms/StatsSection/StatsSection";
import LaunchCard from "../../organisms/LaunchCard/LaunchCard";
import CashKickModal from "../../organisms/CashKickModal/CashKickModal";

const DashboardTemplate = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {

        setIsModalOpen(true);

    };

    const closeModal = () => {

        setIsModalOpen(false);

    };

    return (

        <div className="dashboard-container">

            <DashboardHeader />

            <div className="dashboard-content">

                <StatsSection />

                <LaunchCard onOpen={openModal} />

            </div>

            <CashKickModal

                isOpen={isModalOpen}

                onClose={closeModal}

            />

        </div>

    );

};

export default DashboardTemplate;