import { Component } from "react";
import "./IconBox.css";
class IconBox extends Component {
    render() {
        return (
            <div className="icon-box">
                {this.props.icon}
            </div>
        );
    }
}

export default IconBox;