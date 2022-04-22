import { createTheme, ThemeOptions } from "@mui/material/styles";

export const COMMON_LAYOUT_MAX_WIDTH = 960;
export const MAIN_BREAKPOINT_VALUE = 1032;

export const mobileMaxWidthMediaQuery = "@media (max-width:600px)";
export const tabletMaxWidthMediaQuery = "@media (max-width:960px)";
export const tmrLightBlue = "#FAFCFE";

declare module "@mui/material/styles" {
	interface BreakpointOverrides {
		xs: true; // removes the `xs` breakpoint
		sm: true;
		md: true;
		lg: true;
		xl: true;
	}
}

// Create a theme instance.
export const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 700,
			md: 1000,
			lg: 1200,
			xl: 1536,
		},
	},
	palette: {
		//keep
		primary: {
			main: "#70BAA7",
		},
		//remove from below
		common: {
			black: "#000",
			white: "#fff",
		},
		secondary: {
			main: "#fff",
		},
		text: {
			primary: "#333",
			secondary: "#999",
			disabled: "#C1C1C1",
		},

		info: {
			main: "#F0F0F0",
		},
		error: {
			main: "#ff0000",
		},
	},
} as ThemeOptions);
