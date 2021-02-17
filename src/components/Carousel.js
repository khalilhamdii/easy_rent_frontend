import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../assets/css/carousel.css';
import CarouselCard from './CarouselCard';

const LeftArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={` arrow ${className}`} style={style} />
  );
};

const RightArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`} style={style} />
  );
};

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };
  return (
    <Slider style={{ width: '90%' }} {...settings}>
      <CarouselCard />
      <CarouselCard />
      <CarouselCard />
      <CarouselCard />
      <CarouselCard />
      <CarouselCard />
    </Slider>
  );
};

export default Carousel;
