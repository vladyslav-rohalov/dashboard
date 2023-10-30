import { useForm } from 'react-hook-form';
import { FormControl, Box, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BaseFilter from '../products/filters/baseFilter/baseFilter';
import Status from '../addNew/commonFileds/status/status';
import Promotion from '../addNew/commonFileds/promotion/promotion';
import Brand from '../addNew/commonFileds/brand/brand';
import Price from '../addNew/commonFileds/price/price';
import Available from '../addNew/commonFileds/available/available';
import Description from '../addNew/commonFileds/description/description';
import Publish from '../addNew/commonFileds/publish/publish';
import HookahColor from '../addNew/categories/hookah/color';
import HookahSize from '../addNew/categories/hookah/hookahSize';
import Type from '../addNew/categories/accessory/type';
import BowlType from '../addNew/categories/accessory/bowlType';
import CoalSize from '../addNew/categories/coal/size';
import CoalWeight from '../addNew/categories/coal/weight';
import TobaccoWeight from '../addNew/categories/tobacco/weight';
import Strength from '../addNew/categories/tobacco/strength';
import Flavor from '../addNew/categories/tobacco/flavor';

export default function ProductCard({ product, handleBack, enumValues }) {
  const { brands, promotions, colors, hookah_sizes } = enumValues;
  const { flavors, types, bowl_types } = enumValues;

  const { id, status, promotion, brand, price, available, images } = product;
  const { title, description, publish, createdAt, updatedAt } = product;
  const { hookahs, tobacco, coals, accessories } = product;

  const { handleSubmit, control, watch, setValue } = useForm();
  const watchedValues = watch();
  return (
    <Box>
      <IconButton onClick={handleBack}>
        <ArrowBackIcon />
      </IconButton>
      <FormControl
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 2,
          width: '100%',
        }}
      >
        <BaseFilter control={control} name="id" label="Id" value={id} />
        <Status control={control} value={status} width={160} />
        <Promotion
          control={control}
          list={promotions}
          value={promotion.promotion}
        />
        <Brand control={control} list={brands} value={brand.brand} />
        <Price control={control} value={price} />
        <Available control={control} value={available} />
        <Publish control={control} value={publish} />
        {hookahs && (
          <>
            {/* <HookahColor control={control} list={colors} value={hookahs}/> */}
            <HookahSize />
          </>
        )}
        <BaseFilter
          control={control}
          name="title"
          label="Title"
          value={title}
          width={'100%'}
        />
        <Description control={control} value={description} />
      </FormControl>
    </Box>
  );
}
