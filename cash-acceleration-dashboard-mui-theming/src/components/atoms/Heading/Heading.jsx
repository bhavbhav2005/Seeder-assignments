import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Heading.css";
const Heading = ({ title, subtitle }) => {
    return (
        <Box className="heading">
            <Typography variant="h2">
                {title}
            </Typography>
            <Typography className="subtitle">
                {subtitle}
            </Typography>
        </Box>
    );
};
export default Heading;