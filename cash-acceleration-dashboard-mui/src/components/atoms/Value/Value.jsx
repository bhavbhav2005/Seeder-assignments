import Typography from "@mui/material/Typography";
import "./Value.css";
const Value = ({ value }) => {
    return (
        <Typography className="value">
            {value}
        </Typography>
    );
};
export default Value;