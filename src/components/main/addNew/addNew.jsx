import { useState } from 'react';
import { Container, PageTitle } from './addNew.styled';
import HorizontalStepper from './stepper/stepper';
import AddDetails from './addDetails/addDetails';

export default function AddNew() {
  return (
    <Container component={'section'}>
      <PageTitle>Add new product</PageTitle>
      <HorizontalStepper />
      <AddDetails />
    </Container>
  );
}
