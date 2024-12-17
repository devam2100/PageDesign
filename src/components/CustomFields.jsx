import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Divider,
  IconButton,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
} from "@mui/material";
import JoditEditor from "jodit-react";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomFields = () => {
  const [preconditions, setPreconditions] = useState("");
  const [steps, setSteps] = useState([{ instructions: "", expectedResult: "" }]);
  const [errors, setErrors] = useState({ preconditions: false, steps: [] });

  const addStep = () => {
    setSteps([...steps, { instructions: "", expectedResult: "" }]);
    setErrors((prev) => ({
      ...prev,
      steps: [...prev.steps, { instructions: false, expectedResult: false }],
    }));
  };

  const handleStepChange = (index, field, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index][field] = value;
    setSteps(updatedSteps);

    const updatedErrors = { ...errors };
    updatedErrors.steps[index][field] = value.trim() === "";
    setErrors(updatedErrors);
  };

  const deleteStep = (index) => {
    const updatedSteps = steps.filter((_, i) => i !== index);
    setSteps(updatedSteps);

    const updatedErrors = { ...errors };
    updatedErrors.steps = errors.steps.filter((_, i) => i !== index);
    setErrors(updatedErrors);
  };

  const validateFields = () => {
    const newErrors = {
      preconditions: preconditions.trim() === "",
      steps: steps.map((step) => ({
        instructions: step.instructions.trim() === "",
        expectedResult: step.expectedResult.trim() === "",
      })),
    };

    setErrors(newErrors);

    // Check if there are any errors
    return (
      !newErrors.preconditions &&
      newErrors.steps.every(
        (stepError) => !stepError.instructions && !stepError.expectedResult
      )
    );
  };

  const handleSubmit = () => {
    if (validateFields()) {
      // Proceed with form submission
      console.log("Form is valid");
      console.log({ preconditions, steps });
    } else {
      console.log("Form has errors");
    }
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
          {/* Preconditions */}
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
              {errors.preconditions && (
                <Typography color="error" variant="body2">
                  Preconditions are required.
                </Typography>
              )}
            </CardContent>
          </Card>

          {/* Steps */}
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
                      onBlur={(newContent) =>
                        handleStepChange(index, "instructions", newContent)
                      }
                      onChange={() => {}}
                    />
                    {errors.steps[index]?.instructions && (
                      <Typography color="error" variant="body2">
                        Instructions are required.
                      </Typography>
                    )}
                  </Grid>

                  {/* Expected Result Editor */}
                  <Grid item xs={12} md={5.5}>
                    <Typography variant="body2" gutterBottom>
                      Expected Result
                    </Typography>
                    <JoditEditor
                      value={step.expectedResult}
                      onBlur={(newContent) =>
                        handleStepChange(index, "expectedResult", newContent)
                      }
                      onChange={() => {}}
                    />
                    {errors.steps[index]?.expectedResult && (
                      <Typography color="error" variant="body2">
                        Expected result is required.
                      </Typography>
                    )}
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

          {/* Add Step Button */}
          <Box textAlign="center" sx={{ mt: 2 }}>
            <Button variant="outlined" onClick={addStep}>
              + Step
            </Button>
          </Box>

          {/* Submit Button */}
          <Box textAlign="center" sx={{ mt: 4 }}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CustomFields;
