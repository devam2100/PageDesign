import React from 'react';
import { Box, Button } from '@mui/material';

const ButtonsSection = ({ onSave, onSaveAndAddAnother, onReset, onCancel, isFormValid }) => {
  return (
    <Box mt={4} display="flex" justifyContent="space-between">
      {/* Save and Save & Add Another Buttons */}
      <Box>
        <Button
          variant="contained"
          color="primary"
          sx={{ mr: 2 }}
          onClick={onSave}
          disabled={!isFormValid} // Disabled if form is invalid
        >
          Save
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={onSaveAndAddAnother}
          disabled={!isFormValid} // Disabled if form is invalid
        >
          Save & Add Another
        </Button>
      </Box>

      {/* Reset and Cancel Buttons */}
      <Box>
        <Button color="inherit" sx={{ mr: 2 }} onClick={onReset}>
          Reset
        </Button>
        <Button color="error" onClick={onCancel}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default ButtonsSection;
