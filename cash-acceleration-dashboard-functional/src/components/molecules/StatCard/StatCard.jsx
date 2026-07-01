import "./StatCard.css";

import IconBox from "../../atoms/IconBox/IconBox";
import Value from "../../atoms/Value/Value";

import { FiInfo } from "react-icons/fi";

const StatCard = ({ icon, title, value }) => {

    return (

        <div className="stat-card">

            <IconBox icon={icon} />

            <div className="label-row">

                <span>{title}</span>

                <FiInfo className="info-icon" />

            </div>

            <Value value={value} />

        </div>

    );

};

export default StatCard;