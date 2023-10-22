import { Box, Stepper, Step, StepLabel } from '@mui/material';

const steps = ['Add details', 'Add photo', 'Result'];

export default function HorizontalStepper({ activeStep }) {
  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      <Stepper activeStep={activeStep}>
        {steps.map(label => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
