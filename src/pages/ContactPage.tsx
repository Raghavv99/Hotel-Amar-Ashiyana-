import { ContactHero } from "./contact/ContactHero";
import { ContactOptions } from "./contact/ContactOptions";
import { ContactForm } from "./contact/ContactForm";
import { ContactLocation } from "./contact/ContactLocation";
import { WhatsAppBooking } from "./contact/WhatsAppBooking";
import { ContactFAQ } from "./contact/ContactFAQ";
import { Trust } from "../components/Trust";
import { SocialConnect } from "./contact/SocialConnect";
import { EmergencyContact } from "./contact/EmergencyContact";
import { FinalCTA } from "../components/FinalCTA";

export function ContactPage() {
  return (
    <div className="bg-black">
      <ContactHero />
      <ContactOptions />
      <ContactForm />
      <WhatsAppBooking />
      <ContactLocation />
      <ContactFAQ />
      <Trust />
      <SocialConnect />
      <EmergencyContact />
      <FinalCTA />
    </div>
  );
}
