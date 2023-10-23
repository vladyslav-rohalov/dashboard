import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: 8,
  marginTop: 8,
  [theme.breakpoints.up('xs')]: {
    height: 160,
  },
  [theme.breakpoints.up('md')]: {
    height: 216,
  },
}));

export const ImageStyled = styled('img')({
  transition: 'transform 500ms ease-in-out',
  objectFit: 'fill',
});

export const swiperStyles = {
  width: '100%',
  height: '100%',
  borderRadius: '4px',
  '--swiper-pagination-color': '#ee9b00',
  '--swiper-pagination-bullet-inactive-color': '#939393',
  '--swiper-pagination-bullet-inactive-opacity': '1',
  '--swiper-pagination-bullet-size': '12px',
  '--swiper-pagination-bullet-horizontal-gap': '8px',
};
