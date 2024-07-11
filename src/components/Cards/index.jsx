'use client'
import { useState } from 'react';
import { FaStar, FaHeart, FaCheck } from 'react-icons/fa';

const skillsData = [
  {
    name: 'Habilidade 1',
    description: 'Descrição da habilidade 1. Esta é a descrição principal da habilidade.',
    additionalText: 'Texto adicional para a habilidade 1. Mais detalhes podem ser fornecidos aqui.',
    benefits: [
      { icon: <FaStar />, text: 'Benefício 1' },
      { icon: <FaHeart />, text: 'Benefício 2' },
      { icon: <FaCheck />, text: 'Benefício 3' }
    ]
  },
  {
    name: 'Habilidade 2',
    description: 'Descrição da habilidade 2. Esta é a descrição principal da habilidade.',
    additionalText: 'Texto adicional para a habilidade 2. Mais detalhes podem ser fornecidos aqui.',
    benefits: [
      { icon: <FaStar />, text: 'Benefício 1' },
      { icon: <FaHeart />, text: 'Benefício 2' }
    ]
  },
  // Adicione mais habilidades conforme necessário
];

const Skills = () => {
  const [flippedIndex, setFlippedIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setFlippedIndex(index);
  };

  const handleMouseLeave = () => {
    setFlippedIndex(-1);
  };

  return (
    <>
      <span id="about"></span>

      <div className="pt-20">
        <h1 className='text-xl md:text-3xl lg:text-5xl font-semibold text-center'>Como ganhar pontos</h1>
        <hr className='mx-20 border border-yellow-700 mt-4'></hr>
        <div className="px-10">
          <div className="py-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-3 sm:px-10 md:gap-6 md:px-6 xl:gap-10 xl:px-20">
            {skillsData.map((skill, index) => (
              <div
                key={skill.name}
                className={`card group text-dark space-y-3 p-4 rounded-md bg-white duration-300 transition-all border-2 hover:border-green-600 shadow-md relative overflow-hidden ${
                  flippedIndex === index ? 'hover:rotate-y-180' : ''
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="front absolute w-full h-full backface-hidden">
                  <div>{skill.icon}</div>
                  <h1 className="md:text-2xl font-bold">{skill.name}</h1>
                  <p>{skill.description}</p>
                </div>
                <div className="back absolute w-full h-full backface-hidden rotate-y-180">
                  <div className="py-4">
                    <h1 className="md:text-2xl font-bold">{skill.name}</h1>
                    <p>{skill.additionalText}</p>
                    <ul>
                      {skill.benefits &&
                        skill.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-gray-800">
                            {benefit.icon}
                            <span className="ml-2">{benefit.text}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
