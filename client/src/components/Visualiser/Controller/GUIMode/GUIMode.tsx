<<<<<<< HEAD
import { Box } from '@mui/material';
import React, { FC } from 'react';
import { Documentation } from 'visualiser-src/common/typedefs';
import OperationsTree from './GUIOperations/OperationsTree';

interface Props {
  documentation: Documentation;
  executeCommand: (command: string, args: string[]) => string;
  topicTitle: string;
}
=======
import React, { FC, useContext } from 'react';
// import OperationsTree from './GUIOperations/OperationsTree';
import { Alert, Box, List, Typography } from '@mui/material';
import VisualiserContext from 'components/Visualiser/VisualiserContext';
import OperationDetails from './OperationDetails';
>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8

/**
 * The GUI form that lets users input arguments to a menu of commands and then
 * have them affect the visualiser.
 *
 * It receives an `executeCommand` callback which should be linked to call
 * commands in the visualiser source code.
 *
 * All the commands that the form supports are listed separately in the
 * `commandsInputRules.ts` file, where the terminal commands also reside.
 */
<<<<<<< HEAD
const GUIMode: FC<Props> = ({ documentation, executeCommand, topicTitle }) => (
  <Box sx={{ height: 'calc(100% - 64px)', overflow: 'auto' }}>
    <OperationsTree
      documentation={documentation}
      topicTitle={topicTitle}
      executeCommand={executeCommand}
    />
  </Box>
);
=======
const GUIMode = () => {
  const { documentation, topicTitle } = useContext(VisualiserContext);

  return !documentation ? (
    <Alert severity="error">
      No operations are defined for the topicTitle &apos;
      {topicTitle}
      &apos;
    </Alert>
  ) : (
    <Box sx={{ padding: 2, overflow: 'auto', height: 'calc(100% - 64px)' }}>
      <Typography color="textPrimary">{topicTitle}</Typography>
      <List>
        {Object.keys(documentation).map((command, idx) => (
          <Box key={documentation[command].id}>
            <OperationDetails
              command={command}
              isLast={idx === Object.keys(documentation).length - 1}
            />
          </Box>
        ))}
      </List>
    </Box>
  );
};
>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8

export default GUIMode;
