import IconBox from "./IconBox";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

export default {
    title: "Atoms/IconBox",
    component: IconBox,
};

export const Default = {
    render: () => (
        <IconBox>
            <CalendarMonthOutlinedIcon />
        </IconBox>
    ),
};