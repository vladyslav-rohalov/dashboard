import { useForm } from 'react-hook-form';
import { FiltersBlock } from '../../addNew/addNew.styled';
import BaseFilter from './baseFilter/baseFilter';
import Publish from '../../addNew/commonFileds/publish/publish';
import Images from '../../addNew/commonFileds/image/image';
import Brand from '../../addNew/commonFileds/brand/brand';
import Promotion from '../../addNew/commonFileds/promotion/promotion';
import Status from '../../addNew/commonFileds/status/status';
import HookahColor from '../../addNew/categories/hookah/color';
import HookahSize from '../../addNew/categories/hookah/hookahSize';
import Flavor from '../../addNew/categories/tobacco/flavor';
import Strength from '../../addNew/categories/tobacco/strength';
import TobaccoWeight from '../../addNew/categories/tobacco/weight';
import Type from '../../addNew/categories/accessory/type';
import BowlType from '../../addNew/categories/accessory/bowlType';
import CoalSize from '../../addNew/categories/coal/size';
import CoalWeight from '../../addNew/categories/coal/weight';
import { Form, PriceBlock, SearchButton } from './filters.styled';
import { ButtonBlock, ResetButton } from './filters.styled';
import RemoveIcon from '@mui/icons-material/Remove';
import SortFilter from './sortFilter/sortFilter';

export default function SearchFilters({
  enumValues,
  category,
  page,
  limit,
  handleFetch,
  updateParams,
}) {
  const { brands, promotions, colors, hookah_sizes } = enumValues;
  const { flavors, types, bowl_types } = enumValues;

  const { handleSubmit, control, reset } = useForm();

  const handleSearch = formData => {
    const params = {
      page,
      limit,
    };

    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== '') {
        if (typeof value === 'object') {
          if (key === 'color') {
            const colorParts = value.color.split(',');
            params[key] = colorParts[0].trim().toLowerCase();
          } else {
            params[key] = value[key];
          }
        } else {
          params[key] = value;
        }
      }
    });

    handleFetch(params);
    updateParams(params);
  };

  const handleReset = () => {
    reset();
    const defaultParams = { page: 1, limit: 25 };
    handleFetch(defaultParams);
    updateParams(defaultParams);
  };

  return (
    <>
      <Form component="form" onSubmit={handleSubmit(handleSearch)}>
        <FiltersBlock>
          <BaseFilter control={control} label={'Id'} name={'id'} width={120} />
          <Publish control={control} width={120} />
          <Images control={control} width={120} />
          <PriceBlock>
            <BaseFilter
              control={control}
              label={'Price min'}
              name={'min'}
              width={120}
            />
            <RemoveIcon />
            <BaseFilter
              control={control}
              label={'Price max'}
              name={'max'}
              width={120}
            />
          </PriceBlock>
          <Status width={200} control={control} required={false} />
          <Brand width={200} control={control} list={brands} required={false} />
          <Promotion
            width={200}
            control={control}
            list={promotions}
            required={false}
          />
          {category === 'hookah' && (
            <>
              <HookahColor
                width={200}
                list={colors}
                control={control}
                required={false}
              />
              <HookahSize
                width={200}
                list={hookah_sizes}
                control={control}
                required={false}
              />
            </>
          )}
          {category === 'tobacco' && (
            <>
              <Strength width={200} control={control} />
              <Flavor
                width={200}
                list={flavors}
                control={control}
                required={false}
              />
              <TobaccoWeight width={200} control={control} required={false} />
            </>
          )}
          {category === 'accessories' && (
            <>
              <Type
                width={200}
                list={types}
                control={control}
                required={false}
              />
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
              <CoalSize width={200} control={control} required={false} />
              <CoalWeight width={200} control={control} required={false} />
            </>
          )}
        </FiltersBlock>
        <ButtonBlock>
          <ResetButton variant="contained" type="reset" onClick={handleReset}>
            Reset
          </ResetButton>
          <SearchButton variant="contained" type="submit">
            Search
          </SearchButton>
          <SortFilter control={control} />
        </ButtonBlock>
      </Form>
    </>
  );
}
