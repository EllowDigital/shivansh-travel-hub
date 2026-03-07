import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Clock, IndianRupee } from "lucide-react";

const tours = [
  { name: "Ayodhya Tour", duration: "2 Days / 1 Night", price: "₹4,999", highlights: "Ram Mandir, Hanuman Garhi, Kanak Bhawan" },
  { name: "Varanasi Tour", duration: "3 Days / 2 Nights", price: "₹6,999", highlights: "Kashi Vishwanath, Ganga Aarti, Sarnath" },
  { name: "Prayagraj Tour", duration: "2 Days / 1 Night", price: "₹3,999", highlights: "Triveni Sangam, Anand Bhawan, Allahabad Fort" },
  { name: "Mathura Vrindavan", duration: "2 Days / 1 Night", price: "₹4,499", highlights: "Krishna Janmabhoomi, Banke Bihari, Prem Mandir" },
  { name: "Uttarakhand Tour", duration: "5 Days / 4 Nights", price: "₹14,999", highlights: "Mussoorie, Rishikesh, Haridwar, Nainital" },
];

const Tours = () => (
  <div className="pt-16">
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold">Tour Packages</h1>
        <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">Explore India's best destinations with our curated packages.</p>
      </div>
    </section>
    <section className="section-padding bg-background">
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((t, i) => (
          <div key={i} className="bg-card rounded-lg p-6 shadow-md hover-lift border border-border">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="h-5 w-5 text-secondary" />
              <h2 className="font-heading text-xl font-bold text-foreground">{t.name}</h2>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{t.duration}</span>
              <span className="flex items-center gap-1"><IndianRupee className="h-4 w-4" />{t.price}</span>
            </div>
            <p className="text-sm text-muted-foreground"><strong className="text-foreground">Highlights:</strong> {t.highlights}</p>
            <Link to="/contact"><Button variant="hero" size="sm" className="w-full mt-5">Enquire Now</Button></Link>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Tours;
