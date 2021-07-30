import desktopImage from "assets/images/bg-desktop-dark.jpg";
import mobileImage from "assets/images/bg-mobile-dark.jpg";
import colors from "assets/styles/colors";

const darkTheme = {
  name: "Dark",
  id: "T02",
  image: window.innerWidth > 768 ? desktopImage : mobileImage,
  colors: {
    text: {
      veryLight: colors.blue.darkGray,
      light: colors.blue.darkGray,
      default: colors.blue.lightGray,
    },
    border: {
      light: colors.blue.veryDarkGray1,
      default: colors.blue.veryDarkGray2,
    },
    bg: {
      body: colors.blue.veryDark,
      todo: colors.blue.veryDarkDesaturated,
    },
    circle: { inner: colors.blue.veryDarkDesaturated },
  },
};

export default darkTheme;
