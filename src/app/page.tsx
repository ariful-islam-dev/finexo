import HeroArea from "@/components/HeroArea";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import Slider from "@/components/Slider";
import About from "@/components/About";
import Choose from "@/components/Choose";
import Team from "@/components/Team";


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
    </>
  );
}
