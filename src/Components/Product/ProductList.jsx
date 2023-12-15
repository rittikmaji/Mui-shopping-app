import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '₹-199999',
    image: 'https://tse2.mm.bing.net/th/id/OIP.1cZ-rXcl7J1Ok5g07CeT0QHaHa?rs=1&pid=ImgDetMain',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '₹-29.99',
    image: 'https://tse1.mm.bing.net/th/id/OIP.DuVDSuaaqP7BWC2YDuJC3wAAAA?rs=1&pid=ImgDetMain',
  },{
    id: 3,
    name: 'Product 3',
    price: '₹-29.99',
    image: 'https://2.bp.blogspot.com/-15MBNldg8-s/W_PpNUhr5yI/AAAAAAAABC0/mCQuNkqsEeYqbN2X_KBlfLkUitjeAk6jACLcBGAs/s1600/1.jpg',
  },
  {
    id: 4,
    name: 'Product 4',
    price: '₹-29.99',
    image: 'https://i5.walmartimages.com/asr/7189cc39-aa5d-416d-9cb6-8d4a3de7ad13.d13ec2206940dea45b57a7939a80f16c.jpeg',
  },
  {
    id: 5,
    name: 'Product 5',
    price: '₹-29.99',
    image: 'https://i5.walmartimages.com/asr/c94a4c81-bb55-497c-b853-3f8427c6ef31.8910f1d1f06d83f7aebb607cadb4feea.jpeg',
  },
  {
    id: 6,
    name: 'Product 6',
    price: '₹-29.99',
    image: 'https://tse3.mm.bing.net/th/id/OIP.liXWbOZtrpocsJUvoCXXLAHaLH?rs=1&pid=ImgDetMain',
  },
  {
    id: 7,
    name: 'Product 7',
    price: '₹-29.99',
    image: 'https://tse1.mm.bing.net/th/id/OIP.HCjmlJb8Bktq1mcNVLFpxQHaEx?rs=1&pid=ImgDetMain',
  },
  {
    id: 8,
    name: 'Product 8',
    price: '₹-29.99',
    image: 'https://tse4.mm.bing.net/th/id/OIP.A3lkv38PNoiBGSROIx9zRwAAAA?rs=1&pid=ImgDetMain',
  },
  {
    id: 9,
    name: 'Product 9',
    price: '₹-29.99',
    image: 'https://tse4.mm.bing.net/th/id/OIP.A3lkv38PNoiBGSROIx9zRwAAAA?rs=1&pid=ImgDetMain',
  },

];

const ProductList = () => {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardMedia component="img" height="140" image={product.image} alt={product.name} />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {product.price}
              </Typography>
            </CardContent>
            <Button variant="contained" color="primary">
              Add to Cart
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
