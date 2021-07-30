import { colors } from "assets/styles/variables";

const dark = {
  id: "T_02",
  name: "Dark",
  colors: {
    body: colors.blue.dark,
    topBg: colors.blue.veryDark,
  },
  text: {
    default: colors.blue.desaturated,
    heading: colors.white,
  },
  components: {
    themeSwitch: {
      bg: colors.toggle.dark,
      ball: {
        bg: colors.blue.dark,
      },
    },

    card: {
      bg: colors.blue.darkDesaturated,
    },
  },
};

export default dark;
