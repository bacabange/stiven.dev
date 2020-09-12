import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    "bg_base": "#23263A",
    "bg_base_dark": "#212336",
    "primary": "#FF4A57",
    "bg_base_light": "#696C89",
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
