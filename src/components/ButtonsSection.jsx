import React from 'react';
import { Box, Button } from '@mui/material';

const ButtonsSection = () => {
  return (
    <Box mt={4} display="flex" justifyContent="space-between">
      <Box>
        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
          Save
        </Button>
        <Button variant="outlined" color="primary">
          Save & Add Another
        </Button>
      </Box>
      <Box>
        <Button color="inherit" sx={{ mr: 2 }}>
          Reset
        </Button>
        <Button color="error">Cancel</Button>
      </Box>
    </Box>
  );
};

export default ButtonsSection;
