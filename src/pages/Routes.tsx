import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Car, ArrowRight } from "lucide-react";

const agraRoutes = [
  { to: "Delhi", distance: "230 km", price: "₹3,500" },
  { to: "Noida", distance: "200 km", price: "₹3,200" },
  { to: "Ghaziabad", distance: "210 km", price: "₹3,300" },
  { to: "Gurgaon", distance: "250 km", price: "₹3,800" },
  { to: "Mathura", distance: "58 km", price: "₹1,200" },
  { to: "Jaipur", distance: "240 km", price: "₹3,600" },
  { to: "Rajasthan", distance: "260 km", price: "₹4,000" },
  { to: "Aligarh", distance: "90 km", price: "₹1,800" },
  { to: "Meerut", distance: "260 km", price: "₹4,000" },
  { to: "Kanpur", distance: "300 km", price: "₹4,500" },
  { to: "Firozabad", distance: "45 km", price: "₹1,000" },
  { to: "Jhansi", distance: "290 km", price: "₹4,200" },
  { to: "Prayagraj", distance: "440 km", price: "₹6,500" },
  { to: "Greater Noida", distance: "190 km", price: "₹3,100" },
  { to: "Ayodhya", distance: "530 km", price: "₹7,500" },
  { to: "Haridwar", distance: "450 km", price: "₹6,500" },
  { to: "Varanasi", distance: "560 km", price: "₹8,000" },
  { to: "Ajmer", distance: "380 km", price: "₹5,500" },
  { to: "Bareilly", distance: "320 km", price: "₹4,800" },
  { to: "Bhopal", distance: "520 km", price: "₹7,500" },
  { to: "Chandigarh", distance: "470 km", price: "₹7,000" },
  { to: "Nainital", distance: "380 km", price: "₹5,500" },
  { to: "Udaipur", distance: "560 km", price: "₹8,000" },
  { to: "Gwalior", distance: "120 km", price: "₹2,200" },
  { to: "Jodhpur", distance: "530 km", price: "₹7,500" },
  { to: "Shimla", distance: "580 km", price: "₹8,500" },
  { to: "Manali", distance: "760 km", price: "₹10,500" },
  { to: "Dehradun", distance: "430 km", price: "₹6,200" },
];

const delhiRoutes = [
  { to: "Agra", distance: "230 km", price: "₹3,500" },
  { to: "Noida", distance: "25 km", price: "₹800" },
  { to: "Ghaziabad", distance: "30 km", price: "₹800" },
  { to: "Gurgaon", distance: "35 km", price: "₹900" },
  { to: "Mathura", distance: "180 km", price: "₹2,800" },
  { to: "Jaipur", distance: "280 km", price: "₹4,200" },
  { to: "Rajasthan", distance: "280 km", price: "₹4,200" },
  { to: "Aligarh", distance: "140 km", price: "₹2,400" },
  { to: "Meerut", distance: "70 km", price: "₹1,500" },
  { to: "Kanpur", distance: "440 km", price: "₹6,500" },
  { to: "Firozabad", distance: "260 km", price: "₹4,000" },
  { to: "Jhansi", distance: "410 km", price: "₹6,000" },
  { to: "Prayagraj", distance: "630 km", price: "₹9,000" },
  { to: "Greater Noida", distance: "45 km", price: "₹1,000" },
  { to: "Ayodhya", distance: "630 km", price: "₹9,000" },
  { to: "Haridwar", distance: "230 km", price: "₹3,500" },
  { to: "Varanasi", distance: "780 km", price: "₹10,500" },
  { to: "Ajmer", distance: "400 km", price: "₹5,800" },
  { to: "Bareilly", distance: "260 km", price: "₹4,000" },
  { to: "Bhopal", distance: "770 km", price: "₹10,000" },
  { to: "Nainital", distance: "310 km", price: "₹4,500" },
  { to: "Udaipur", distance: "660 km", price: "₹9,500" },
  { to: "Gwalior", distance: "320 km", price: "₹4,800" },
  { to: "Jodhpur", distance: "580 km", price: "₹8,500" },
  { to: "Shimla", distance: "350 km", price: "₹5,200" },
  { to: "Manali", distance: "540 km", price: "₹7,800" },
  { to: "Dehradun", distance: "250 km", price: "₹3,800" },
];

const RouteCard = ({ from, to, distance, price }: { from: string; to: string; distance: string; price: string }) => (
  <div className="bg-card rounded-lg p-4 border border-border hover-lift shadow-sm flex items-center justify-between gap-3">
    <div className="flex items-center gap-2 min-w-0">
      <Car className="h-5 w-5 text-secondary shrink-0" />
      <div className="min-w-0">
        <h3 className="font-heading text-sm font-semibold text-foreground truncate">
          {from} <ArrowRight className="inline h-3 w-3 mx-1" /> {to}
        </h3>
        <p className="text-xs text-muted-foreground">{distance}</p>
      </div>
    </div>
    <div className="text-right shrink-0">
      <p className="text-sm font-bold text-secondary">{price}</p>
      <Link to="/contact">
        <Button variant="hero" size="sm" className="mt-1 text-xs h-7 px-3">Book</Button>
      </Link>
    </div>
  </div>
);

const Routes = () => (
  <div className="pt-16">
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold">Taxi Routes & Pricing</h1>
        <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">
          Affordable outstation taxi services from Agra and Delhi to all major cities. Book now!
        </p>
      </div>
    </section>

    {/* Agra Routes */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading title="Taxi Services From Agra" subtitle="Reliable and affordable cab services from Agra to all major destinations." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {agraRoutes.map((r, i) => (
            <RouteCard key={i} from="Agra" to={r.to} distance={r.distance} price={r.price} />
          ))}
        </div>
      </div>
    </section>

    {/* Delhi Routes */}
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <SectionHeading title="Taxi Services From Delhi" subtitle="Book outstation taxi from Delhi to popular cities across North India." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {delhiRoutes.map((r, i) => (
            <RouteCard key={i} from="Delhi" to={r.to} distance={r.distance} price={r.price} />
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-secondary text-center">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl font-bold text-secondary-foreground">Don't See Your Route?</h2>
        <p className="mt-2 text-secondary-foreground/90">Contact us for custom routes and special pricing for your journey.</p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <Link to="/contact"><Button variant="default" size="lg">Get Custom Quote</Button></Link>
          <a href="tel:+919876543210"><Button variant="hero-outline" size="lg" className="border-primary text-primary hover:bg-primary/10">Call Now</Button></a>
        </div>
      </div>
    </section>
  </div>
);

export default Routes;
