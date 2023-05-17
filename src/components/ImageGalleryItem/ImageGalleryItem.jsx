import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css'
 
export const ImageGalleryItem = ({ id, img, imgLarge }) => {
  return (
    <li className={css.imageGalleryItem} key={id}>
      <img className={css.imageGalleryItem__image} src={img} alt='' useMap={imgLarge}/>
    </li>
  );
};

ImageGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  imgLarge: PropTypes.string.isRequired,
};