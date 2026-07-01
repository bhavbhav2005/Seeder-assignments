import StatCard from "./StatCard";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

export default {
    title: "Molecules/StatCard",
    component: StatCard,
};

export const Default = {
    args: {
        icon: <CalendarMonthOutlinedIcon />,
        title: "Term cap",
        value: "12 months",
    },
};

export const Credit = {
    args: {
        icon: <CalendarMonthOutlinedIcon />,
        title: "Available credit",
        value: "$880.0k",
    },
};