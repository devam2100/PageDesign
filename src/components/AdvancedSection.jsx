import React from 'react';
import { Typography, TextField, Grid, Divider, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AdvancedSection = () => {
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
                fullWidth
                helperText="An external system ID."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Automation ID"
                fullWidth
                helperText="Unique ID for automation."
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="References"
                placeholder="Enter reference IDs separated by commas"
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default AdvancedSection;
