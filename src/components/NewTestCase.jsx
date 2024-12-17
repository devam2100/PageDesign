import React, { useState } from 'react';
import { Paper, Typography, Divider, Box, TextField, Grid, MenuItem, Button } from '@mui/material';
import CustomFields from './CustomFields';
import AdvancedSection from './AdvancedSection';
import FileUploadSection from './FileUploadSection';
import ButtonsSection from './ButtonsSection';

const NewTestCase = () => {
  const suites = ['Finding Products', 'Shopping Cart', 'Payments'];
  const sections = ['Section 1', 'Section 2', 'Section 3'];
  const types = ['Functional', 'Regression', 'Smoke'];

  const [formData, setFormData] = useState({
    name: '',
    suite: '',
    section: '',
    type: '',
    estimatedTime: '',
  });

  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.suite) newErrors.suite = 'Suite is required';
    if (!formData.section) newErrors.section = 'Section is required';
    if (!formData.type) newErrors.type = 'Type is required';
    if (!formData.estimatedTime || isNaN(formData.estimatedTime)) {
      newErrors.estimatedTime = 'Estimated time must be a number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateFields()) {
      console.log('Form submitted successfully:', formData);
      // Proceed with form submission logic
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: '1000px', margin: '20px auto' }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        New Test Case
      </Typography>
      <Divider />

      <Box component="form" noValidate sx={{ mt: 2 }} onSubmit={handleSubmit}>
        <TextField
          label="Name *"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          value={formData.name}
          onChange={handleChange('name')}
          error={!!errors.name}
          helperText={errors.name || 'Name is required'}
        />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Suite *"
              fullWidth
              value={formData.suite}
              onChange={handleChange('suite')}
              error={!!errors.suite}
              helperText={errors.suite || ''}
            >
              {suites.map((suite) => (
                <MenuItem key={suite} value={suite}>
                  {suite}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Section *"
              fullWidth
              value={formData.section}
              onChange={handleChange('section')}
              error={!!errors.section}
              helperText={errors.section || ''}
            >
              {sections.map((section) => (
                <MenuItem key={section} value={section}>
                  {section}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Type *"
              fullWidth
              value={formData.type}
              onChange={handleChange('type')}
              error={!!errors.type}
              helperText={errors.type || ''}
            >
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
              value={formData.estimatedTime}
              onChange={handleChange('estimatedTime')}
              error={!!errors.estimatedTime}
              helperText={errors.estimatedTime || 'Estimated minutes required'}
            />
          </Grid>
        </Grid>

        <CustomFields />
        <AdvancedSection />
        <FileUploadSection />

        <Box mt={4} display="flex" justifyContent="space-between">
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default NewTestCase;
