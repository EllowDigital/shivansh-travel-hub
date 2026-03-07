import SectionHeading from "@/components/SectionHeading";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import swiftDzire from "@/assets/swift-dzire.png";
import ertiga from "@/assets/ertiga.png";
import innova from "@/assets/innova.png";
import tempoTraveller from "@/assets/tempo-traveller.png";

const cars = [
  { name: "Swift Dzire", img: swiftDzire, seats: 4, price: "₹11/km", type: "Sedan" },
  { name: "Ertiga", img: ertiga, seats: 7, price: "₹14/km", type: "MPV" },
  { name: "Toyota Innova", img: innova, seats: 7, price: "₹16/km", type: "Premium MPV" },
  { name: "Tempo Traveller", img: tempoTraveller, seats: 12, price: "₹22/km", type: "Mini Bus" },
];

const Fleet = () => (
  <div className="pt-16">
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold">Our Fleet</h1>
        <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">Well-maintained vehicles for a safe and comfortable journey.</p>
      </div>
    </section>
    <section className="section-padding bg-background">
      <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cars.map((c, i) => (
          <div key={i} className="bg-card rounded-lg overflow-hidden shadow-md hover-lift">
            <div className="bg-muted p-4 flex items-center justify-center h-48">
              <img src={c.img} alt={c.name} className="max-h-full object-contain" loading="lazy" />
            </div>
            <div className="p-5">
              <span className="text-xs font-medium text-secondary">{c.type}</span>
              <h2 className="font-heading text-lg font-bold text-foreground mt-1">{c.name}</h2>
              <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" /> {c.seats} Passengers
              </div>
              <p className="mt-2 text-xl font-bold text-secondary">{c.price}</p>
              <Link to="/contact"><Button variant="hero" size="sm" className="w-full mt-4">Book Now</Button></Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Fleet;
