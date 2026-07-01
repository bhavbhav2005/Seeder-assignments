import "./StatsSection.css";
import Box from "@mui/material/Box";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import StatCard from "../../molecules/StatCard/StatCard";
const StatsSection=()=>{
return(
<Box className="stats-section">
<StatCard
icon={<CalendarMonthOutlinedIcon/>}
title="Term cap"
value="12 months"
/>
<StatCard
icon={<FileDownloadOutlinedIcon/>}
title="Available credit"
value="$880.0k"
/>
<StatCard
icon={<PercentOutlinedIcon/>}
title="Max interest rate"
value="12.00%"
/>
</Box>
);
};
export default StatsSection;