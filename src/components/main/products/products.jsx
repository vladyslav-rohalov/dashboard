import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../../redux/products/operations';
import { useProducts } from '../../../hooks/useProducts';
import SetCatergory from '../common/setCategory/setCategory';
import SearchFilters from './filters/filters';
import Pagination from './pagination/pagintaion';
import { PageTitle } from '../addNew/addNew.styled';

export default function Products() {
  const [category, setCategory] = useState('all');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [searchParams, setSearchParams] = useState(null);

  const { products = [] } = useProducts();
  const pageCount = products?.total ? Math.ceil(products.total / limit) : 0;

  useEffect(() => {
    console.log(products.length > 0);
  }, [products]);

  return (
    <>
      <PageTitle>Find a Product</PageTitle>
      <SetCatergory handleCategory={val => setCategory(val)} withAll={true} />
      <SearchFilters category={category} page={page} limit={limit} />
      {products.products.length > 0 && (
        <Pagination page={page} pageCount={pageCount} />
      )}
    </>
  );
}
