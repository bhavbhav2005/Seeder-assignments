import "./DashboardHeader.css";

import Heading from "../../atoms/Heading/Heading";

import avatar from "../../../assets/avatar.jpg";

import { IoCaretDown } from "react-icons/io5";

const DashboardHeader = () => {

    return(

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

                <IoCaretDown className="dropdown-icon"/>

            </div>

        </div>

    );

};

export default DashboardHeader;