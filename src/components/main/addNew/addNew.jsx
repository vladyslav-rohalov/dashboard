import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addImages, addAccessory } from '../../../redux/products/operations';
import { addHookah, addCoal } from '../../../redux/products/operations';
import { addTobacco } from '../../../redux/products/operations';
import { getAllEnums } from '../../../redux/enums/operations';
import { publishProduct } from '../../../redux/products/operations';
import { useProducts } from '../../../hooks/useProducts';
import { PageTitle } from './addNew.styled';
import HorizontalStepper from './stepper/stepper';
import AddDetails from './addDetails/addDetails';
import AddPhoto from './addPhoto/addPhoto';
import AlertNotify from '../../onError/alert';
import Result from './result/result';
import { LinearProgress, Box } from '@mui/material';

export default function AddNew() {
  const [spinner, setSpinner] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const { error, isLoading, response } = useProducts();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEnums());
  }, [dispatch]);

  const handleStep = () => {
    setActiveStep(activeStep + 1);
  };

  const handleAddImages = async formData => {
    setSpinner(true);
    await dispatch(addImages(formData));
    setSpinner(false);
    handleStep();
  };

  const handleAddDetails = async (formData, category) => {
    const data = {
      promotion: formData.promotion?.promotion,
      brand: formData.brand?.brand,
      status: formData.status,
      price: +formData.price,
      description: formData.description,
      title: formData.title,
      available: +formData.available,
    };
    setSpinner(true);
    if (category === 'hookah') {
      data.color = formData.color?.color.split(',')[0];
      data.hookah_size = formData.hookah_size?.hookah_size;
      await dispatch(addHookah(data));
    }
    if (category === 'tobacco') {
      data.flavor = formData.flavor?.flavor;
      data.tobacco_weight = +formData.tobacco_weight;
      data.strength = formData.strength === 'none' ? null : formData.strength;
      await dispatch(addTobacco(data));
    }
    if (category === 'coal') {
      data.coal_size = +formData.size;
      data.coal_weight = +formData.coal_weight;
      await dispatch(addCoal(data));
    }
    if (category === 'accessories') {
      data.type = formData.type?.type;
      data.bowl_type = formData.bowl_type?.bowl_type;
      await dispatch(addAccessory(data));
    }
    setSpinner(false);
    handleStep();
  };

  const handlePublish = async () => {
    setSpinner(true);
    await dispatch(publishProduct(response.id));
    setSpinner(false);
    setActiveStep(0);
  };

  return (
    <>
      <PageTitle>Add new product</PageTitle>
      <HorizontalStepper activeStep={activeStep} />
      {error && <AlertNotify error={error} />}
      {spinner && (
        <Box sx={{ width: '100%', mt: 2 }}>
          <LinearProgress />
        </Box>
      )}
      {activeStep === 0 && <AddDetails handleAddDetails={handleAddDetails} />}
      {activeStep === 1 && !isLoading && (
        <AddPhoto id={response.id} handleAddImages={handleAddImages} />
      )}
      {activeStep === 2 && !isLoading && (
        <Result
          handlePublish={handlePublish}
          handleFinish={() => setActiveStep(0)}
          product={response}
        />
      )}
    </>
  );
}
