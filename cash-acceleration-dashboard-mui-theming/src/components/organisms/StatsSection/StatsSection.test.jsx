import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import StatsSection from "./StatsSection";

describe("StatsSection Component", () => {

    test("should render the stats section container", () => {

        const { container } = render(<StatsSection />);

        expect(
            container.querySelector(".stats-section")
        ).toBeInTheDocument();

    });

    test("should render the term cap card", () => {

        render(<StatsSection />);

        expect(
            screen.getByText("Term cap")
        ).toBeInTheDocument();

        expect(
            screen.getByText("12 months")
        ).toBeInTheDocument();

    });

    test("should render the available credit card", () => {

        render(<StatsSection />);

        expect(
            screen.getByText("Available credit")
        ).toBeInTheDocument();

        expect(
            screen.getByText("$880.0k")
        ).toBeInTheDocument();

    });

    test("should render the max interest rate card", () => {

        render(<StatsSection />);

        expect(
            screen.getByText("Max interest rate")
        ).toBeInTheDocument();

        expect(
            screen.getByText("12.00%")
        ).toBeInTheDocument();

    });

    test("should render all three stat cards", () => {

        render(<StatsSection />);

        expect(
            screen.getByText("Term cap")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Available credit")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Max interest rate")
        ).toBeInTheDocument();

    });

});