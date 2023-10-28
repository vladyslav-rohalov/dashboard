import { useState } from 'react';
import SetCatergory from '../common/setCategory/setCategory';
import SearchFilters from './filters/filters';
import { PageTitle } from '../addNew/addNew.styled';

export default function Products() {
  const [category, setCategory] = useState('hookah');
  return (
    <>
      <PageTitle>Find a Product</PageTitle>
      <SetCatergory handleCategory={val => setCategory(val)} />
      <SearchFilters category={category} />
    </>
  );
}
