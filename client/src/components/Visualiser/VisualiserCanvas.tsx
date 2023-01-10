import React, { useContext, useEffect } from 'react';
import { Box } from '@mui/material';
import VisualiserContext from './VisualiserInterface/VisualiserContext';

/* -------------------------------------------------------------------------- */
/*                        Visualiser-Specific Canvases                        */
/* -------------------------------------------------------------------------- */

/**
 * The React component that renders the DOM elements that the visualiser
 * attaches itself to.
 */
const VisualiserCanvas: React.FC = () => {
  const {
    controller,
    timeline: { handleTimelineUpdate, handleUpdateIsPlaying },
  } = useContext(VisualiserContext);
  useEffect(() => {
    if (!controller) return;
    controller.generateDataStructure();
    window.addEventListener('keydown', (e) => {
      if (e.key === 'z') {
        // e.preventDefault();
        const command = 'append';
        const args = ['5'];
        controller.doOperation(command, handleTimelineUpdate, ...args);
        handleUpdateIsPlaying(true);
        // executeCommand();
      }
    });
  }, [controller]);
  return (
    <Box style={{borderTop: "2px solid hsla(0, 0%, 100%, 15%)"}}>

    <Box id="visualiser-container" margin="auto" width={window.screen.width} style={{filter: "invert(100%) hue-rotate(180deg)"}}>
      <svg id="visualiser-canvas" />
    </Box>
    </Box>
  );
};

export default VisualiserCanvas;
