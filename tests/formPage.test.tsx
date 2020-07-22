import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import FormPage from "../src/components/FormPage";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import faker from "faker";
import { rgb2hex } from "./utils";
import { CircularProgress } from "@material-ui/core";

describe(`Loads correctly and displays correct content`, () => {
    // Test parameters
    const title = faker.lorem.lines(1);
    const formID = faker.random.uuid();
    const submitLabel = faker.random.word();
    const content =
        faker.lorem.lines(1) + faker.lorem.lines(1) + faker.lorem.lines(1);
    const testID = faker.random.uuid();

    it("Hydrates without error", () => {
        const spy = jest.spyOn(console, "error");
        // Render on the server side
        const { container } = render(
            <FormPage title={title} formID={formID} submitLabel={submitLabel}>
                <div>{content}</div>
            </FormPage>,
            {
                wrapper: ({ children }) => (
                    <ThemeProvider theme={createMuiTheme()}>
                        {children}
                    </ThemeProvider>
                ),
            }
        );
        // Hydrate on the server side
        render(
            <FormPage title={title} formID={formID} submitLabel={submitLabel}>
                <div>{content}</div>
            </FormPage>,
            {
                wrapper: ({ children }) => (
                    <ThemeProvider theme={createMuiTheme()}>
                        {children}
                    </ThemeProvider>
                ),
                hydrate: true,
                container,
            }
        );

        expect(spy).not.toHaveBeenCalled();
    });

    it("Renders correctly", () => {
        // Use default theme and render
        const theme = createMuiTheme();

        render(
            <FormPage title={title} formID={formID} submitLabel={submitLabel}>
                <div>{content}</div>
            </FormPage>,
            {
                wrapper: ({ children }) => (
                    <ThemeProvider theme={theme}>{children}</ThemeProvider>
                ),
            }
        );

        // Correct logo as per the theme
        expect(screen.getByAltText("ISTE Logo")).toHaveAttribute(
            "src",
            "/logo.jpg"
        );
        // Correct style as per the theme
        const section = document.getElementsByTagName("section")[0];
        const sectionStyle = window.getComputedStyle(section);
        expect(rgb2hex(sectionStyle.backgroundColor)).toEqual(
            rgb2hex(theme.palette.primary.dark)
        );

        // Correct heading
        expect(screen.getByRole("heading")).toHaveTextContent(title);
        // Renders content
        expect(screen.queryByText(content)).toBeTruthy();
        // Renders the button correctly
        const button = document.querySelector(`[form="${formID}"]`);
        expect(button).toBeTruthy();
        expect(button).toHaveTextContent(submitLabel);
    });

    it("Renders loading state", () => {
        // Use default theme and render
        const theme = createMuiTheme();
        render(
            <FormPage
                loading
                title={title}
                formID={formID}
                submitLabel={submitLabel}>
                <div>{content}</div>
            </FormPage>,
            {
                // hydrate: true,
                wrapper: ({ children }) => (
                    <ThemeProvider theme={theme}>{children}</ThemeProvider>
                ),
            }
        );
        const button = document.querySelector(`[form="${formID}"]`);
        expect(button).toBeTruthy();
        expect(button).not.toHaveTextContent(submitLabel);
        // Check if the progress was rendered
        // It was mocked. Check the mock call
        expect(CircularProgress).toHaveBeenCalledTimes(1);
        expect((CircularProgress as jest.Mock).mock.calls[0][0]).toEqual({
            size: 24,
        });
    });

    it("Renders with correct styling with dark mode", () => {
        const theme = createMuiTheme({
            palette: {
                type: "dark",
            },
        });
        render(
            <FormPage title={title} formID={formID} submitLabel={submitLabel}>
                <div data-test-id={testID}>{content}</div>
            </FormPage>,
            {
                // hydrate: true,
                wrapper: ({ children }) => (
                    <ThemeProvider theme={theme}>{children}</ThemeProvider>
                ),
            }
        );

        expect(screen.getByAltText("ISTE Logo")).toHaveAttribute(
            "src",
            "/logoDark.png"
        );
        const section = document.getElementsByTagName("section")[0];
        const sectionStyle = window.getComputedStyle(section);
        expect(rgb2hex(sectionStyle.backgroundColor)).toEqual(
            rgb2hex(theme.palette.primary.light)
        );
    });
});
