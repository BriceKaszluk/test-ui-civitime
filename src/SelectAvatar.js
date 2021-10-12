import React from 'react';
import man from './assets/man.svg';
import woman from './assets/woman.svg';

const SelectAvatar = () => {

  return (
    <div className="flex_around max_width avatar_wrap">
      <img src={man} alt="man avatar"></img>
      <img src={woman} alt="woman avatar"></img>
    </div>
  )
}

export default SelectAvatar;
