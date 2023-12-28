const BASE_SPACING = 4;

export const theme = {
  background: {
    primary: "#ade8f4",
    secundary: "#48cae4",
  },
  paddings: {
    paddingApp: "10px",
  },

  spacing: (multiplier: number = 1) => `${multiplier * BASE_SPACING}px`,
};