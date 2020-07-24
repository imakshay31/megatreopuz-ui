import { createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[500],
        },
    },
    props: {
        MuiTextField: {
            variant: "outlined",
            margin: "dense",
        },
    },
});

export default theme;
