import React from 'react';
import { Paper, Typography, Divider, Box, TextField, Grid, MenuItem } from '@mui/material';
import CustomFields from './CustomFields';

import AdvancedSection from './AdvancedSection';
import FileUploadSection from './FileUploadSection';
import ButtonsSection from './ButtonsSection';

const NewTestCase = () => {
  const suites = ['Finding Products', 'Shopping Cart', 'Payments'];
  const sections = ['Section 1', 'Section 2', 'Section 3'];
  const types = ['Functional', 'Regression', 'Smoke'];

  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: '1000px', margin: '20px auto' }}>
  
      <Typography variant="h5" fontWeight="bold" mb={2}>
        New Test Case
      </Typography>
      <Divider />

    
      <Box component="form" noValidate sx={{ mt: 2 }}>
       
        <TextField
          label="Name *"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          helperText="Name is required"
        />

       
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField select label="Suite *" fullWidth defaultValue="">
              {suites.map((suite) => (
                <MenuItem key={suite} value={suite}>
                  {suite}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField select label="Section *" fullWidth defaultValue="">
              {sections.map((section) => (
                <MenuItem key={section} value={section}>
                  {section}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField select label="Type *" fullWidth defaultValue="">
              {types.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Estimated Time *"
              variant="outlined"
              fullWidth
              defaultValue="15"
              helperText="Estimated minutes required"
            />
          </Grid>
        </Grid>

   
        <CustomFields />
        
        <AdvancedSection />
        <FileUploadSection />
        <ButtonsSection />
      </Box>
    </Paper>
  );
};

export default NewTestCase;
