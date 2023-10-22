import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllEnums } from '../../../../redux/enums/operations';
import { addHookah, addTobacco } from '../../../../redux/products/operations';
import { addCoal, addAccessory } from '../../../../redux/products/operations';
import { useEnum } from '../../../../hooks/useEnum';
import { Button, FormControl } from '@mui/material';
import SetCatergory from '../setCategory/setCatefory';
import Promotion from '../commonFileds/promotion/promotion';
import Status from '../commonFileds/status/status';
import Brand from '../commonFileds/brand/brand';
import Price from '../commonFileds/price/price';
import Available from '../commonFileds/available/available';
import Title from '../commonFileds/title/title';
import Description from '../commonFileds/description/description';
import HookahColor from '../categories/hookah/color';
import HookahSize from '../categories/hookah/hookahSize';
import Type from '../categories/accessory/type';
import BowlType from '../categories/accessory/bowlType';
import CoalSize from '../categories/coal/size';
import CoalWeight from '../categories/coal/weight';
import TobaccoWeight from '../categories/tobacco/weight';
import Strength from '../categories/tobacco/strength';
import Flavor from '../categories/tobacco/flavor';
import { FiltersBlock } from '../addNew.styled';

export default function AddDetails() {
  const [category, setCategory] = useState('hookah');
  const [status, setStatus] = useState('in stock');
  const [strength, setStrength] = useState('none');
  const [promotion, setPromotion] = useState(null);
  const [brand, setBrand] = useState(null);
  const [flavor, setFlavor] = useState(null);
  const [color, setColor] = useState(null);
  const [hookahSize, setHookahSize] = useState(null);
  const [type, setType] = useState(null);
  const [bowlType, setBowlType] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState('');
  const [coalSize, setCoalSize] = useState('');
  const [coalWeight, setCoalWeight] = useState('');
  const [tobaccoWeight, setTobaccoWeight] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEnums());
  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    const commonData = {
      promotion: promotion?.promotion,
      brand: brand?.brand,
      status,
      price,
      description,
      title,
      available,
    };
    if (category === 'hookah') {
      const data = {
        ...commonData,
        color: color?.color,
        hookah_size: hookahSize?.hookah_size,
      };
      dispatch(addHookah(data));
      console.log(data);
    }
    if (category === 'tobacco') {
      const data = {
        ...commonData,
        flavor: flavor?.flavor,
        tobacco_weight: tobaccoWeight,
        strength: strength === 'none' ? null : strength,
      };
      dispatch(addTobacco(data));
      console.log(data);
    }
    if (category === 'coal') {
      const data = {
        ...commonData,
        coal_size: coalSize,
        coal_weight: coalWeight,
      };
      dispatch(addCoal(data));
      console.log(data);
    }
    if (category === 'accessories') {
      const data = {
        ...commonData,
        type: type?.type,
        bowl_type: bowlType?.bowl_type,
      };
      dispatch(addAccessory(data));
      console.log(data);
    }
  };

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

  return (
    <>
      <SetCatergory handleCategory={e => setCategory(e)} />
      {!isLoading && (
        <FormControl component="form" onSubmit={handleSubmit}>
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
            {category === 'tobacco' && (
              <>
                <Strength
                  value={strength}
                  onChange={value => setStrength(value)}
                />
                <Flavor
                  value={flavor}
                  onChange={value => setFlavor(value)}
                  list={flavors}
                />
                <TobaccoWeight
                  value={tobaccoWeight}
                  onChange={value => setTobaccoWeight(value)}
                />
              </>
            )}
            {category === 'accessories' && (
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
              flavor={flavor}
              type={type}
              bowlType={bowlType}
              tobaccoWeight={tobaccoWeight}
              coalSize={coalSize}
              coalWeight={coalWeight}
            />
            <Description
              value={description}
              onChange={value => setDescription(value)}
            />
          </FiltersBlock>

          <Button
            variant="contained"
            type="submit"
            sx={{ width: 160, margin: '32px auto' }}
          >
            Submit
          </Button>
        </FormControl>
      )}
    </>
  );
}
