import { createMuiTheme } from "@material-ui/core";

export const Theme = createMuiTheme({
    palette: {
        primary: {
            main: "#467DEB",
            dark: "#20396B",
            light: "#8FAFEE",
            contrastText: "#fff"
        },
        secondary: {
            main: "#20396B",
            contrastText: "#467DEB"
        },
        tertiary: {
            main: "#F57767",
            dark: "#753931",
            light: "#F7BAB1",
            contrastText: "#fff"
        },
        text: {
            primary: "#fff"
        }
    },
    typography: {
        htmlFontSize: 10,
        button: {
            fontSize: 16,
            textTransform: "normal",
        }
    }
});