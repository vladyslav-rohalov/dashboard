import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts, getHookahs } from '../../../redux/products/operations';
import { getTobacco, getCoals } from '../../../redux/products/operations';
import { getAccessories } from '../../../redux/products/operations';
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
  const [params, setParams] = useState({ page: 1, limit: 25 });
  const dispatch = useDispatch();

  const { products = [] } = useProducts();
  const pageCount = products?.counts?.total
    ? Math.ceil(products.counts.total / limit)
    : 0;

  const choiseMethod = (category, searchParams) => {
    switch (category) {
      case 'all':
        dispatch(getAllProducts(searchParams));
        break;
      case 'hookah':
        dispatch(getHookahs(searchParams));
        break;
      case 'tobacco':
        dispatch(getTobacco(searchParams));
        break;
      case 'coal':
        dispatch(getCoals(searchParams));
        break;
      case 'accessories':
        dispatch(getAccessories(searchParams));
        break;
      default:
        dispatch(getAllProducts(searchParams));
    }
  };

  const handleCategory = value => {
    setCategory(value);
    choiseMethod(value, params);
  };

  const handleLimit = value => {
    setLimit(value);
    setParams(prevParams => ({ ...prevParams, limit: value, page: 1 }));
    console.log({ ...params, limit: value, page: 1 });
    handleFetchAll({ ...params, limit: value, page: 1 });
  };

  const handlePage = value => {
    setPage(value);
    setParams(prevParams => ({ ...prevParams, page: value }));
    handleFetchAll({ ...params, page: value });
  };

  const handleFetchAll = searchParams => {
    choiseMethod(category, searchParams);
  };

  useEffect(() => {
    handleFetchAll(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFetchOne = id => {};

  return (
    <>
      <PageTitle>Find a Product</PageTitle>
      <SetCatergory handleCategory={handleCategory} withAll={true} />
      <SearchFilters
        category={category}
        page={page}
        limit={limit}
        handleFetch={handleFetchAll}
        updateParams={searchParams =>
          setParams({ ...searchParams, page: 1, limit: 25 })
        }
      />
      {products?.products?.length > 0 && (
        <>
          <Typography>Total: {products.counts.total}</Typography>
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
