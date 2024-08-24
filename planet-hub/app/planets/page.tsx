import { PlanetCard } from "@/components/PlanetCard";
import PlanetPhoto from "@/public/planet.jpg";

export default function Home() {

  return (
    <div>
        <h1 className="text-textTitle text-5xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Planets</h1>
        <h2 className="text-xl text-muted-foreground my-5">Explore the available planets in our platform!</h2>
        <div className="flex flex-wrap justify-around">
          <PlanetCard planetName="Planeta Marte" planetPhoto={PlanetPhoto}></PlanetCard>
          <PlanetCard planetName="Planeta Marte" planetPhoto={PlanetPhoto}></PlanetCard>
          <PlanetCard planetName="Planeta Marte" planetPhoto={PlanetPhoto}></PlanetCard>
          <PlanetCard planetName="Planeta Marte" planetPhoto={PlanetPhoto}></PlanetCard>
          <PlanetCard planetName="Planeta Marte" planetPhoto={PlanetPhoto}></PlanetCard>
          <PlanetCard planetName="Planeta Marte" planetPhoto={PlanetPhoto}></PlanetCard>
        </div>
    </div>
  );
}
