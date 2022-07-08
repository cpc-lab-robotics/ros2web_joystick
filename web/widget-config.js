const path = require("path");

const widget = {
  name: "joystick",
  port: 3001,
  proxy: {
    "/api": "http://localhost:8080",
  },
  path: path.join(__dirname, "..", "ros2web_joystick", "data", "widgets"),
  publicPath: "auto",
  exposes: {
    "Joystick": "./src/Joystick",
  }
};

module.exports = widget;