import { GrYoga } from "react-icons/gr";
import { GiMuscleUp } from "react-icons/gi";
import { GiMuscleFat } from "react-icons/gi";
import { GiMuscularTorso } from "react-icons/gi";

import { GiBoxingGlove } from "react-icons/gi";
import { HiCheck } from "react-icons/hi2";


const skillsData = [
  {
    name: "Plano Black",
    icon: (
      <GiMuscleFat className="text-5xl text-green-700" />),
    id: 1,
    description: "A PARTIR DE R$ 9, 90* no 1º mês, depois R$ 139, 90/mês 12 meses de fidelidade",
    benefits: [
      { icon: <HiCheck />, text: "Área de musculação e aeróbicos" },
      { icon: <HiCheck />, text: "Área de musculação e aeróbicos" },
      { icon: <HiCheck />, text: "Área de musculação e aeróbicos" },
    ],
  },
  {
    name: "Plano Fit",
    icon: (
      <GiMuscleUp className="text-5xl text-green-700" />),
    id: 2,
    description: "A PARTIR DE R$ 9, 90* no 1º mês, depois R$ 139, 90/mês 12 meses de fidelidade",
    benefits: [
      { icon: <HiCheck />, text: "Área de musculação e aeróbicos" },
      { icon: <HiCheck />, text: "Área de musculação e aeróbicos" },
      { icon: <HiCheck />, text: "Área de musculação e aeróbicos" },
    ],
  },
  {
    name: "Plano Smart",
    icon: (
      <GiMuscularTorso className="text-5xl text-green-700" />),
    id: 3,
    description: "A PARTIR DE R$ 9, 90* no 1º mês, depois R$ 139, 90/mês 12 meses de fidelidade",
    benefits: [
      { icon: <HiCheck />, text: "Área de musculação e aeróbicos" },
      { icon: <HiCheck />, text: "Área de musculação e aeróbicos" },
      { icon: <HiCheck />, text: "Área de musculação e aeróbicos" },
    ],
  },
  {
    name: "Plano box",
    icon: (
      <GiBoxingGlove className="text-5xl text-green-700" />),
    id: 4,
    description: "(<p>A PARTIR DE R$ 9, 90*(</p>) no 1º mês, depois R$ 139, 90/mês 12 meses de fidelidade",
    benefits: [
      { icon: <HiCheck />, text: "Área de musculação e aeróbicos" },],
  },
  {
    name: "Plano Yoga",
    icon: (
      <GrYoga className="text-5xl text-green-600" />),
    id: 5,
    description: (
      "A PARTIR DE R$ 9,90* no 1º mês, depois R$ 139,90/mês 12 meses de fidelidade"

    ),
    benefits: [
      { icon: <HiCheck />, text: "Área de musculação e aeróbicos" },],
  },
  {
    name: "Plano Fit",
    icon: (
      <GiMuscleUp className="text-5xl text-green-600" />),
    id: 6,
    description: "A PARTIR DE R$ 9, 90* no 1º mês, depois R$ 139, 90/mês 12 meses de fidelidade",
    benefits: [
      { icon: <HiCheck />, text: "Área de musculação e aeróbicos" },],
  },
];
const Skills = () => {
  return (
    <>
      <span id="about"></span>

      <div className="pt-20">
        <h1 className='text-xl md:text-3xl lg:text-5xl font-semibold text-center'>Temos o plano ideal para você!</h1>
        <hr className='mx-20  border border-yellow-700 mt-4'></hr>
        <div className="px-10">
          <div className="py-20 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-3
           sm:px-10 md:gap-6 md:px-6  xl:gap-10 xl:px-20">
            {skillsData.map((skill) => (
              <div key={skill.name} className=" card group text-dark space-y-3 p-4
               rounded-md bg-white  duration-300 transition-all  border-2 hover:border-green-600
                  shadow-md">
                <div>{skill.icon}</div>
                <h1 className="md:text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <ul>
                  {skill.benefits && skill.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-800">
                      {benefit.icon}
                      <span className="ml-2 ">{benefit.text}</span>
                    </li>
                  ))}

                </ul>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
