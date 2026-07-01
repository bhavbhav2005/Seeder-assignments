import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import Value from "./Value";

describe("Value Component", () => {

    test("should render the provided value", () => {

        render(
            <Value value="12 months" />
        );

        expect(
            screen.getByText("12 months")
        ).toBeInTheDocument();

    });

    test("should render different values correctly", () => {

        render(
            <Value value="$880.0k" />
        );

        expect(
            screen.getByText("$880.0k")
        ).toBeInTheDocument();

    });

    test("should render percentage values", () => {

        render(
            <Value value="12.00%" />
        );

        expect(
            screen.getByText("12.00%")
        ).toBeInTheDocument();

    });

});