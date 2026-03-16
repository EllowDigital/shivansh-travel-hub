import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plane, Car, MapPin, Briefcase, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport Pickup & Drop",
    desc: "Hassle-free airport transfers with flight tracking. We ensure you never miss a flight with our timely pickups and drops at all major airports.",
    features: ["Flight tracking", "Meet & greet", "All major airports"],
  },
  {
    icon: Car,
    title: "Local City Taxi",
    desc: "Comfortable and affordable local rides for shopping, meetings, or sightseeing. Available on-demand across major cities.",
    features: ["On-demand booking", "Hourly packages", "City tours"],
  },
  {
    icon: MapPin,
    title: "Outstation Taxi",
    desc: "One-way and round-trip outstation cabs at the best rates. Travel between cities safely and comfortably.",
    features: ["One-way & round trip", "50+ cities", "Flexible stops"],
  },
  {
    icon: Users,
    title: "Tour Packages",
    desc: "Curated religious, leisure, and adventure tour packages covering popular destinations across India.",
    features: [
      "All-inclusive pricing",
      "Custom itineraries",
      "Group discounts",
    ],
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    desc: "Dedicated fleet and account management for corporate clients. Employee transportation and event logistics.",
    features: ["Monthly billing", "Dedicated fleet", "Account manager"],
  },
];

const Services = () => (
  <div className="pt-14 sm:pt-16 lg:pt-[88px]">
    <SEO
      title="Taxi Services in Agra | Airport Pickup, Outstation Cab, Tour Packages"
      description="Book airport transfers, local city taxi, outstation cabs & tour packages from Agra. Affordable rates, verified drivers, 24/7 service. Call +91 8865038345."
      keywords="taxi services agra, airport pickup agra, outstation cab agra, local taxi agra, corporate taxi agra, tour packages agra, cab service agra"
      canonical="https://shivansh-tour-hub.netlify.app/services"
    />
    <section className="page-header">
      <div className="container mx-auto text-center">
        <h1 className="page-header-title">Our Services</h1>
        <p className="page-header-subtitle">
          Comprehensive travel solutions for every need — from airport pickups
          to outstation trips.
        </p>
      </div>
    </section>
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-5 sm:p-6 hover-lift shadow-md border border-border/50 flex flex-col"
            >
              <div className="mb-4 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent flex items-center justify-center">
                <s.icon className="h-6 w-6 sm:h-7 sm:w-7 text-secondary" />
              </div>
              <h2 className="font-heading text-base sm:text-lg font-semibold text-foreground">
                {s.title}
              </h2>
              <p className="mt-2 text-muted-foreground text-xs sm:text-sm leading-relaxed flex-1">
                {s.desc}
              </p>
              <ul className="mt-4 space-y-1.5">
                {s.features.map((f, j) => (
                  <li
                    key={j}
                    className="text-xs text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />{" "}
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full gap-2 text-xs sm:text-sm"
                >
                  Enquire Now <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Services;
