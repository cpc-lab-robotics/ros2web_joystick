import React from 'react';
import ReactDOM from "react-dom/client";
import Box from "@mui/material/Box";
import Joystick from './Joystick';

const App = () => (
  <Box sx={{ width: 250, height: 300, display: "flex", bgcolor: '#ccc'}}>
    <Joystick />
  </Box>
);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

