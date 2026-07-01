import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import Heading from "./Heading";

describe("Heading Component", () => {

    test("should render the title", () => {

        render(
            <Heading
                title="Cash acceleration"
                subtitle="Place to create new cash kicks to run your business"
            />
        );

        expect(
            screen.getByText("Cash acceleration")
        ).toBeInTheDocument();

    });

    test("should render the subtitle", () => {

        render(
            <Heading
                title="Cash acceleration"
                subtitle="Place to create new cash kicks to run your business"
            />
        );

        expect(
            screen.getByText(
                "Place to create new cash kicks to run your business"
            )
        ).toBeInTheDocument();

    });

    test("should render both title and subtitle together", () => {

        render(
            <Heading
                title="Dashboard"
                subtitle="Welcome to the dashboard"
            />
        );

        expect(
            screen.getByText("Dashboard")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Welcome to the dashboard")
        ).toBeInTheDocument();

    });

});