
const BASE_SPACING = 4;

export const theme = {
  background: {
    primary: "rgb(44, 62, 80)",
    secondary: "rgb(188, 195, 200)",
    tertiary: "rgb(45, 119, 167)",
  },
  textColor: {
    primary: "rgb(45, 119, 167)",
    secondary: "rgb(202, 240, 248)",
  },
  paddings: {
    paddingApp: "100px 10px",
  },

  opacifying: (color: string, opacity: number): string => {
    if (typeof color === "string") {
      const rgbArray = color.match(/\d+/g);
      if (rgbArray) {
        return `rgba(${rgbArray.join(", ")}, ${opacity})`;
      };
    } else if (typeof color === "object") {
      const firstKey = Object.keys(color)[0];
      const firstColor = color[firstKey];
      return theme.opacifying(firstColor, opacity);
    }

    return "";
  },
  spacing: (multiplier: number = 1) => `${multiplier * BASE_SPACING}px`,
};
