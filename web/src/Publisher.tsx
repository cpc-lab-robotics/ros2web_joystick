import React from "react";

import {
  IJoystickUpdateEvent,
} from "react-joystick-component/build/lib/Joystick";

import Joystick from "./Joystick";

export type Props = {
  topic: string;
};

export default function JoystickPublisher(props: Props) {
  const { topic } = props;
  
  const joystickEventHandler = async (jev: IJoystickUpdateEvent) => {
    const msg = {
      topic,
      data: jev
    }
    
    await fetch("/api/ros2web/joystick/event/change", {
      body: JSON.stringify(msg),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  const clickHandler = async (index: number) => {
    const msg = {
      topic,
      data: index
    }
    await fetch("/api/ros2web/joystick/event/click", {
      body: JSON.stringify(msg),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  return <></>
}
