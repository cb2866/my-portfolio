import React from "react";
import { RoughNotation } from "react-rough-notation";

function RainbowHighlight({ color, children }) {
  const animationDuration = Math.floor(30 * children.length);
  return (
    <RoughNotation
      type="highlight"
      strokeWidth={2}
      multiline={true}
      padding={[0, 2]}
      iterations={2}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
}

export default RainbowHighlight;
