import { colors } from "assets/styles/variables";

const light = {
  id: "T_01",
  name: "Light",
  colors: {
    body: colors.white,
    topBg: colors.blue.pale,
  },
  text: {
    heading: colors.blue.dark,
    default: colors.blue.grayDark,
  },
  components: {
    themeSwitch: {
      bg: colors.toggle.light,
      ball: {
        bg: colors.white,
      },
    },
    card: {
      bg: colors.blue.grayLight,
    },
  },
};

export default light;
