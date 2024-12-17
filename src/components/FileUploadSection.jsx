import React from 'react';
import { Typography, Button, Box,Divider } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const FileUploadSection = () => {
  return (
    <>
      <Typography variant="h6" mt={3}>
        Files
      </Typography>
      <Divider />
      
      <Box sx={{ mt: 4 }}display="flex" alignItems="center" gap={2}>
        <Button
          variant="contained"
          component="label"
          startIcon={<UploadFileIcon />}
        >
          Upload
          <input hidden accept="*/*" multiple type="file" />
        </Button>
        <Typography>Max 5 files of 15 MB each</Typography>
      </Box>
    </>
  );
};

export default FileUploadSection;
