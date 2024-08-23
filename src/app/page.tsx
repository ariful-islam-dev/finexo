import HeroArea from "@/components/HeroArea";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import Slider from "@/components/Slider";
import About from "@/components/About";
import Choose from "@/components/Choose";
import Team from "@/components/Team";
import Customer from "@/components/Customers";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <HeroArea>
        <Navbar />
        <Slider />
      </HeroArea>
      <Service />
      <About/>
      <Choose/>
      <Team/>
      <Customer/>
      <Footer/>
    </>
  );
}
