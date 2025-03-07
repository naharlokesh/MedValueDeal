import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';



const images = [
  '/images/slider1/s1.jpg',
  '/images/slider1/s2.jpg',
  '/images/slider1/s3.jpg',
  '/images/slider1/s4.jpg',
  '/images/slider1/s5.jpg',
  '/images/slider1/s6.jpg',
  '/images/slider1/s7.jpg',
];

const useStyles = makeStyles((theme) => ({
  container: {
    height: 321,
    width: '90%',
    background: 'linear-gradient(90deg, rgba(233, 255, 248, 1) 40%, rgba(175, 255, 251, 1) 99%)',
    margin: 'auto',
    marginTop : 50,
    marginBottom: 50,
    overflow: 'hidden',
    borderRadius: '1%',
  },
  slideContainer: {
    display: 'flex',
    width: `calc(300px * ${images.length})`,
    animation: '$scroll 20s linear infinite',
  },
  slideImg: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(4.5),
  },
  '@keyframes scroll': {
    '0%': {
      transform: 'translateX(0)',
    },
    '100%': {
      transform: `translateX(-${250 * (images.length / 2)}px)`,
    },
  },
}));

const Slider1 = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container className={classes.slideContainer}>
        {images.map((image, index) => (
          <Grid item key={index} className={classes.slideImg}>
            <img src={image} alt={`slide-${index}`} style={{ height: 200, width: 200, objectFit: 'cover' }} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Slider1;