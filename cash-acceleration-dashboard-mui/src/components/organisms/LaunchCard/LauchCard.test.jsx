import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";

import LaunchCard from "./LaunchCard";

describe("LaunchCard Component", () => {

    test("should render the launch card heading", () => {

        render(<LaunchCard />);

        expect(
            screen.getByRole("heading", {
                level: 4,
                name: /Launch a new\s*Cash Kick/i,
            })
        ).toBeInTheDocument();

    });

    test("should render the launch card description", () => {

        render(<LaunchCard />);

        expect(
            screen.getByText(
                /You have upto \$730,000\.00 available/i
            )
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                /for a new cash advance/i
            )
        ).toBeInTheDocument();

    });

    test("should render the new cash kick button", () => {

        render(<LaunchCard />);

        expect(
            screen.getByRole("button", {
                name: /New Cash Kick/i,
            })
        ).toBeInTheDocument();

    });

    test("should call onOpen when the new cash kick button is clicked", async () => {

        const user = userEvent.setup();

        const handleOpen = vi.fn();

        render(
            <LaunchCard
                onOpen={handleOpen}
            />
        );

        await user.click(
            screen.getByRole("button", {
                name: /New Cash Kick/i,
            })
        );

        expect(handleOpen).toHaveBeenCalledTimes(1);

    });

    test("should render the launch card container", () => {

        const { container } = render(
            <LaunchCard />
        );

        expect(
            container.querySelector(".launch-card")
        ).toBeInTheDocument();

    });

});