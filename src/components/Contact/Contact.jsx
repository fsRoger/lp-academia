import Link from 'next/link';
import Wp from '../Wp';

const Contact = () => {
  return (
    <>
      <span id="contact"></span>

      <div className="min-h-screen w-full flex justify-center  items-center 
      bg-opacity-80"
        style={{
          backgroundImage:
            " url('/images/website/espaco.jpg')",
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9,
          width: "100%",
          backgroundSize: 'cover',
        }}
      >
        <div className="container bg-opacity-65  bg-gray-800 py-20 border rounded-md shadow-lg">
          <div className="col-span-2 space-y-3 ">
            <h1 className="text-5xl font-bold text-white">
              Precisando  de<p className="text-yellow-600 ">
                Motivação</p>
              para o seu treino?
            </h1>
            <p className="text-gray-400">
              {" "}
            </p>
          </div>
          <div className="grid place-items-center pt-12">
            <Wp />
          </div>
        </div>
      </div >

    </>
  );
};

export default Contact;
