import "./StatsSection.css";

import StatCard from "../../molecules/StatCard/StatCard";

import { TbCalendarTime } from "react-icons/tb";

import {

    HiOutlineDocumentArrowDown,

    HiOutlinePercentBadge

} from "react-icons/hi2";

const StatsSection=()=>{

    return(

        <div className="stats-card">

            <StatCard

                icon={<TbCalendarTime/>}

                title="Term cap"

                value="12 months"

            />

            <StatCard

                icon={<HiOutlineDocumentArrowDown/>}

                title="Available credit"

                value="$880.0k"

            />

            <StatCard

                icon={<HiOutlinePercentBadge/>}

                title="Max interest rate"

                value="12.00%"

            />

        </div>

    );

};

export default StatsSection;