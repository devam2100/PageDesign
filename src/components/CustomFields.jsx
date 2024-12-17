import React, { useState } from "react";
import { Box, Typography, Grid, Button, Divider, IconButton, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from "@mui/material"; 
import JoditEditor from "jodit-react";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomFields = () => {
  const [preconditions, setPreconditions] = useState("");
  const [steps, setSteps] = useState([{ instructions: "", expectedResult: "" }]);

  const addStep = () => {
    setSteps([...steps, { instructions: "", expectedResult: "" }]);
  };

  const handleStepChange = (index, field, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index][field] = value;
    setSteps(updatedSteps);
  };

  const deleteStep = (index) => {
    const updatedSteps = steps.filter((_, i) => i !== index);
    setSteps(updatedSteps);
  };

  return (
    <Box sx={{ marginTop: 4 }}>
      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="custom-fields-content"
          id="custom-fields-header"
        >
          <Typography variant="h6">Custom Fields</Typography>
        </AccordionSummary>
        <AccordionDetails>
     
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                Preconditions
              </Typography>
              <JoditEditor
                value={preconditions}
                onBlur={(newContent) => setPreconditions(newContent)}
                onChange={() => {}}
              />
            </CardContent>
          </Card>

 
          <Typography variant="subtitle1" gutterBottom>
            Steps
          </Typography>
          {steps.map((step, index) => (
            <Accordion key={index} sx={{ mb: 2 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`step-${index}-content`}
                id={`step-${index}-header`}
              >
                <Typography>Step {index + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2} alignItems="center">
                  {/* Instructions Editor */}
                  <Grid item xs={12} md={5.5}>
                    <Typography variant="body2" gutterBottom>
                      Instructions
                    </Typography>
                    <JoditEditor
                      value={step.instructions}
                      onBlur={(newContent) => handleStepChange(index, "instructions", newContent)}
                      onChange={() => {}}
                    />
                  </Grid>

               
                  <Grid item xs={12} md={5.5}>
                    <Typography variant="body2" gutterBottom>
                      Expected Result
                    </Typography>
                    <JoditEditor
                      value={step.expectedResult}
                      onBlur={(newContent) => handleStepChange(index, "expectedResult", newContent)}
                      onChange={() => {}}
                    />
                  </Grid>

                  {/* Delete Step Button */}
                  <Grid item xs={12} md={1} textAlign="center">
                    <IconButton color="error" onClick={() => deleteStep(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}


          <Box textAlign="center" sx={{ mt: 2 }}>
            <Button variant="outlined" onClick={addStep}>
              + Step
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CustomFields;
