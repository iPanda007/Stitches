import React from "react";
import { css, globalCss } from "@stitches/core";

const globalStyles = globalCss({
  "*": { margin: 0, padding: 0 },
  button: { border: "none" },
});

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
          color:'red',

      })}
    >
      Hello
    </button>
  );
};

export default App;
