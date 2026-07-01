import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect } from "vitest";

import DashboardTemplate from "./DashboardTemplate";

describe("DashboardTemplate Component", () => {

    test("should render the dashboard header", () => {

        render(<DashboardTemplate />);

        expect(
            screen.getByRole("heading", {
                name: /cash acceleration/i,
            })
        ).toBeInTheDocument();

    });

    test("should render the stats section", () => {

        render(<DashboardTemplate />);

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

    test("should render the launch card", () => {

        render(<DashboardTemplate />);

        expect(
            screen.getByRole("heading", {
                level: 4,
                name: /Launch a new\s*Cash Kick/i,
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("button", {
                name: /New Cash Kick/i,
            })
        ).toBeInTheDocument();

    });

    test("should open the modal when new cash kick button is clicked", async () => {

        const user = userEvent.setup();

        render(<DashboardTemplate />);

        await user.click(
            screen.getByRole("button", {
                name: /New Cash Kick/i,
            })
        );

        expect(
            screen.getByText("Name your cash kick")
        ).toBeInTheDocument();

    });

    test("should close the modal when cancel button is clicked", async () => {

        const user = userEvent.setup();

        render(<DashboardTemplate />);

        await user.click(
            screen.getByRole("button", {
                name: /New Cash Kick/i,
            })
        );

        expect(
            screen.getByText("Name your cash kick")
        ).toBeInTheDocument();

        await user.click(
            screen.getByRole("button", {
                name: /Cancel/i,
            })
        );

        await waitFor(() => {

            expect(
                screen.queryByText("Name your cash kick")
            ).not.toBeInTheDocument();

        });

    });

    test("should render the dashboard container", () => {

        const { container } = render(
            <DashboardTemplate />
        );

        expect(
            container.querySelector(".dashboard")
        ).toBeInTheDocument();

    });

    test("should render the dashboard content container", () => {

        const { container } = render(
            <DashboardTemplate />
        );

        expect(
            container.querySelector(".dashboard-content")
        ).toBeInTheDocument();

    });

});