import React from 'react';
import color88C10F from './assets/color-88C10F.svg';
import colorB2C7C7 from './assets/color-B2C7C7.svg';
import colorFF1414 from './assets/color-FF1414.svg';
import colorStriped from './assets/color-striped.svg';
import tShirt from './assets/t-shirt.svg';

const SelectShirt = () => {

  return (
    <div className="flex_around">
      <img className="icon_margin" src={tShirt} alt="man avatar"></img>
      <img src={colorB2C7C7} alt="shirt color"></img>
      <img src={color88C10F} alt="shirt color"></img>
      <img src={colorFF1414} alt="shirt color"></img>
      <img src={colorStriped} alt="shirt color"></img>
    </div>
  )
}

export default SelectShirt;