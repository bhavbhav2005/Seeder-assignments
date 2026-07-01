import StatCard from "./StatCard";

import {
    TbCalendarTime
} from "react-icons/tb";

import {
    HiOutlineDocumentArrowDown,
    HiOutlinePercentBadge
} from "react-icons/hi2";

export default{

    title:"Molecules/StatCard",

    component:StatCard

};

export const TermCap={

    args:{

        icon:<TbCalendarTime/>,

        title:"Term cap",

        value:"12 months"

    }

};

export const AvailableCredit={

    args:{

        icon:<HiOutlineDocumentArrowDown/>,

        title:"Available credit",

        value:"$880.0k"

    }

};

export const InterestRate={

    args:{

        icon:<HiOutlinePercentBadge/>,

        title:"Max interest rate",

        value:"12.00%"

    }

};