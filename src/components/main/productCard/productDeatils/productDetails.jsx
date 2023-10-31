import { useForm } from 'react-hook-form';
import BaseFilter from '../../products/filters/baseFilter/baseFilter';
import Status from '../../addNew/commonFileds/status/status';
import Promotion from '../../addNew/commonFileds/promotion/promotion';
import Brand from '../../addNew/commonFileds/brand/brand';
import Price from '../../addNew/commonFileds/price/price';
import Available from '../../addNew/commonFileds/available/available';
import Description from '../../addNew/commonFileds/description/description';
import Publish from '../../addNew/commonFileds/publish/publish';
import HookahColor from '../../addNew/categories/hookah/color';
import HookahSize from '../../addNew/categories/hookah/hookahSize';
import Type from '../../addNew/categories/accessory/type';
import BowlType from '../../addNew/categories/accessory/bowlType';
import CoalSize from '../../addNew/categories/coal/size';
import CoalWeight from '../../addNew/categories/coal/weight';
import TobaccoWeight from '../../addNew/categories/tobacco/weight';
import Strength from '../../addNew/categories/tobacco/strength';
import Flavor from '../../addNew/categories/tobacco/flavor';
import { Form, Text, DateBlock, SaveButton } from './productDetails.styled';
import SaveIcon from '@mui/icons-material/Save';

export default function ProductDetails({
  product,
  enumValues,
  category,
  handleUpdateDetails,
}) {
  const { brands, promotions, colors, hookah_sizes } = enumValues;
  const { flavors, types, bowl_types } = enumValues;
  const { id, status, promotion, brand, price, available } = product;
  const { title, description, publish, createdAt, updatedAt } = product;
  const { hookahs, tobacco, coals, accessories } = product;

  const { handleSubmit, control } = useForm();

  const formatDate = date => {
    const dateObj = new Date(date);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    const hour = dateObj.getHours();
    const minute = dateObj.getMinutes();

    const formattedDate = `${day}-${month}-${year} ${hour}:${minute}`;
    return formattedDate;
  };

  const handleDetails = formData => {
    const data = {
      promotion: formData.promotion,
      brand: formData.brand,
      status: formData.status,
      price: +formData.price,
      description: formData.description,
      title: formData.title,
      available: +formData.available,
    };
    if (category === 'hookah') {
      data.color = formData.color.split(',')[0];
      data.hookah_size = formData.hookah_size;
    }
    if (category === 'tobacco') {
      data.flavor = formData.flavor;
      data.tobacco_weight = +formData.tobacco_weight;
      data.strength = formData.strength === 'none' ? null : formData.strength;
    }
    if (category === 'coal') {
      data.coal_size = +formData.size;
      data.coal_weight = +formData.coal_weight;
    }
    if (category === 'accessories') {
      data.type = formData.type.type || formData.type;
      data.bowl_type = formData.bowl_type;
    }
    handleUpdateDetails(data);
  };

  return (
    <>
      <DateBlock>
        <Text>Created: {formatDate(createdAt)}</Text>
        <Text>Updated: {formatDate(updatedAt)}</Text>
      </DateBlock>
      <Form component="form" onSubmit={handleSubmit(handleDetails)}>
        <BaseFilter
          control={control}
          name="id"
          label="Id"
          value={id}
          width={200}
          disabled={true}
        />
        <Status control={control} value={status} width={200} />
        <Promotion
          control={control}
          list={promotions}
          value={promotion.promotion}
          width={200}
        />
        <Brand
          control={control}
          list={brands}
          value={brand.brand}
          width={200}
        />
        <Price control={control} value={price} width={200} />
        <Available control={control} value={available} width={200} />
        <Publish control={control} value={publish} width={200} />
        {hookahs && (
          <>
            <HookahColor
              control={control}
              list={colors}
              value={hookahs.color}
              width={200}
            />
            <HookahSize
              control={control}
              list={hookah_sizes}
              value={hookahs.hookah_size.hookah_size}
              width={200}
            />
          </>
        )}
        {tobacco && (
          <>
            <Strength control={control} value={tobacco.strength} />
            <Flavor
              list={flavors}
              control={control}
              value={tobacco.flavor.flavor}
              width={200}
            />
            <TobaccoWeight
              control={control}
              value={tobacco.tobacco_weight}
              width={200}
            />
          </>
        )}
        {accessories && (
          <>
            <Type
              list={types}
              control={control}
              value={accessories.type.type}
              width={200}
            />
            {accessories.bowl_type && (
              <BowlType
                control={control}
                list={bowl_types}
                value={accessories.bowl_type.bowl_type}
                width={200}
              />
            )}
          </>
        )}
        {coals && (
          <>
            <CoalSize control={control} value={coals.coal_size} width={200} />
            <CoalWeight
              control={control}
              value={coals.coal_weight}
              width={200}
            />
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
        <SaveButton type="submit" variant="contained" endIcon={<SaveIcon />}>
          Save
        </SaveButton>
      </Form>
    </>
  );
}
