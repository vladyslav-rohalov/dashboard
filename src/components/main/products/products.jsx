import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../../redux/products/operations';
import { useProducts } from '../../../hooks/useProducts';
import SetCatergory from '../common/setCategory/setCategory';
import SearchFilters from './filters/filters';
import Pagination from './pagination/pagintaion';
import { PageTitle } from '../addNew/addNew.styled';
import ResultTable from './resultTable/resultTable';
import { Typography } from '@mui/material';

export default function Products() {
  const [category, setCategory] = useState('all');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);
  const [params, setParams] = useState({ page: page, limit: limit });
  const dispatch = useDispatch();

  const { products = [] } = useProducts();
  const pageCount = products?.total ? Math.ceil(products.total / limit) : 0;

  const handleLimit = value => {
    setLimit(value);
    setParams(prevParams => ({ ...prevParams, limit: value, page: 1 }));
  };

  const handlePage = value => {
    setPage(value);
    setParams(prevParams => ({ ...prevParams, page: value }));
  };

  const handleFetchAll = searchParams => {
    setParams({ ...searchParams, page: 1, limit: 25 });
    switch (category) {
      case 'all':
        dispatch(getAllProducts(params));
        break;
      case 'hookah':
        break;
      case 'tobacco':
        break;
      case 'coal':
        break;
      case 'accessories':
        break;
      default:
        dispatch(getAllProducts());
    }
  };

  useEffect(() => {
    console.log('params ', params);
    console.log('limit ', limit);
    handleFetchAll(params);
  }, [params]);

  const handleFetchOne = id => {};

  return (
    <>
      <PageTitle>Find a Product</PageTitle>
      <SetCatergory handleCategory={val => setCategory(val)} withAll={true} />
      <SearchFilters
        category={category}
        page={page}
        limit={limit}
        handleFetch={handleFetchAll}
      />
      {products?.products?.length > 0 && (
        <>
          <Typography>Total: {products.total}</Typography>
          <ResultTable
            products={products.products}
            handleOpenCard={handleFetchOne}
          />
          <Pagination
            page={page}
            limit={limit}
            pageCount={pageCount}
            onPageChange={handlePage}
            onLimitChange={handleLimit}
          />
        </>
      )}
    </>
  );
}
