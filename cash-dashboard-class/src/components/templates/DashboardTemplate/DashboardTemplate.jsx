import { Component } from "react";

import "./DashboardTemplate.css";

import DashboardHeader from "../../organisms/DashboardHeader/DashboardHeader";
import StatsSection from "../../organisms/StatsSection/StatsSection";
import LaunchCard from "../../organisms/LaunchCard/LaunchCard";
import CashKickModal from "../../organisms/CashKickModal/CashKickModal";

class DashboardTemplate extends Component{

    constructor(props){

        super(props);

        this.state={

            isModalOpen:false

        };

    }

    openModal=()=>{

        this.setState({

            isModalOpen:true

        });

    };

    closeModal=()=>{

        this.setState({

            isModalOpen:false

        });

    };

    render(){

        return(

            <div className="dashboard-container">

                <DashboardHeader/>

                <div className="content">

                    <StatsSection/>

                    <LaunchCard

                        onOpen={this.openModal}

                    />

                </div>

                <CashKickModal

                    isOpen={this.state.isModalOpen}

                    onClose={this.closeModal}

                />

            </div>

        );

    }

}

export default DashboardTemplate;