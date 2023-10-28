import { InputLabel } from '@mui/material/';
import { FormControl, Select, MenuItem } from '@mui/material';
import { Input } from '../../addNew/addNew.styled';
import { useEnum } from '../../../../hooks/useEnum';
import { useForm, Controller } from 'react-hook-form';
import RemoveIcon from '@mui/icons-material/Remove';
import { Form, PriceBlock } from './filters.styled';
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

export default function SearchFilters({ category }) {
  const { brands, promotions, colors, hookah_sizes } = useEnum();
  const { flavors, types, bowl_types } = useEnum();
  return (
    <>
      <Form>
        <Input
          mt={0}
          width={100}
          label="Id"
          id="id"
          type="text"
          autoComplete="off"
        />
        <PriceBlock>
          <Input
            mt={0}
            width={100}
            label="Price min"
            id="min"
            type="text"
            autoComplete="off"
          />
          <RemoveIcon />
          <Input
            mt={0}
            width={100}
            label="Price max"
            id="max"
            type="text"
            autoComplete="off"
          />
        </PriceBlock>
        <Brand list={brands} required={false} weight={200} />
        <Promotion list={promotions} required={false} weight={120} />
        <Status width={120} />
        <FormControl>
          <InputLabel id="publish-select-label">Publish</InputLabel>
          <Select
            id="publish-select"
            name="publish"
            label="Paublish"
            sx={{ width: 100 }}
          >
            <MenuItem value={'yes'}>Yes</MenuItem>
            <MenuItem value={'no'}>No</MenuItem>
          </Select>
        </FormControl>
        {category === 'hookah' && (
          <>
            <HookahColor list={colors} width={200} />
            <HookahSize list={hookah_sizes} width={200} />
          </>
        )}
        {category === 'tobacco' && (
          <>
            <Flavor list={flavors} width={200} required={false} />
            <TobaccoWeight />
            <Strength />
          </>
        )}
        {category === 'accessories' && (
          <>
            <Type list={types} required={false} width={200} />
            <BowlType list={bowl_types} required={false} width={200} />
          </>
        )}
        {category === 'coal' && (
          <>
            <CoalSize required={false} weight={200} />
            <CoalWeight required={false} weight={200} />
          </>
        )}
      </Form>
    </>
  );
}
