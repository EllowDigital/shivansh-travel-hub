import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import { Users, Fuel, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import swiftDzire from "@/assets/swift-dzire.png";
import ertiga from "@/assets/ertiga.png";
import innova from "@/assets/innova.png";
import tempoTraveller from "@/assets/tempo-traveller.png";

const cars = [
  {
    name: "Swift Dzire",
    img: swiftDzire,
    seats: 4,
    price: "â‚¹11/km",
    type: "Sedan",
    fuel: "Petrol/CNG",
    best: "City & Short Trips",
  },
  {
    name: "Ertiga",
    img: ertiga,
    seats: 7,
    price: "â‚¹14/km",
    type: "MPV",
    fuel: "Petrol/Diesel",
    best: "Family Trips",
  },
  {
    name: "Toyota Innova",
    img: innova,
    seats: 7,
    price: "â‚¹16/km",
    type: "Premium MPV",
    fuel: "Diesel",
    best: "Outstation & Tours",
  },
  {
    name: "Tempo Traveller",
    img: tempoTraveller,
    seats: 12,
    price: "â‚¹22/km",
    type: "Mini Bus",
    fuel: "Diesel",
    best: "Group Travel",
  },
];

const Fleet = () => (
  <div className="pt-14 sm:pt-16 lg:pt-[88px]">
    <SEO
      title="Our Fleet | Book Swift Dzire, Innova, Ertiga, Tempo Traveller in Agra"
      description="Choose from our well-maintained fleet: Swift Dzire â‚¹11/km, Ertiga â‚¹14/km, Toyota Innova â‚¹16/km, Tempo Traveller â‚¹22/km. Book taxi in Agra for any trip."
      keywords="swift dzire taxi agra, innova hire agra, ertiga cab booking, tempo traveller agra, taxi fleet agra, car rental agra, outstation car agra"
      canonical="https://shivansh-tour-hub.netlify.app/fleet"
    />
    <section className="page-header">
      <div className="container mx-auto text-center">
        <h1 className="page-header-title">Our Fleet</h1>
        <p className="page-header-subtitle">
          Well-maintained vehicles for a safe and comfortable journey across
          India.
        </p>
      </div>
    </section>
    <section className="section-padding bg-background">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {cars.map((c, i) => (
          <article
            key={i}
            className="bg-card rounded-xl overflow-hidden shadow-md hover-lift border border-border/50"
          >
            <div className="bg-muted p-4 flex items-center justify-center h-36 sm:h-44">
              <img
                src={c.img}
                alt={`${c.name} for hire in Agra - ${c.type}`}
                className="max-h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="p-4 sm:p-5">
              <span className="inline-block text-[10px] sm:text-xs font-semibold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
                {c.type}
              </span>
              <h2 className="font-heading text-base sm:text-lg font-bold text-foreground mt-1.5">
                {c.name}
              </h2>
              <div className="mt-2 space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-3.5 w-3.5 text-secondary" /> {c.seats}{" "}
                  Passengers
                </div>
                <div className="flex items-center gap-2">
                  <Fuel className="h-3.5 w-3.5 text-secondary" /> {c.fuel}
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="h-3.5 w-3.5 text-secondary" /> Best for{" "}
                  {c.best}
                </div>
              </div>
              <p className="mt-3 text-lg sm:text-xl font-bold text-secondary">
                {c.price}
              </p>
              <Link to="/contact">
                <Button
                  variant="hero"
                  size="sm"
                  className="w-full mt-3 text-xs sm:text-sm"
                >
                  Book Now
                </Button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  </div>
);

export default Fleet;
