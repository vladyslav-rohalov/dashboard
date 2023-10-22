import { useState, useEffect } from 'react';
import { useProducts } from '../../../hooks/useProducts';
import { Container, PageTitle } from './addNew.styled';
import HorizontalStepper from './stepper/stepper';
import AddDetails from './addDetails/addDetails';
import AddPhoto from './addPhoto/addPhoto';
import AlertNotify from '../../onError/alert';

export default function AddNew() {
  const [activeStep, setActiveStep] = useState(0);
  const { error, isLoading, response } = useProducts();

  // useEffect(() => {
  //   console.log(response);
  // }, [response]);

  const handleStep = () => {
    if (!error) {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <Container component={'section'}>
      <PageTitle>Add new product</PageTitle>
      <HorizontalStepper activeStep={activeStep} />
      {error && <AlertNotify error={error} />}
      {activeStep === 0 && <AddDetails onSuccess={handleStep} />}
      {activeStep === 1 && <AddPhoto />}
    </Container>
  );
}
