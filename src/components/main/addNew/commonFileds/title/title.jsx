import { Controller } from 'react-hook-form';
import { FormControl, IconButton, InputAdornment } from '@mui/material';
import { Input } from '../../addNew.styled';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

export default function Title({
  width = '100%',
  control,
  cat,
  formValues,
  setValue,
}) {
  const {
    color = null,
    brand = null,
    hookah_size = null,
    type = null,
    bowl_type = null,
    flavor = null,
    size = '',
    tobacco_weight = '',
    coal_weight = '',
  } = formValues;

  const getColor = color => {
    if (color) {
      const colorArr = color.color.split(',');
      return colorArr[0];
    }
    return '';
  };
  const tColor = color === null ? '' : `, ${getColor(color)} color`;
  const tBrand = brand === null ? '' : brand.brand;
  const tHookahSize =
    hookah_size === null ? '' : `, ${hookah_size.hookah_size}`;
  const tType = type === null ? '' : `Hookah ${type.type} `;
  const tBowlType = bowl_type === null ? '' : `, ${bowl_type.bowl_type} type `;
  const tFlavor = flavor === null ? '' : `, ${flavor.flavor}`;
  const tTobaccoWeight = tobacco_weight === '' ? '' : `, ${tobacco_weight}g`;
  const tCoalSize = size === '' ? '' : `, ${size}mm`;
  const tCoalWeight = coal_weight === '' ? '' : `, ${coal_weight}g`;

  const HookahTitle = () => {
    return cat + ' ' + tBrand + tHookahSize + tColor;
  };

  const TobaccoTitle = () => {
    return cat + ' ' + tBrand + tFlavor + tTobaccoWeight;
  };

  const CoalTitle = () => {
    return cat + ' ' + tBrand + tCoalSize + tCoalWeight;
  };

  const AccessoriesTitle = () => {
    return tType + tBrand + tBowlType;
  };

  const CheckCat = () => {
    switch (cat) {
      case 'hookah': {
        return HookahTitle();
      }
      case 'accessories': {
        return AccessoriesTitle();
      }
      case 'tobacco': {
        return TobaccoTitle();
      }
      case 'coal': {
        return CoalTitle();
      }
      default:
        return TobaccoTitle();
    }
  };

  const handleAutogenerate = () => {
    const autoTitle = CheckCat();
    const generatedTitle = autoTitle.toUpperCase();
    setValue('title', generatedTitle);
  };

  return (
    <Controller
      control={control}
      name="title"
      defaultValue={''}
      render={({ field: { onChange, value } }) => {
        return (
          <FormControl sx={{ width: width }}>
            <Input
              mt={0}
              width={width}
              required
              label="title"
              id="title"
              type="text"
              autoComplete="off"
              value={value}
              onChange={e => onChange(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton onClick={handleAutogenerate}>
                      <NoteAddIcon
                        sx={{ color: 'primary.light', fontSize: '1.5rem' }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        );
      }}
    />
  );
}
