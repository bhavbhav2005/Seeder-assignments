import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import DashboardHeader from "./DashboardHeader";

describe("DashboardHeader Component", () => {

    test("should render the dashboard title", () => {

        render(<DashboardHeader />);

        expect(
            screen.getByText("Cash acceleration")
        ).toBeInTheDocument();

    });

    test("should render the dashboard subtitle", () => {

        render(<DashboardHeader />);

        expect(
            screen.getByText(
                "Place to create new cash kicks to run your business"
            )
        ).toBeInTheDocument();

    });

    test("should render the user avatar", () => {

        render(<DashboardHeader />);

        expect(
            screen.getByRole("img")
        ).toBeInTheDocument();

    });

    test("should render the dropdown icon", () => {

        const { container } = render(<DashboardHeader />);

        expect(
            container.querySelector(".arrow")
        ).toBeInTheDocument();

    });

    test("should render the profile section", () => {

        const { container } = render(<DashboardHeader />);

        expect(
            container.querySelector(".profile")
        ).toBeInTheDocument();

    });

});