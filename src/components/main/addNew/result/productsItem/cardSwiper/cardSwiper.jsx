import { Chip } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import FavoriteIcon from '../favoriteIcon/favoriteIcon';
import { chipColor } from '../../../../../../lib/chipColor';
import { Container, swiperStyles, ImageStyled } from './cardSwiper.styled';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const defaultImage = require('../../../../../../images/no-image.png');

export default function CardSwiper({ promotion, images, swiperRef }) {
  const color = chipColor(promotion);

  return (
    <Container>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        effect={'fade'}
        slidesPerView={1}
        ref={swiperRef}
        direction="vertical"
        enabled={false}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        style={swiperStyles}
      >
        {promotion && promotion !== 'none' && (
          <Chip
            label={promotion}
            sx={{
              position: 'absolute',
              top: 4,
              left: 0,
              zIndex: 1,
              bgcolor: color,
              '&.MuiChip-root': {
                span: {
                  color: '#fff',
                },
              },
            }}
          />
        )}
        <FavoriteIcon />
        {images ? (
          images.map(image => {
            return (
              <SwiperSlide key={image}>
                <ImageStyled
                  className="scaleImage"
                  src={image}
                  alt="product"
                  width={'100%'}
                  height={'100%'}
                />
              </SwiperSlide>
            );
          })
        ) : (
          <SwiperSlide key={'image'}>
            <ImageStyled
              className="scaleImage"
              src={defaultImage}
              alt="product"
              width={'100%'}
              height={'100%'}
            />
          </SwiperSlide>
        )}
      </Swiper>
    </Container>
  );
}
