import { useEnum } from '../../../../hooks/useEnum';
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

export default function SearchFilters({ category, page, limit, handleFetch }) {
  const { brands, promotions, colors, hookah_sizes } = useEnum();
  const { flavors, types, bowl_types } = useEnum();

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
  };

  return (
    <>
      <Form component="form" onSubmit={handleSubmit(handleSearch)}>
        <FiltersBlock>
          <BaseFilter control={control} label={'Id'} name={'id'} width={80} />
          <Publish control={control} width={100} />
          <Images control={control} width={100} />
          <Status width={160} control={control} required={false} />
          <PriceBlock>
            <BaseFilter
              control={control}
              label={'Price min'}
              name={'min'}
              width={100}
            />
            <RemoveIcon />
            <BaseFilter
              control={control}
              label={'Price max'}
              name={'max'}
              width={100}
            />
          </PriceBlock>
          <Brand width={160} control={control} list={brands} required={false} />
          <Promotion
            width={160}
            control={control}
            list={promotions}
            required={false}
          />
          {category === 'hookah' && (
            <>
              <HookahColor
                width={160}
                list={colors}
                control={control}
                required={false}
              />
              <HookahSize
                width={160}
                list={hookah_sizes}
                control={control}
                required={false}
              />
            </>
          )}
          {category === 'tobacco' && (
            <>
              <Strength width={160} control={control} />
              <Flavor
                width={160}
                list={flavors}
                control={control}
                required={false}
              />
              <TobaccoWeight width={160} control={control} required={false} />
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
          <ResetButton variant="contained" type="reset" onClick={() => reset()}>
            Reset
          </ResetButton>
          <SearchButton variant="contained" type="submit">
            Search
          </SearchButton>
        </ButtonBlock>
      </Form>
    </>
  );
}
