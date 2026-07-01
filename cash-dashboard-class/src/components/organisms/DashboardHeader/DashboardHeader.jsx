import { Component } from "react";
import "./DashboardHeader.css";

import Heading from "../../atoms/Heading/Heading";
import avatar from "../../../assets/avatar.jpg";

import { FiChevronDown } from "react-icons/fi";

class DashboardHeader extends Component {

    render() {

        return (

            <div className="dashboard-header">

                <Heading
                    title="Cash acceleration"
                    subtitle="Place to create new cash kicks to run your business"
                />

                <div className="profile-section">

                    <img
                        src={avatar}
                        alt="Avatar"
                        className="avatar"
                    />

                    <FiChevronDown className="dropdown-icon" />

                </div>

            </div>

        );

    }

}

export default DashboardHeader;