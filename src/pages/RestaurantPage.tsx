import { RestaurantHero } from "./restaurant/RestaurantHero";
import { RestaurantIntro } from "./restaurant/RestaurantIntro";
import { InteractiveMenu } from "./restaurant/InteractiveMenu";
import { ChefSpecials } from "./restaurant/ChefSpecials";
import { FoodGallery } from "./restaurant/FoodGallery";
import { SpecialOffers } from "./restaurant/SpecialOffers";
import { TableReservation } from "./restaurant/TableReservation";
import { Ambience } from "./restaurant/Ambience";
import { RestaurantReviews } from "./restaurant/RestaurantReviews";
import { WhyDine } from "./restaurant/WhyDine";
import { RestaurantStats } from "./restaurant/RestaurantStats";
import { RestaurantEvents } from "./restaurant/RestaurantEvents";
import { RestaurantFAQ } from "./restaurant/RestaurantFAQ";
import { RestaurantLocation } from "./restaurant/RestaurantLocation";
import { RestaurantCTA } from "./restaurant/RestaurantCTA";

export function RestaurantPage() {
  return (
    <div className="bg-black">
      <RestaurantHero />
      <RestaurantIntro />
      <InteractiveMenu />
      <ChefSpecials />
      <FoodGallery />
      <SpecialOffers />
      <TableReservation />
      <Ambience />
      <RestaurantReviews />
      <WhyDine />
      <RestaurantStats />
      <RestaurantEvents />
      <RestaurantFAQ />
      <RestaurantLocation />
      <RestaurantCTA />
    </div>
  );
}
