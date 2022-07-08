import React from "react";

import Box from "@mui/material/Box";

import { Joystick } from "react-joystick-component";
import { IJoystickUpdateEvent } from "react-joystick-component/build/lib/Joystick";

export type JoystickProps = {
  base_color?: string;
  stick_color?: string;
  on_change?: (jev: IJoystickUpdateEvent) => void;
};

type Props = JoystickProps;

export default function JoystickWidget(props: Props) {
  const { base_color, stick_color, on_change } = props;
  
  const baseColor =
    base_color !== undefined ? base_color : "rgba(35, 50, 79, 0.3)";
  const stickColor = stick_color !== undefined ? stick_color : "#23324F";

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Joystick
        baseColor={baseColor}
        stickColor={stickColor}
        start={on_change}
        move={on_change}
        stop={on_change}
      />
    </Box>
  );
}
