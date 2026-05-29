import { AboutHero } from "./about/AboutHero";
import { OurStory } from "./about/OurStory";
import { OurPhilosophy } from "./about/OurPhilosophy";
import { ExperienceDifference } from "./about/ExperienceDifference";
import { VisualGallery } from "./about/VisualGallery";
import { Trust } from "../components/Trust";
import { MapLocation } from "../components/MapLocation";
import { FinalCTA } from "../components/FinalCTA";

export function AboutPage() {
  return (
    <div className="bg-black">
      <AboutHero />
      <OurStory />
      <OurPhilosophy />
      <ExperienceDifference />
      <VisualGallery />
      <Trust />
      <MapLocation />
      <FinalCTA />
    </div>
  );
}
