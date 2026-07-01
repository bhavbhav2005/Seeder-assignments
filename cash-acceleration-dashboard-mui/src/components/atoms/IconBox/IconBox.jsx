import Box from "@mui/material/Box";
import "./IconBox.css";
const IconBox = ({ children }) => {
    return (
        <Box className="icon-box">
            {children}
        </Box>
    );
};
export default IconBox;