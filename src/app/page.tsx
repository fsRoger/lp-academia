import Image from "next/image";
import SubHero from "@/components/SubHero";
import Hero from "@/components/Hero/Hero";
import Cards from "@/components/Cards";
import Depositions from "@/components/Depositions/Depositions";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import CardsBottom from '@/components/Cards-bottom';
import Wp from '@/components/Wp';

export default function Home() {
  return (
    <main className="">

      <Hero />
      <SubHero />
      <div className="flex justify-center py-12">
        <Wp />
      </div>
      <Cards />
      <div className="flex justify-center pb-12">
        <Wp />
      </div>


      <CardsBottom />
      <div className="flex justify-center py-12">
        <Wp />
      </div>

      <Contact />

      <Footer />


    </main >
  );
}
