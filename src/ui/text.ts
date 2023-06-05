import { styled } from "./stitches.config";

export const Text = styled("p", {
  color: "$accentColour",
  fontSize: "$100",
  variants: {
    Color: {
      blue: {
        color: "blue",
        backgroundColor: "Aqua",
      },
      red: {
        color: "red",
        backgroundColor: "orange",
      },
    },
    Disabled:{
        true:{
            cursor:"not-allowed",
            color:"grey"
        }
    },
    Gradient:{
        true:{
            background:"linear-gradient(red,yellow)"
        }
    },

  },
});
