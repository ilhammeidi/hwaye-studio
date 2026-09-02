import React, { useState, useEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Hidden from '@mui/material/Hidden';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import games from '~/public/api/games';
import useStyles from './slider-style';

function BannerSlider() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const images = games.map(game => game.cover);
  const { t } = useTranslation('common');
  const slider = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [curSlide, setCurSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
  };

  const handleAfterChange = currentSlide => {
    setCurSlide(currentSlide);
  };

  const gotoSlide = slide => {
    slider.current.slickGoTo(slide);
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={classes.bannerWrap}>
      {loaded && (
        <div className={classes.carousel}>
          <Carousel ref={slider} {...settings}>
            {images.map((item, index) => (
              <div key={index.toString()} className={classes.slide}>
                <div className={classes.inner}>
                  <a href={games[index].steamLink} target="_blank" rel="noopener noreferrer">
                    <img src={item} alt="game banner" />
                  </a>
                </div>
              </div>
            ))}
          </Carousel>
          <IconButton
            className={cx(classes.nav, classes.prev)}
            onClick={() => slider.current.slickPrev()}
            size="large"
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            className={cx(classes.nav, classes.next)}
            onClick={() => slider.current.slickNext()}
            size="large"
          >
            <ArrowForwardIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
}

export default BannerSlider;
