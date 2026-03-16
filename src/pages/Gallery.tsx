import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Camera, X } from "lucide-react";

import tajMahal from "@/assets/gallery/taj-mahal.jpg";
import happyFamily from "@/assets/gallery/happy-family.jpg";
import varanasiGhats from "@/assets/gallery/varanasi-ghats.jpg";
import jaipurHawaMahal from "@/assets/gallery/jaipur-hawa-mahal.jpg";
import manaliMountains from "@/assets/gallery/manali-mountains.jpg";
import ayodhyaTemple from "@/assets/gallery/ayodhya-temple.jpg";
import innovaTrip from "@/assets/gallery/innova-trip.jpg";
import rishikeshBridge from "@/assets/gallery/rishikesh-bridge.jpg";

const galleryItems = [
  { img: tajMahal, title: "Taj Mahal, Agra", category: "Destinations", desc: "Sunrise at the iconic Taj Mahal", alt: "Taj Mahal Agra sightseeing by taxi service" },
  { img: happyFamily, title: "Happy Customers", category: "Customers", desc: "Family trip to a heritage site with our sedan", alt: "Happy family on Agra outstation cab tour" },
  { img: varanasiGhats, title: "Varanasi Ghats", category: "Destinations", desc: "Evening aarti at the sacred ghats of Varanasi", alt: "Varanasi ghat tour from Agra by taxi" },
  { img: jaipurHawaMahal, title: "Hawa Mahal, Jaipur", category: "Destinations", desc: "The stunning Palace of Winds in Jaipur", alt: "Jaipur Hawa Mahal road trip taxi from Agra" },
  { img: manaliMountains, title: "Road to Manali", category: "Road Trips", desc: "Scenic mountain road to Manali", alt: "Manali road trip with Delhi and Agra cab service" },
  { img: ayodhyaTemple, title: "Ayodhya Temple", category: "Destinations", desc: "Grand temple architecture in Ayodhya", alt: "Ayodhya temple darshan taxi tour package" },
  { img: innovaTrip, title: "Our Innova on Tour", category: "Fleet", desc: "Toyota Innova ready for an outstation trip", alt: "Toyota Innova outstation taxi in Agra" },
  { img: rishikeshBridge, title: "Rishikesh Bridge", category: "Road Trips", desc: "Iconic suspension bridge at sunset in Rishikesh", alt: "Rishikesh trip from Agra and Delhi by cab" },
];

const categories = ["All", "Destinations", "Road Trips", "Customers", "Fleet"];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <div className="pt-14 sm:pt-16 lg:pt-[88px]">
      <SEO
        title="Photo Gallery | Shivansh Tour & Travels | Trip Photos & Destinations"
        description="Browse photos from our trips to Taj Mahal, Varanasi, Jaipur, Manali, Rishikesh & more. See our fleet and happy customer moments."
        keywords="travel photos india, taxi trip gallery, agra trip photos, varanasi tour photos, jaipur photos, travel agency gallery"
        canonical="https://shivanshtravels.com/gallery"
      />
      <section className="page-header">
        <div className="container mx-auto text-center">
          <h1 className="page-header-title">Photo Gallery</h1>
          <p className="page-header-subtitle">Explore photos from our trips, destinations, and happy customers across India.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${active === cat ? "bg-secondary text-secondary-foreground shadow-md" : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            {filtered.map((g, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden shadow-md hover-lift cursor-pointer border border-border/50" onClick={() => setLightbox(galleryItems.indexOf(g))}>
                <div className="aspect-square overflow-hidden">
                  <img src={g.img} alt={g.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] sm:text-xs bg-secondary/80 text-secondary-foreground px-2 py-0.5 rounded-full">{g.category}</span>
                  <h3 className="font-heading font-semibold text-primary-foreground text-sm sm:text-base mt-1">{g.title}</h3>
                  <p className="text-[10px] sm:text-xs text-primary-foreground/80">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <Camera className="h-12 w-12 mx-auto mb-3 opacity-30" />
              <p>No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-secondary text-center">
        <div className="container mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-secondary-foreground">Want to Create Your Own Travel Memories?</h2>
          <p className="mt-2 text-secondary-foreground/90 text-sm sm:text-base">Book a trip with us and explore India's best destinations.</p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <Link to="/tours"><Button variant="default" size="lg" className="text-sm sm:text-base">View Tour Packages</Button></Link>
            <Link to="/contact"><Button variant="hero-outline" size="lg" className="border-primary text-primary hover:bg-primary/10 text-sm sm:text-base">Book a Taxi</Button></Link>
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-primary/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-primary-foreground hover:text-secondary transition-colors" onClick={() => setLightbox(null)}>
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={galleryItems[lightbox].img} alt={galleryItems[lightbox].alt} className="w-full max-h-[80vh] object-contain rounded-xl" loading="lazy" />
            <div className="text-center mt-4">
              <h3 className="font-heading font-bold text-primary-foreground text-lg">{galleryItems[lightbox].title}</h3>
              <p className="text-primary-foreground/70 text-sm">{galleryItems[lightbox].desc}</p>
            </div>
            <div className="flex justify-center gap-3 mt-4">
              <Button variant="hero-outline" size="sm" disabled={lightbox === 0} onClick={() => setLightbox((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))}>← Previous</Button>
              <Button variant="hero-outline" size="sm" disabled={lightbox === galleryItems.length - 1} onClick={() => setLightbox((prev) => (prev !== null && prev < galleryItems.length - 1 ? prev + 1 : prev))}>Next →</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
