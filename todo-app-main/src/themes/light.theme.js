import desktopImage from "assets/images/bg-desktop-light.jpg";
import mobileImage from "assets/images/bg-mobile-light.jpg";
import colors from "assets/styles/colors";

const lightTheme = {
  name: "Light",
  id: "T01",
  image: window.innerWidth > 768 ? desktopImage : mobileImage,
  colors: {
    text: {
      veryLight: colors.gray.lightBlue,
      light: colors.gray.darkBlue,
      default: colors.gray.veryDarkBlue,
    },
    border: {
      light: colors.gray.lightBlue,
      default: colors.gray.darkBlue,
    },
    bg: {
      body: colors.white,
      todo: colors.white,
    },
    circle: { inner: colors.white },
  },
};

export default lightTheme;
