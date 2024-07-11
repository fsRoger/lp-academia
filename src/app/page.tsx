import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import Cards from "@/components/Cards";
import Depositions from "@/components/Depositions/Depositions";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import CardsBottom from '@/components/Cards-bottom';
import Wp from '@/components/Wp';
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="">

      <Header />
      <Hero/>
      <div className="flex justify-center py-12">
      </div>
      <Cards />
      


      

      <Footer />


    </main >
  );
}
