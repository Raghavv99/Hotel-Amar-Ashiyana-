import { RoomsHero } from "./rooms/RoomsHero";
import { RoomsShowcase } from "./rooms/RoomsShowcase";
import { SpecialOffers } from "./rooms/SpecialOffers";
import { WhyBookWithUs } from "./rooms/WhyBookWithUs";
import { GuestReviews } from "./rooms/GuestReviews";
import { FinalCTA } from "../components/FinalCTA";

export function RoomsPage() {
  return (
    <div className="bg-black">
      <RoomsHero />
      <RoomsShowcase />
      <SpecialOffers />
      <WhyBookWithUs />
      <GuestReviews />
      <FinalCTA />
    </div>
  );
}
