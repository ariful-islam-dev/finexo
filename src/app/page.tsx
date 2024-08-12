import HeroArea from "@/components/HeroArea";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import Slider from "@/components/Slider";


export default function Home() {
  return (
    <>
      <HeroArea>
        <Navbar />
        <Slider />
      </HeroArea>
      <Service />
    </>
  );
}
