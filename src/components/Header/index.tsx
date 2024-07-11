// components/Header.js

import { FaHome, FaMoneyBillAlt } from "react-icons/fa";
import { ImHammer2 } from "react-icons/im";
import { IoChatbubbleOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="bg-gray-100 p-10 flex items-center justify-end sticky top-0 z-10 shadow-md">
      <div className="flex items-center gap-4 px-[10rem]">
        <img src="/logo.png" alt="Logo" className="w-16 h-auto  mr-[20rem]" />
        <div className="gap-4 flex">
          <button className="flex rounded-md text-white bg-[#07afb8] hover:bg-[#84dadf] duration-300 py-2 px-6 text-blue transition-all">
          <FaHome />
          Entrar
          </button>
          <button className="flex rounded-md text-white bg-[#07afb8] hover:bg-[#84dadf] duration-300 py-2 px-6 text-blue transition-all">
          <FaMoneyBillAlt />
          Participe
          </button>
          <button className="flex rounded-md text-white bg-[#07afb8] hover:bg-[#84dadf] duration-300 py-2 px-6 text-blue transition-all">
          <ImHammer2 className="color-white"/>

            Regulamento
          </button>
          <button className=" flex rounded-md text-white bg-[#07afb8] hover:bg-[#84dadf] duration-300 py-2 px-6 text-blue transition-all">
            
            <IoChatbubbleOutline  /><span>Contato</span>

          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
