import { FaCameraRetro } from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi';
import { SlNote } from 'react-icons/sl';
import { GiInjustice } from "react-icons/gi";
import Image from 'next/image';

const skillsData = [
  {
    id: 1,
    name: "Perda de peso",
    urlImage: "/images/website/fita.jpg",
    description: "Exercícios funcionais focados na queima de gordura e perda de peso",
  },
  {
    id: 2,
    name: "Ganho de musculos",
    urlImage: "/images/website/biceps.png",
    description: "Exercícios para grupos específicos focados no aumento e fortificação muscular",
  },
  {
    id: 3,
    name: "Aulas de lutas",
    urlImage: "/images/website/box.jpg",
    description: "Aulas de box focadas na técnica para alto defesa",
  },
  {
    id: 4,
    name: "Aulas de Yoga",
    urlImage: "/images/website/alonga.jpg",
    description: "Aulas de Yoga focadas em flexibilidade, e equilíbrio de corpo e mente",
  },
  {
    id: 5,
    name: "Treino de pernas",
    urlImage: "/images/website/agaxa.jpg",
    description: "Exercícios diversos para membros inferiores",
  },
  {
    id: 6,
    name: "Manter a forma",
    urlImage: "/images/website/man.jpg",
    description: "Foco em manter a forma, manter o peso e definir os músculos",
  },
];

const CardsBottom = () => {
  return (
    <>
      <span id="about"></span>
      <div className='py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 lg:px-10 xl:px-20
       lg:gap-10 '>
        {skillsData.map((skill) => (
          <div key={skill.id} className='rounded-lg overflow-hidden bg-white border-2
           border-gray-800 hover:border-yellow-600 opacity-80 hover:opacity-100 
           transition-all group'>
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                layout="fill"
                objectFit="cover"
                src={skill.urlImage}
                alt="Thumbnail do projeto"
                className='group-hover:scale-110 duration-500 transition-all'
              />
            </div>
            <div className='flex-1 flex flex-col p-8'>
              <span className='mt-2 text-gray-800 line-clamp-4'>
                {skill.name}
              </span>
              <span className='text-gray-800 text-sm font-medium block mt-[30px] truncate
               group-hover:text-yellow-600'>
                {skill.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardsBottom;
