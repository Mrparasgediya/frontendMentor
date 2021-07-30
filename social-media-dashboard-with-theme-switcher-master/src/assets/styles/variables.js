export const colors = {
  white: "hsl(0, 0%, 100%)",
  blue: {
    pale: "hsl(225, 100%, 98%)",
    grayLight: "hsl(227, 47%, 96%)",
    grayDark: "hsl(228, 12%, 44%)",
    dark: "hsl(230, 17%, 14%)",
    veryDark: "hsl(232, 19%, 15%)",
    darkDesaturated: "hsl(228, 28%, 20%)",
    desaturated: "hsl(228, 34%, 66%)",
  },
  toggle: {
    light: "hsl(230, 22%, 74%)",
    dark: "linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
  },
  primary: {
    limeGreen: "hsl(163, 72%, 41%)",
    brightRed: "hsl(356, 69%, 56%)",
  },
  facbook: " hsl(208, 92%, 53%)",
  twitter: "hsl(203, 89%, 53%)",
  instagram: "linear-gradient(to right,hsl(37, 97%, 70%),hsl(329, 70%, 58%))",
  youtube: "hsl(348, 97%, 39%)",
};
export const transition = (
  properties,
  time = ".3s",
  animation = "ease-in-out"
) => properties.map((property) => `${property} ${time} ${animation}`).join(",");
