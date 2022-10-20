import React from 'react';
import {
 Box, Grid, Paper, styled,
} from '@mui/material';
import { Swiper as SwiperJS, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper';
import Img from '../../../../../components/Img';

type CupCardProps = Omit<Cup, 'categoryId' | 'materialTypeId' | 'colorId'>;

const Swiper = styled(SwiperJS)({
  height: 250,
});

const CupCard: React.FC<CupCardProps> = ({
 id, title, description, images, price,
}) => (
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Paper elevation={3} sx={{ width: 400 }}>
      <Swiper pagination={{ dynamicBullets: true }} navigation modules={[Pagination, Navigation]}>
        {images.map((imgSrc) => (
          <SwiperSlide key={imgSrc}>
            <Img src={imgSrc} sx={{ height: '100%', width: '100%' }} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Box sx={{ p: 3 }}>
        {id}
        {title}
        {description}
        {price}
      </Box>
    </Paper>
  </Grid>
);

export default CupCard;
