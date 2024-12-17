import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Grid,
  Divider,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AdvancedSection = ({ onValidationChange }) => {
  const [formValues, setFormValues] = useState({
    externalId: '',
    automationId: '',
    references: '',
  });

  const [errors, setErrors] = useState({
    externalId: '',
    automationId: '',
    references: '',
  });

  const validateField = (name, value) => {
    let error = '';
    if (name === 'externalId' && !value.trim()) {
      error = 'External ID is required.';
    } else if (name === 'automationId' && !value.trim()) {
      error = 'Automation ID is required.';
    } else if (name === 'references') {
      const referenceRegex = /^[a-zA-Z0-9, ]*$/; // Allow alphanumeric, commas, and spaces
      if (value && !referenceRegex.test(value)) {
        error = 'References can only contain alphanumeric characters, commas, and spaces.';
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedErrors = { ...errors, [name]: validateField(name, value) };
    setErrors(updatedErrors);

    setFormValues({ ...formValues, [name]: value });

    // Notify parent component if all fields are valid
    const isFormValid = Object.values(updatedErrors).every((err) => err === '') && 
                        Object.values(formValues).every((val) => val.trim() !== '');
    onValidationChange(isFormValid);
  };

  return (
    <Accordion sx={{ mt: 3 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="advanced-content"
        id="advanced-header"
      >
        <Typography variant="h6">Advanced</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="External ID"
                name="externalId"
                fullWidth
                value={formValues.externalId}
                onChange={handleChange}
                error={!!errors.externalId}
                helperText={errors.externalId || 'An external system ID.'}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Automation ID"
                name="automationId"
                fullWidth
                value={formValues.automationId}
                onChange={handleChange}
                error={!!errors.automationId}
                helperText={errors.automationId || 'Unique ID for automation.'}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="References"
                name="references"
                placeholder="Enter reference IDs separated by commas"
                fullWidth
                value={formValues.references}
                onChange={handleChange}
                error={!!errors.references}
                helperText={
                  errors.references || 'Enter valid reference IDs separated by commas.'
                }
              />
            </Grid>
          </Grid>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default AdvancedSection;
