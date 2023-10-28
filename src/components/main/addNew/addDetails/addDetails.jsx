import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllEnums } from '../../../../redux/enums/operations';
import { addHookah, addTobacco } from '../../../../redux/products/operations';
import { addCoal, addAccessory } from '../../../../redux/products/operations';
import { useEnum } from '../../../../hooks/useEnum';
import { useForm } from 'react-hook-form';
import { Button, FormControl } from '@mui/material';
import SetCatergory from '../../common/setCategory/setCategory';
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

export default function AddDetails({ onSuccess }) {
  const [category, setCategory] = useState('hookah');

  const { handleSubmit, control, watch, setValue } = useForm();
  const watchedValues = watch();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEnums());
  }, [dispatch]);

  const handleAddDetails = async formData => {
    const commonData = {
      promotion: formData.promotion?.promotion,
      brand: formData.brand?.brand,
      status: formData.status,
      price: +formData.price,
      description: formData.description,
      title: formData.title,
      available: +formData.available,
    };

    if (category === 'hookah') {
      const data = {
        ...commonData,
        color: formData.color?.color,
        hookah_size: formData.hookah_size?.hookah_size,
      };
      const response = await dispatch(addHookah(data));
      if (response.meta.requestStatus === 'rejected') return;
    }
    if (category === 'tobacco') {
      const data = {
        ...commonData,
        flavor: formData.flavor?.flavor,
        tobacco_weight: +formData.tobacco_weight,
        strength: formData.strength === 'none' ? null : formData.strength,
      };
      const response = await dispatch(addTobacco(data));
      if (response.meta.requestStatus === 'rejected') return;
    }
    if (category === 'coal') {
      const data = {
        ...commonData,
        coal_size: +formData.size,
        coal_weight: +formData.coal_weight,
      };
      const response = await dispatch(addCoal(data));
      if (response.meta.requestStatus === 'rejected') return;
    }
    if (category === 'accessories') {
      const data = {
        ...commonData,
        type: formData.type?.type,
        bowl_type: formData.bowl_type?.bowl_type,
      };
      const response = await dispatch(addAccessory(data));
      if (response.meta.requestStatus === 'rejected') return;
    }
    onSuccess();
  };

  const {
    bowl_types,
    brands,
    colors,
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
        <FormControl component="form" onSubmit={handleSubmit(handleAddDetails)}>
          <FiltersBlock>
            <Status width={200} control={control} />
            <Promotion width={200} control={control} list={promotions} />
            <Brand width={200} control={control} list={brands} />
            <Price width={140} control={control} />
            <Available width={140} control={control} />
            {category === 'hookah' && (
              <>
                <HookahColor width={200} list={colors} control={control} />
                <HookahSize width={200} list={hookah_sizes} control={control} />
              </>
            )}
            {category === 'tobacco' && (
              <>
                <Strength width={200} control={control} />
                <Flavor width={200} list={flavors} control={control} />
                <TobaccoWeight width={200} control={control} />
              </>
            )}
            {category === 'accessories' && (
              <>
                <Type width={200} list={types} control={control} />
                <BowlType
                  width={200}
                  control={control}
                  list={bowl_types}
                  required={false}
                />
              </>
            )}
            {category === 'coal' && (
              <>
                <CoalSize width={200} control={control} />
                <CoalWeight width={200} control={control} />
              </>
            )}
            <Title
              control={control}
              setValue={setValue}
              cat={category}
              formValues={watchedValues}
            />
            <Description control={control} />
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
