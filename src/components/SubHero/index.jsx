import Image from 'next/image'
import React from 'react'

const SubHero = () => {
  return (
    <>
      <div className='flex '>
        <p className='py-10 text-justify text-md font-semibold text-dark'>
          Somos uma empresa criada com o propósito de transformar a rotina de companhias e colaboradores
           com benefícios flexíveis e práticos, que otimizem suas vendas e transformem o ambiente de 
           trabalho para algo positivo e motivador!</p>
        <div >
          <div >
            <img src='./images/website/agaxa.jpg'/>
          </div>
        </div>
      </div>
    </>

  )
}

export default SubHero