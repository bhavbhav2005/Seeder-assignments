import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";

import Button from "./Button";

describe("Button Component", () => {

    test("should render the button with the provided text", () => {

        render(
            <Button
                text="New Cash Kick"
            />
        );

        expect(
            screen.getByRole("button", {
                name: /new cash kick/i,
            })
        ).toBeInTheDocument();

    });

    test("should call onClick when the button is clicked", async () => {

        const user = userEvent.setup();

        const handleClick = vi.fn();

        render(
            <Button
                text="New Cash Kick"
                onClick={handleClick}
            />
        );

        await user.click(
            screen.getByRole("button", {
                name: /new cash kick/i,
            })
        );

        expect(handleClick).toHaveBeenCalledTimes(1);

    });

    test("should render different button text", () => {

        render(
            <Button
                text="Create Cash Kick"
            />
        );

        expect(
            screen.getByRole("button", {
                name: /create cash kick/i,
            })
        ).toBeInTheDocument();

    });

});