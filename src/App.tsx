import React from "react";
import { css, globalCss } from "@stitches/core";

const globalStyles = globalCss({
  "*": { margin: 0, padding: 0 },
  button: { border: "none" },
});

export const screenSizes:any = {
  // Upscaling sizes
  xxl: 1600,
  xl: 1200,

  // Normal sizes
  lg: 992,
  md: 768,
  sm: 576,

  xs: 575,
}

export const selectMinScreen = ({ name, adjustment = 0 }: any) => {
  return `@media only screen and (min-width: ${
      screenSizes[name] + adjustment
  }px)`
}

const button = css({
  backgroundColor: "gainsboro",
  borderRadius: "9999px",
  fontSize: "13px",
  padding: "10px 15px",
  "&:hover": {
    backgroundColor: "lightgray",
  },
  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
      },
    },
    color: {
      red: {
        background: "red",
      },
      green: {
        background: "green",
      },
    
    },
  
  
  
  },
});
const App = () => {
  globalStyles();
  return (
    <button
      className={button({  
          css:{
            [selectMinScreen({name:"lg"})]:{
                  background : "pink"
            } 
          },
          color:'red',

      })}
    >
      Hello
    </button>
  );
};

export default App;
