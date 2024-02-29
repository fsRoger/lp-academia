// GoogleMap.js
import React from 'react';
import Iframe from 'react-iframe';

const GoogleMap = () => {
  return (
    <Iframe
      url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14629.381190010194!2d-46.92007281392849!3d-23.556038966304108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf012d0125bbef%3A0xf60de14aa62de2d1!2sParque%20Nova%20Jandira%2C%20Jandira%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1706904078781!5m2!1spt-BR!2sbr"
      width="800"
      height="450"
      style={{ border: '1px solid #000', borderRadius: '3rem' }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default GoogleMap;
