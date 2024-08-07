


import Image from 'next/image';
import { FaStar, FaRegStar } from "react-icons/fa";

const depositionsData = [
  {
    name: "João Dias",
    image: <Image src='/images/website/logo-adv.png' width={100} height={100} alt="Imagem do depoimento" className="w-16 h-16 rounded-full" />,
    link: "#",
    description: "Desde linhas finas e detalhes intrincados até designs audaciosos e vibrantes.",
    rating: 4,
  },
  {
    name: "Carla Reis",

    image: <Image src='/images/website/logo-adv.png' width={100} height={100} alt="Imagem do depoimento" className="w-16 h-16 rounded-full" />,
    link: "#",
    description: "Utilizo técnicas avançadas e materiais de alta qualidade para garantir que cada tatuagem seja durável",
    rating: 5,
  },
  {
    name: "Rute Santos",

    image: <Image src='/images/website/logo-adv.png' width={100} height={100} alt="Imagem do depoimento" className="w-16 h-16 rounded-full" />,
    link: "#",
    description: "Valorizo a colaboração com meus clientes para criar tatuagens que se alinham com suas visões e significados pessoais. ",
    rating: 3,
  },
];
const Points = () => {
  return (
    <>
      <span id="Depositions"></span>

      <div className="bg-white text-white py-14">
        <div className="container">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-2  md:gap-4">
            {depositionsData.map((depositions, index) => (
              <div key={index} className="card group space-y-3 p-4 bg-dark  hover:bg-cyan-700 duration-300 text-white">
                <div className='flex items-center justify-center'>{depositions.image}</div>
                <div className='flex items-center justify-center'>
                  {/* Adicione ícones de estrela com base na propriedade rating */}
                  {[...Array(depositions.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                  {[...Array(5 - depositions.rating)].map((_, i) => (
                    <FaRegStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <h1 className="flex items-center justify-center text-2xl font-bold">{depositions.name}</h1>
                <p className='flex items-center justify-center'>{depositions.description}</p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Points;