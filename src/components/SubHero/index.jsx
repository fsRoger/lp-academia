import Image from 'next/image'
import React from 'react'

const SubHero = () => {
  return (
    <>
      <div >
        <h1 className='py-10 text-center text-xl md:text-3xl xl:text-5xl font-semibold text-dark'>Nosso espaço</h1>
        <div className='flex items-center justify-center'>
          <div className='w-[600px] sm:w-[700px] md:w-[800px] lg:w-[1000px] xl:w-[1600px] h-[400px] xl:h-[600px]  bg-cover bg-center  border rounded-md' style={{ backgroundImage: "url('/images/website/espaco2.jpg')" }}>

          </div>
        </div>
      </div>
    </>

  )
}

export default SubHero