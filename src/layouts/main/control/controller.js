import React, { useState, useEffect } from 'react';


import VuiBox from "components/VuiBox";
import Grid from "@mui/material/Grid";
import VuiTypography from "components/VuiTypography";

import VuiButton from "components/VuiButton";
import Icon from "@mui/material/Icon";

import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';




const ControllerComponent = ({ serverUrl }) => {
  const [socket, setSocket] = useState(null);
  const [direction, setDirection] = useState(null);
  const [speed, setSpeed] = useState(50);

  useEffect(() => {
    // Establish WebSocket connection
    const newSocket = new WebSocket(serverUrl);
    setSocket(newSocket);

    // Clean up the socket connection on unmount
    return () => {
      newSocket.close();
    };
  }, [serverUrl]);

  const handleDirectionClick = (direction) => {
    setDirection(direction);
    sendControlData({ type:"control_override", direction, speed });
  };

  const handleSpeedChange = (event) => {
    const newSpeed = parseInt(event.target.value);
    setSpeed(newSpeed);
    sendControlData({ type:"control_override", direction, speed: newSpeed });
  };

  const sendControlData = (data) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(data));
    }
  };

  return (
    <VuiBox>
        {/* first row */}
        <Grid container spacing={3} display='flex' flexDirection="row">

          <Grid item xs={3} >
            <VuiButton onClick={() => handleDirectionClick('forward_left')} variant="gradient" color="info">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M17 7V5H5v12h2V8.414l10.293 10.293 1.414-1.414L8.414 7H17z"/></svg>
            </VuiButton>
          </Grid>

          <Grid item xs={3}>
            <VuiButton onClick={() => handleDirectionClick('forward')} variant="gradient" color="info">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m3.293 11.293 1.414 1.414L11 6.414V20h2V6.414l6.293 6.293 1.414-1.414L12 2.586l-8.707 8.707z"/></svg>
            </VuiButton>
          </Grid>

          
          <Grid item xs={3}>
            <VuiButton onClick={() => handleDirectionClick('forward_right')} variant="gradient" color="info">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
            </VuiButton>
          </Grid>
        </Grid>
        
      {/* second row */}
      <Grid container spacing={4} display='flex' flexDirection="row">

        
        <Grid item xs={3}>
          <VuiButton onClick={() => handleDirectionClick('left')} variant="gradient" color="info">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z"/></svg>
          </VuiButton>
        </Grid>

        <Grid item xs={3} >
          <VuiButton onClick={() => handleDirectionClick('stop')} variant="gradient" color="info">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="m31.71 15.29-6-6-1.41 1.41 4.29 4.3H17V3.41l4.29 4.29 1.41-1.41-6-6a1 1 0 0 0-1.41 0l-6 6L10.7 7.7 15 3.41V15H3.41l4.29-4.29-1.41-1.42-6 6a1 1 0 0 0 0 1.41l6 6 1.41-1.41L3.41 17H15v11.59l-4.29-4.29-1.42 1.41 6 6a1 1 0 0 0 1.41 0l6-6-1.41-1.41L17 28.59V17h11.59l-4.29 4.29 1.41 1.41 6-6a1 1 0 0 0 0-1.41z" data-name="83-Arrow"/></svg>
          </VuiButton>
        </Grid>

        <Grid item xs={3}>
          <VuiButton onClick={() => handleDirectionClick('right')} variant="gradient" color="info">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>
          </VuiButton>
        </Grid>
        
      </Grid>
      {/* thrid row */}
      <Grid container spacing={3} display='flex' flexDirection="row">

        <Grid item xs={3}>
          <VuiButton onClick={() => handleDirectionClick('bacward')} variant="gradient" color="info">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m18.707 6.707-1.414-1.414L7 15.586V7H5v12h12v-2H8.414L18.707 6.707z"/></svg>
          </VuiButton>
        </Grid>

        <Grid item xs={3}>
          <VuiButton onClick={() => handleDirectionClick('bacward')} variant="gradient" color="info">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M13 17.586V4h-2v13.586l-6.293-6.293-1.414 1.414L12 21.414l8.707-8.707-1.414-1.414L13 17.586z"/></svg>
          </VuiButton>
        </Grid>

        <Grid item xs={3}>
          <VuiButton onClick={() => handleDirectionClick('bacward')} variant="gradient" color="info">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M17 15.586 6.707 5.293 5.293 6.707 15.586 17H7v2h12V7h-2v8.586z"/></svg>
          </VuiButton>
        </Grid>
      </Grid>

      <Grid item >
      <Box sx={{ height: 300, width: 200 }}>
          {/* <Slider
            sx={{
              '& input[type="range"]': {
                WebkitAppearance: 'slider-vertical',
              },
            }}
            orientation="vertical"
            defaultValue={60}
            aria-label="speed"
            valueLabelDisplay="auto"
            onKeyDown={handleSpeedChange}
          /> */}
          <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" onChange={handleSpeedChange} />
          {/* 
          <input
            type="range"
            min="0"
            max="100"
            value={speed}
            onChange={handleSpeedChange}
          /> 
          */}
          <p>Speed: {speed}</p>
        </Box>
      </Grid>
    </VuiBox>
      );

};

export default ControllerComponent;