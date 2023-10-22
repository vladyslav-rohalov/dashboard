import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllEnums } from '../../../redux/enums/operations';
import { useEnum } from '../../../hooks/useEnum';
import { Container, PageTitle, FiltersBlock } from './addNew.styled';
import SetCatergory from './setCategory/setCatefory';
import { Button, FormControl } from '@mui/material';
import Promotion from './commonFileds/promotion/promotion';
import Status from './commonFileds/status/status';
import Brand from './commonFileds/brand/brand';
import Price from './commonFileds/price/price';
import Available from './commonFileds/available/available';
import Title from './commonFileds/title/title';
import Description from './commonFileds/description/description';
import HookahColor from './categories/hookah/color';
import HookahSize from './categories/hookah/hookahSize';
import Type from './categories/accessory/type';
import BowlType from './categories/accessory/bowlType';
import CoalSize from './categories/coal/size';
import CoalWeight from './categories/coal/weight';
import TobaccoWeight from './categories/tobacco/weight';

export default function AddNew() {
  const [category, setCategory] = useState('hookah');
  const [status, setStatus] = useState('in stock');
  const [promotion, setPromotion] = useState(null);
  const [brand, setBrand] = useState(null);
  const [price, setPrice] = useState(0);
  const [available, setAvailable] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState(null);
  const [hookahSize, setHookahSize] = useState(null);
  const [type, setType] = useState(null);
  const [bowlType, setBowlType] = useState(null);
  const [coalSize, setCoalSize] = useState(0);
  const [coalWeight, setCoalWeight] = useState(0);
  const [tobaccoWeight, setTobaccoWeight] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEnums());
  }, [dispatch]);

  const {
    bowl_types,
    brands,
    colors,
    error,
    flavors,
    hookah_sizes,
    isLoading,
    promotions,
    types,
  } = useEnum();

  const handleAdd = e => {
    e.preventDefault();
    console.log({
      status,
      promotion,
      ...brand,
      price,
      available,
      title,
      description,
      ...color,
      ...hookahSize,
    });
  };

  return (
    <Container>
      <PageTitle>Add new product</PageTitle>
      <SetCatergory handleCategory={e => setCategory(e)} />
      {!isLoading && (
        <FormControl component="form" onSubmit={handleAdd}>
          <FiltersBlock>
            <Status value={status} onChange={value => setStatus(value)} />
            <Promotion
              value={promotion}
              onChange={value => setPromotion(value)}
              list={promotions}
            />
            <Brand
              value={brand}
              onChange={value => setBrand(value)}
              list={brands}
              qwe={isLoading}
            />
            <Price value={price} onChange={value => setPrice(value)} />
            <Available
              value={available}
              onChange={value => setAvailable(value)}
            />
            {category === 'hookah' && (
              <>
                <HookahColor
                  value={color}
                  onChange={value => setColor(value)}
                  list={colors}
                />
                <HookahSize
                  value={hookahSize}
                  onChange={value => setHookahSize(value)}
                  list={hookah_sizes}
                />
              </>
            )}
            {category === 'accessory' && (
              <>
                <Type
                  value={type}
                  onChange={value => setType(value)}
                  list={types}
                />
                <BowlType
                  value={bowlType}
                  onChange={value => setBowlType(value)}
                  list={bowl_types}
                />
              </>
            )}
            {category === 'tobacco' && (
              <>
                <TobaccoWeight
                  value={tobaccoWeight}
                  onChange={value => setTobaccoWeight(value)}
                />
              </>
            )}
            {category === 'coal' && (
              <>
                <CoalSize
                  value={coalSize}
                  onChange={value => setCoalSize(value)}
                />
                <CoalWeight
                  value={coalWeight}
                  onChange={value => setCoalWeight(value)}
                />
              </>
            )}
            <Title
              value={title}
              onChange={value => setTitle(value)}
              cat={category}
              brand={brand}
              color={color}
              hookahSize={hookahSize}
              type={type}
              bowlType={bowlType}
            />
            <Description
              value={description}
              onChange={value => setDescription(value)}
            />
          </FiltersBlock>

          <Button variant="contained" type="submit" sx={{ width: 160, mt: 4 }}>
            Submit
          </Button>
        </FormControl>
      )}
    </Container>
  );
}
