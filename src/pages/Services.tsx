import SectionHeading from "@/components/SectionHeading";
import { Plane, Car, MapPin, Briefcase, Users } from "lucide-react";

const services = [
  { icon: Plane, title: "Airport Pickup & Drop", desc: "Hassle-free airport transfers with flight tracking. We ensure you never miss a flight with our timely pickups and drops at all major airports." },
  { icon: Car, title: "Local City Taxi", desc: "Comfortable and affordable local rides for shopping, meetings, or sightseeing. Available on-demand across major cities." },
  { icon: MapPin, title: "Outstation Taxi", desc: "One-way and round-trip outstation cabs at the best rates. Travel between cities safely and comfortably." },
  { icon: Users, title: "Tour Packages", desc: "Curated religious, leisure, and adventure tour packages covering popular destinations across India." },
  { icon: Briefcase, title: "Corporate Travel", desc: "Dedicated fleet and account management for corporate clients. Employee transportation and event logistics." },
];

const Services = () => (
  <div className="pt-16">
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold">Our Services</h1>
        <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">Comprehensive travel solutions for every need.</p>
      </div>
    </section>
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-card rounded-lg p-8 hover-lift shadow-md">
              <div className="mb-4 w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                <s.icon className="h-7 w-7 text-secondary" />
              </div>
              <h2 className="font-heading text-xl font-semibold text-foreground">{s.title}</h2>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Services;
