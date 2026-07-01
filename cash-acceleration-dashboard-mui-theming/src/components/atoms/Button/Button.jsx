import MuiButton from "@mui/material/Button";
import "./Button.css";

const Button = ({ text, onClick }) => {

    return (
        <MuiButton
            variant="contained"
            className="custom-button"
            onClick={onClick}
        >
            {text}
        </MuiButton>
    );
};

export default Button;