import React from 'react';
import color533724 from './assets/color-533724.svg';
import colorE0A39A from './assets/color-E0A39A.svg';
import colorFCCC84 from './assets/color-FCCC84.svg';
import colorFCD7B8 from './assets/color-FCD7B8.svg';
import skin from './assets/skin.svg';

const SelectSkin = () => {

  return (
    <div className="flex_around">
      <img className="icon_margin" src={skin} alt="man avatar"></img>
      <img src={colorFCD7B8} alt="skin color"></img>
      <img src={colorE0A39A} alt="skin color"></img>
      <img src={colorFCCC84} alt="skin color"></img>
      <img src={color533724} alt="skin color"></img>
    </div>
  )
}

export default SelectSkin;