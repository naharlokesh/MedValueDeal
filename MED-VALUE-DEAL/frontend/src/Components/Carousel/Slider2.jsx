import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, IconButton } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  top: {
    background: 'linear-gradient(90deg, rgba(230, 249, 243, 1) 73%, rgba(218, 175, 255, 1) 100%)',
    width: '80%',
    height: '60vh',
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    borderRadius: '30px',
    padding: theme.spacing(5),
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    height: '50vh',
    width: '100%',
    margin: 'auto',
    position: 'relative',
    overflow: 'hidden',
  },
  slideContainer: {
    display: 'flex',
    transition: 'transform 0.5s ease',
  },
  slideImg: {
    width: '33.33%', // Adjusted width to display 3 images initially
    boxSizing: 'border-box',
    overflow: 'hidden',
    padding: '0 10px', // Added padding to create space between images
    opacity: 1, // Default to fully visible
  },
  iconButton: {
    position: 'absolute',
    top: '50%',
    zIndex: 1,
    color: '#000',
    background: '#fff',
    borderRadius: '50%',
  },
  leftIcon: {
    left: 10,
    transform: 'translateY(-50%)',
  },
  rightIcon: {
    right: 10,
    transform: 'translateY(-50%)',
  },
}));

const images = [
    "https://cms-contents.pharmeasy.in/carousel_item/1466c422fcd-Sugerfree.png?dim=1440x0",
    "https://cms-contents.pharmeasy.in/carousel_item/3eb4eb6bfbe-App_Himalaya.jpg?dim=1440x0",
    "https://cms-contents.pharmeasy.in/carousel_item/62668bab7a1-AccuChek-min.png?dim=1440x0",
    "https://cms-contents.pharmeasy.in/carousel_item/d0f595be419-Savlonv2.png?dim=1440x0",
    "https://cms-contents.pharmeasy.in/carousel_item/3c344faad99-App_Featured-J.jpg?dim=1440x0",
    "https://cms-contents.pharmeasy.in/carousel_item/d3481485e73-App_stayfree.jpg?dim=1440x0",
    "https://cms-contents.pharmeasy.in/carousel_item/f2d61678901-Ensure.png?dim=1440x0",
  ];

const Slider2 = () => {
  const classes = useStyles();
  const [currentImageIdx, setCurrentImagIdx] = useState(0);

  const prevSlide = () => {
    const resetToVeryBack = currentImageIdx === 0;
    const index = resetToVeryBack ? images.length - 1 : currentImageIdx - 1;
    setCurrentImagIdx(index);
  };

  const nextSlide = () => {
    const resetIndex = currentImageIdx === images.length - 1;
    const index = resetIndex ? 0 : currentImageIdx + 1;
    setCurrentImagIdx(index);
  };

  const renderImages = () => {
    const activeImageSourcesFromState = images.slice(currentImageIdx, currentImageIdx + 3);
    const imageSourcesToDisplay =
      activeImageSourcesFromState.length < 3
        ? [...activeImageSourcesFromState, ...images.slice(0, 3 - activeImageSourcesFromState.length)]
        : activeImageSourcesFromState;
    return imageSourcesToDisplay.map((image, index) => (
      <div key={index} className={classes.slideImg}>
        <img src={image} alt={`slide-${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    ));
  };

  return (
    <div>
      <div className={classes.top}>
        <Container className={classes.container}>
          <IconButton
            className={`${classes.iconButton} ${classes.leftIcon}`}
            onClick={prevSlide}
            disabled={currentImageIdx === 0}
          >
            <ArrowBackIos />
          </IconButton>
          <IconButton
            className={`${classes.iconButton} ${classes.rightIcon}`}
            onClick={nextSlide}
            disabled={currentImageIdx >= images.length - 3}
          >
            <ArrowForwardIos />
          </IconButton>
          <div className={classes.slideContainer} style={{ transform: `translateX(-${currentImageIdx * (100 / 3)}%)` }}>
            {renderImages()}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Slider2;