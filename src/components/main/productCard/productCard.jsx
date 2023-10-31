import { useState } from 'react';
import ProductDetails from './productDeatils/productDetails';
import ProductPhoto from './productPhoto/productPhoto';
import { PageTitle } from '../addNew/addNew.styled';
import { Box, IconButton, Tabs, Tab } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ProductCard({
  products,
  id,
  handleBack,
  enumValues,
  handleRefetch,
}) {
  const [value, setValue] = useState(0);
  const product = products.products.filter(product => product.id === id)[0];

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
          <Tab onClick={setValue.bind(this, 2)} label={'Result'} />
        </Tabs>
      </Box>
      {value === 0 && (
        <ProductDetails product={product} enumValues={enumValues} />
      )}
      {value === 1 && (
        <ProductPhoto product={product} handleRefetch={handleRefetch} />
      )}
    </Box>
  );
}
