import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import StatCard from "./StatCard";

describe("StatCard Component", () => {

    test("should render the title", () => {

        render(

            <StatCard
                icon={<CalendarMonthOutlinedIcon data-testid="calendar-icon" />}
                title="Term cap"
                value="12 months"
            />

        );

        expect(
            screen.getByText("Term cap")
        ).toBeInTheDocument();

    });

    test("should render the value", () => {

        render(

            <StatCard
                icon={<CalendarMonthOutlinedIcon data-testid="calendar-icon" />}
                title="Term cap"
                value="12 months"
            />

        );

        expect(
            screen.getByText("12 months")
        ).toBeInTheDocument();

    });

    test("should render the provided icon", () => {

        render(

            <StatCard
                icon={<CalendarMonthOutlinedIcon data-testid="calendar-icon" />}
                title="Term cap"
                value="12 months"
            />

        );

        expect(
            screen.getByTestId("calendar-icon")
        ).toBeInTheDocument();

    });

    test("should render the information icon", () => {

        const { container } = render(

            <StatCard
                icon={<CalendarMonthOutlinedIcon />}
                title="Term cap"
                value="12 months"
            />

        );

        expect(
            container.querySelector(".info-icon")
        ).toBeInTheDocument();

    });

    test("should render both title and value together", () => {

        render(

            <StatCard
                icon={<CalendarMonthOutlinedIcon />}
                title="Available credit"
                value="$880.0k"
            />

        );

        expect(
            screen.getByText("Available credit")
        ).toBeInTheDocument();

        expect(
            screen.getByText("$880.0k")
        ).toBeInTheDocument();

    });

});