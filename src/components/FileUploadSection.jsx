import React, { useState } from 'react';
import { Typography, Button, Box, Divider, Alert } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const FileUploadSection = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');

  const MAX_FILES = 5;
  const MAX_FILE_SIZE_MB = 15;

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);

    // Validate the number of files
    if (uploadedFiles.length + files.length > MAX_FILES) {
      setError(`You can upload a maximum of ${MAX_FILES} files.`);
      return;
    }

    // Validate file sizes
    for (let file of uploadedFiles) {
      if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        setError(`Each file must be smaller than ${MAX_FILE_SIZE_MB} MB.`);
        return;
      }
    }

    // Clear error and update files
    setError('');
    setFiles([...files, ...uploadedFiles]);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  return (
    <>
      <Typography variant="h6" mt={3}>
        Files
      </Typography>
      <Divider />

      <Box sx={{ mt: 4 }} display="flex" alignItems="center" gap={2}>
        <Button
          variant="contained"
          component="label"
          startIcon={<UploadFileIcon />}
        >
          Upload
          <input
            hidden
            accept="*/*"
            multiple
            type="file"
            onChange={handleFileUpload}
          />
        </Button>
        <Typography>Max {MAX_FILES} files of {MAX_FILE_SIZE_MB} MB each</Typography>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      <Box sx={{ mt: 3 }}>
        {files.map((file, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 1,
            }}
          >
            <Typography>{file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)</Typography>
            <Button
              size="small"
              color="error"
              onClick={() => handleRemoveFile(index)}
            >
              Remove
            </Button>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default FileUploadSection;
