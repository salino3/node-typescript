const BASE_SPACING = 4;

export const theme = {
  background: {
    // #ade8f4
    primary: "#2c3e50",
    secondary: "#bcc3c8",
    tertiary: "#2d77a7",
  },
  textColor: {
    primary: "#2d77a7",
    secondary: "#CAF0F8",
  },
  paddings: {
    paddingApp: "100px 10px",
  },

  spacing: (multiplier: number = 1) => `${multiplier * BASE_SPACING}px`,
};