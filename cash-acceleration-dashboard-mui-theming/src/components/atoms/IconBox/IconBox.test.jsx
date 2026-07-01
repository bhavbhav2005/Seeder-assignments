import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import HomeIcon from "@mui/icons-material/Home";

import IconBox from "./IconBox";

describe("IconBox Component", () => {

    test("should render the icon inside the IconBox", () => {

        render(

            <IconBox>

                <HomeIcon data-testid="home-icon" />

            </IconBox>

        );

        expect(

            screen.getByTestId("home-icon")

        ).toBeInTheDocument();

    });

    test("should render the IconBox container", () => {

        const { container } = render(

            <IconBox>

                <HomeIcon />

            </IconBox>

        );

        expect(

            container.querySelector(".icon-box")

        ).toBeInTheDocument();

    });

    test("should render any child component passed as children", () => {

        render(

            <IconBox>

                <span>Custom Child</span>

            </IconBox>

        );

        expect(

            screen.getByText("Custom Child")

        ).toBeInTheDocument();

    });

});