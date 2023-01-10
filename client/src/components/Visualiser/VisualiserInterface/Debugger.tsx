import { useState, SyntheticEvent } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const Debugger = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box width="20%" style={{borderLeft: "2px solid hsla(0, 0%, 100%, 15%)"}}>
      <TabContext value={value}>
        {/* <Box> */}
        <TabList value={value} onChange={handleChange}>
          <Tab label="Console" value="1" />
          <Tab label="Inspect" value="2" />
          <Tab label="Configure" value="3" />
        </TabList>
        {/* </Box> */}
        <TabPanel value="1">Console</TabPanel>
        <TabPanel value="2">Inspect</TabPanel>
        <TabPanel value="3"><img src="https://i.imgur.com/C0DfYt0.png" style={{position: "relative", left: "-15px", top: "-25px", width: "300px", filter: "invert(100%)"}}/></TabPanel>
      </TabContext>
    </Box>
  );
};

export default Debugger;
