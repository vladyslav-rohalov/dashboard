import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  updateHookah,
  updateTobacco,
  updateCoal,
  updateAccessory,
  addImages,
  removeImages,
  deleteProduct,
} from '../../../redux/products/operations';
import ProductDetails from './productDeatils/productDetails';
import ProductPhoto from './productPhoto/productPhoto';
import ProductPreview from './productPreview/productPreview';
import DeleteProduct from './deleteProduct/deleteProduct';
import AlertNotify from '../../onError/alert';
import { PageTitle } from '../addNew/addNew.styled';
import { Box, IconButton, Tabs, Tab } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { LinearProgress } from '@mui/material';

export default function ProductCard({
  products,
  id,
  handleBack,
  enumValues,
  error,
}) {
  const [spinner, setSpinner] = useState(false);
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const product = products.products.filter(product => product.id === id)[0];

  useEffect(() => {
    if (product) {
      if (product.hookahs) setCategory('hookah');
      if (product.tobacco) setCategory('tobacco');
      if (product.coals) setCategory('coal');
      if (product.accessories) setCategory('accessories');
    }
  }, [product]);

  const dispatch = useDispatch();

  const handleUpdateDetails = async data => {
    switch (category) {
      case 'hookah':
        setSpinner(true);
        await dispatch(updateHookah(data));
        setSpinner(false);
        break;
      case 'tobacco':
        setSpinner(true);
        await dispatch(updateTobacco(data));
        setSpinner(false);
        break;
      case 'coal':
        setSpinner(true);
        await dispatch(updateCoal(data));
        setSpinner(false);
        break;
      case 'accessories':
        setSpinner(true);
        await dispatch(updateAccessory(data));
        setSpinner(false);
        break;
      default:
        break;
    }
  };

  const handleDeleteImages = async ({ id, images }) => {
    setSpinner(true);
    await dispatch(removeImages({ id, images }));
    setSpinner(false);
  };

  const handleDeleteProduct = async () => {
    setSpinner(true);
    const response = await dispatch(deleteProduct(product.id));
    if (response.meta.requestStatus === 'fulfilled') {
      handleBack();
    }
    setSpinner(false);
  };

  const handleAddImages = async formData => {
    setSpinner(true);
    await dispatch(addImages(formData));
    setSpinner(false);
  };

  return (
    <Box>
      <IconButton onClick={handleBack}>
        <ArrowBackIcon />
      </IconButton>
      <PageTitle>Product Editing </PageTitle>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value}>
          <Tab onClick={setValue.bind(this, 0)} label={'Details'} />
          <Tab onClick={setValue.bind(this, 1)} label={'Photo'} />
          <Tab onClick={setValue.bind(this, 2)} label={'Preview'} />
          <Tab onClick={setValue.bind(this, 3)} label={'Delete'} />
        </Tabs>
      </Box>
      {error && <AlertNotify error={error} />}
      {spinner && (
        <Box sx={{ width: '100%', mt: 2 }}>
          <LinearProgress />
        </Box>
      )}
      {value === 0 && (
        <ProductDetails
          product={product}
          enumValues={enumValues}
          category={category}
          handleUpdateDetails={handleUpdateDetails}
        />
      )}
      {value === 1 && (
        <ProductPhoto
          product={product}
          handleDeleteImages={handleDeleteImages}
          handleAddImages={handleAddImages}
        />
      )}
      {value === 2 && <ProductPreview product={product} />}
      {value === 3 && <DeleteProduct handleDelete={handleDeleteProduct} />}
    </Box>
  );
}
