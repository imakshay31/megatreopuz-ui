import { createMuiTheme, Theme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";
import { PaletteType } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "light",
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

export const themeGen = (type: PaletteType, primary: string): Theme => {
  const theme = createMuiTheme({
    palette: {
      type: type,
      primary: {
        main: primary,
      },
    },
    props: {
      MuiTextField: {
        variant: "outlined",
        margin: "dense",
      },
    },
  });

  return theme;
};
