import React from 'react';
import heroPicture from '../img/Hero.jpg';

const Hero = () => {
  const titulo = 'Uniformes Empresariales';
  const texto =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, cupiditate iste atque libero harum delectus ab, dolore nisi exercitationem nesciunt natus accusantium officiis provident eligendi!';
  return (
    <div className='Hero'>
      <div className='heroImgDiv'>
        <img className='img-fluid' src={heroPicture} alt='Hero section' />
      </div>
      <div className='heroTextDiv bg-light'>
        <h1>{titulo}</h1>
        <p>{texto}</p>
      </div>
    </div>
  );
};

export default Hero;
