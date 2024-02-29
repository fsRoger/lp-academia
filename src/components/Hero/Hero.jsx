import Image from 'next/image';

const Hero = () => {
  return (
    <div className=" grid  grid-cols-2 place-items-center bg-gradient-to-r  from-black via-[rgb(22,26,30)] to-[rgb(21,25,30)] ">
      <div className=" text-center">
        <div className="space-y-3 p-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl xl:text-7xl text-white font-bold">
            Resultados Todos os Dias
          </h1>
          <p className="text-xl md:text-2xl xl:text-5xl text-yellow-600 font-bold">
            Venha treinar na academia que tem conforto e resultados.
          </p>
          <button className="uppercase rounded-lg bg-green-700 hover:bg-yellow-600
             hover:text-white duration-300 py-2 px-6 text-white">
            Escolha sua saúde agora mesmo
          </button>
        </div>
      </div>
      <div className="">
        <div className=" md:h-auto md:w-auto">
          <Image src="/images/website/pernas.jpg"
            width={1920}
            height={1080}
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>


      </div>
    </div>
  );
};

export default Hero;
