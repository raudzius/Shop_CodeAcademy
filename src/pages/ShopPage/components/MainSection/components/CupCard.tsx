import React from 'react';
import {
 Box, Button, Grid, Paper, Typography,
} from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper from '../../../../../components/Swiper';

type CupCardProps = Omit<Cup, 'categoryId' | 'materialTypeId' | 'colorId'>;

const CupCard: React.FC<CupCardProps> = ({
 id, title, description, images, price,
}) => (
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Paper elevation={3} sx={{ height: 400, maxWidth: 300 }}>
      <Swiper images={images} />
      <Box sx={{ p: 3 }}>
        <Typography component="h2" variant="h6">
          {title}
        </Typography>
        <Box>
          <Button variant="contained" onClick={() => console.log(id)}>
            Open
          </Button>
          <Button variant="contained" onClick={() => console.log(id)}>
            Add to Cart
          </Button>
        </Box>
        {description}
        <Typography component="p" variant="body1" sx={{ textAlign: 'right' }}>
          {price}
          $
        </Typography>
      </Box>
    </Paper>
  </Grid>
);

export default CupCard;
