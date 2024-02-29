import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io5";

const Wp = () => {
  const numeroWhatsApp = '';

  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}`;

  return (
    <div>
      <a href={linkWhatsApp} target="_blank" rel="noopener noreferrer">
        <button
          className="inline-block rounded-lg font-semibold py-2 px-6
           bg-green-700
           text-white hover:bg-green-600 duration-200 tracking-widest
            uppercase 
            flex justify-center items-center text-center text-sm"
        >
          <IoLogoWhatsapp
            className="text-5xl px-2" />
          Comece a treinar
        </button></a>
    </div>
  );
};

export default Wp;