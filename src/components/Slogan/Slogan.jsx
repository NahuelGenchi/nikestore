import React from "react";

import { images } from '../../constants';
import "./Slogan.scss";

const Slogan = function (props) {
  console.log(props);
  console.log(props.title);
  return (
    <div className='logoContainer'>
      <img src={images.nike} alt='Nike logo' className='headerLogoMain' />
      <span className='headerSlogan'>JUST DO IT.</span>
    </div>
  );
};

export default Slogan;