import { Component } from "react";
import "./StatCard.css";

import IconBox from "../../atoms/IconBox/IconBox";
import Value from "../../atoms/Value/Value";

import { FiInfo } from "react-icons/fi";

class StatCard extends Component {
    render() {
        return (
            <div className="stat-card">
                <IconBox icon={this.props.icon} />
                <div className="label-row">
                    <span>{this.props.title}</span>
                    <FiInfo className="info-icon" />
                </div>
                <Value value={this.props.value} />
            </div>
        );
    }
}

export default StatCard;