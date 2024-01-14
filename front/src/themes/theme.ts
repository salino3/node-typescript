const BASE_SPACING = 4;

export const theme = {
  background: {
    // #ade8f4
    primary: "#2c3e50",
    secundary: "#bcc3c8",
  },
  textColor: {
    primary: "#2d77a7"
  },
  paddings: {
    paddingApp: "0px 10px 100px",
  },

  spacing: (multiplier: number = 1) => `${multiplier * BASE_SPACING}px`,
};