import { Navigation } from "lucide-react";

export function RestaurantLocation() {
  return (
    <section className="py-24 bg-black border-y border-ivory/5">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-widest text-luxury-gold mb-4 font-semibold">Visit Us</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-6">Location & <span className="text-luxury-gold italic">Directions</span></h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 w-full h-[500px] bg-[#06080a] border border-ivory/10">
          
          <div className="w-full lg:w-2/3 h-[300px] lg:h-full relative filter grayscale-[80%] hover:grayscale-0 transition-all duration-[2s]">
             <iframe
                src="https://maps.google.com/maps?q=Hotel%20Amar%20Ashiyana,%20V%20Mart,%20Mall%20Godam%20Road,%20Ashok%20Nagar,%20Swaroop%20Nagar,%20Etawah,%20Uttar%20Pradesh%20206001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>

          <div className="w-full lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center text-ivory">
             <h3 className="font-serif text-2xl mb-4">Shikhar Restaurant</h3>
             <p className="text-sm font-light text-ivory/60 mb-8 leading-relaxed">
                Hotel Amar Ashiyana<br/>
                V Mart, Mall Godam Road,<br/>
                Ashok Nagar, Swaroop Nagar,<br/>
                Etawah, Uttar Pradesh 206001
             </p>

             <div className="space-y-4 text-sm font-light text-ivory/60 mb-8">
                <p><span className="text-ivory font-medium">Timings:</span> 11:00 AM - 11:30 PM (Daily)</p>
                <p><span className="text-ivory font-medium">Parking:</span> Complimentary Valet Available</p>
             </div>

             <a href="https://maps.google.com/maps?q=Hotel%20Amar%20Ashiyana,%20V%20Mart,%20Mall%20Godam%20Road,%20Ashok%20Nagar,%20Swaroop%20Nagar,%20Etawah,%20Uttar%20Pradesh%20206001" target="_blank" rel="noreferrer" className="flex items-center w-fit px-6 py-3 bg-luxury-gold text-black text-[10px] uppercase tracking-widest font-bold hover:bg-ivory transition-colors">
                <Navigation size={14} className="mr-2" /> Get Directions
             </a>
          </div>

        </div>
      </div>
    </section>
  );
}
