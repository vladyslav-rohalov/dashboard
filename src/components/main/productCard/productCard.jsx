import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  updateHookah,
  updateTobacco,
  updateCoal,
  updateAccessory,
  removeImages,
  deleteProduct,
} from '../../../redux/products/operations';
import ProductDetails from './productDeatils/productDetails';
import ProductPhoto from './productPhoto/productPhoto';
import ProductPreview from './productPreview/productPreview';
import DeleteProduct from './deleteProduct/deleteProduct';
import { PageTitle } from '../addNew/addNew.styled';
import { Box, IconButton, Tabs, Tab } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ProductCard({ products, id, handleBack, enumValues }) {
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const product = products.products.filter(product => product.id === id)[0];

  const checkCat = () => {
    if (product) {
      if (product.hookahs) setCategory('hookah');
      if (product.tobacco) setCategory('tobacco');
      if (product.coals) setCategory('coal');
      if (product.accessories) setCategory('accessories');
    }
  };

  useEffect(() => {
    checkCat();
    // eslint-disable-next-line
  }, [products]);

  const dispatch = useDispatch();

  const handleUpdateDetails = data => {
    switch (category) {
      case 'hookah':
        dispatch(updateHookah(data));
        break;
      case 'tobacco':
        dispatch(updateTobacco(data));
        break;
      case 'coal':
        dispatch(updateCoal(data));
        break;
      case 'accessories':
        dispatch(updateAccessory(data));
        break;
      default:
        break;
    }
  };

  const handleDeleteImages = ({ id, images }) => {
    dispatch(removeImages({ id, images }));
  };

  const handleDeleteProduct = async () => {
    const response = await dispatch(deleteProduct(product.id));
    if (response.meta.requestStatus === 'fulfilled') {
      handleBack();
    }
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
        />
      )}
      {value === 2 && <ProductPreview product={product} />}
      {value === 3 && <DeleteProduct handleDelete={handleDeleteProduct} />}
    </Box>
  );
}
