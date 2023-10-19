import { FormControl, IconButton, InputAdornment } from '@mui/material';
import { Input } from '../../addNew.styled';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

export default function Title({
  value,
  onChange,
  cat,
  brand,
  color,
  hookahSize,
  type,
  bowlType,
}) {
  const getColor = () => {
    if (color) {
      const colorArr = color.color.split(',');
      return colorArr[0];
    }
    return '';
  };

  const tColor = color ? `, ${getColor()} color` : '';
  const tBrand = brand === null ? '' : brand.brand;
  const tHookahSize = hookahSize === null ? '' : `, ${hookahSize.size}`;
  const tType = type ? `Hookah ${type.type} ` : '';
  const tBowlType = bowlType ? `, ${bowlType.bowlType} type ` : '';

  const HookahTitle = () => {
    return cat + ' ' + tBrand + tHookahSize + tColor;
  };

  const AccessoriesTitle = () => {
    return tType + tBrand + tBowlType;
  };

  const TobaccoTitle = () => {};

  const CoalTitle = () => {};

  const CheckCat = () => {
    switch (cat) {
      case 'hookah': {
        return HookahTitle();
      }
      case 'accessory': {
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
    console.log(autoTitle);
    onChange(autoTitle.toUpperCase());
  };

  return (
    <FormControl sx={{ width: '100%' }}>
      <Input
        // err={errors?.email}
        mt={0}
        width={'100%'}
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

      {/* {errors?.price && (
                <OnError
                  text={
                    errors?.email?.message
                      ? errors.email.message
                      : 'Invalid email or password'
                  }
                />
              )} */}
    </FormControl>
  );
}
