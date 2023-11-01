import { SpeedDial, IconCart, IconCartOpen } from './speedDialCart.styled';
import { IconCartRemove } from './speedDialCart.styled';
import SpeedDialAction from '@mui/material/SpeedDialAction';

export default function SpeedDialCart() {
  return (
    <SpeedDial ariaLabel="SpeedDial" icon={<IconCart />}>
      <SpeedDialAction icon={<IconCartRemove />} tooltipTitle="delete" />
      <SpeedDialAction icon={<IconCartOpen />} tooltipTitle="cart" />
    </SpeedDial>
  );
}
