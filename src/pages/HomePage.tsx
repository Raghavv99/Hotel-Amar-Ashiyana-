import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Rooms } from "../components/Rooms";
import { Restaurant } from "../components/Restaurant";
import { Trust } from "../components/Trust";
import { MapLocation } from "../components/MapLocation";
import { FinalCTA } from "../components/FinalCTA";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Rooms />
      <Restaurant />
      <Trust />
      <MapLocation />
      <FinalCTA />
    </>
  );
}
