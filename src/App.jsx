import React from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';
import { Box, Button } from '@material-ui/core';

const App = () => {
  return (
    <>
      <CssBaseLine />
      <div>
        <Box>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </Box>
      </div>
    </>
  );
};

export default App;
