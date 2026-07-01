import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";

import CashKickModal from "./CashKickModal";

describe("CashKickModal Component", () => {

    test("should render the modal when open is true", () => {

        render(
            <CashKickModal
                open={true}
                onClose={() => {}}
            />
        );

        expect(
            screen.getByText("Name your cash kick")
        ).toBeInTheDocument();

    });

    test("should not render the modal when open is false", () => {

        render(
            <CashKickModal
                open={false}
                onClose={() => {}}
            />
        );

        expect(
            screen.queryByText("Name your cash kick")
        ).not.toBeInTheDocument();

    });

    test("should render the input field", () => {

        render(
            <CashKickModal
                open={true}
                onClose={() => {}}
            />
        );

        expect(
            screen.getByPlaceholderText("Ex: marketing expenses")
        ).toBeInTheDocument();

    });

    test("should render the cancel button", () => {

        render(
            <CashKickModal
                open={true}
                onClose={() => {}}
            />
        );

        expect(
            screen.getByRole("button", {
                name: /cancel/i,
            })
        ).toBeInTheDocument();

    });

    test("should render the create cash kick button", () => {

        render(
            <CashKickModal
                open={true}
                onClose={() => {}}
            />
        );

        expect(
            screen.getByRole("button", {
                name: /create cash kick/i,
            })
        ).toBeInTheDocument();

    });

    test("should call onClose when cancel button is clicked", async () => {

        const user = userEvent.setup();

        const handleClose = vi.fn();

        render(
            <CashKickModal
                open={true}
                onClose={handleClose}
            />
        );

        await user.click(
            screen.getByRole("button", {
                name: /cancel/i,
            })
        );

        expect(handleClose).toHaveBeenCalledTimes(1);

    });

    test("should call onClose when close icon is clicked", async () => {

        const user = userEvent.setup();

        const handleClose = vi.fn();

        render(
            <CashKickModal
                open={true}
                onClose={handleClose}
            />
        );

        const buttons = screen.getAllByRole("button");

        await user.click(buttons[0]);

        expect(handleClose).toHaveBeenCalledTimes(1);

    });

});