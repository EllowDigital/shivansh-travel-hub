import SectionHeading from "@/components/SectionHeading";
import { ShieldCheck, Heart, Users, Award } from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Safety First", desc: "All our vehicles are regularly serviced and our drivers are fully verified." },
  { icon: Heart, title: "Customer Focused", desc: "Your comfort and satisfaction is our top priority on every trip." },
  { icon: Users, title: "Family Friendly", desc: "We cater to families, tourists, pilgrims, and corporate clients alike." },
  { icon: Award, title: "Experience", desc: "Years of trusted service across Uttar Pradesh and beyond." },
];

const About = () => (
  <div className="pt-16">
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold">About Us</h1>
        <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">Learn more about Shivansh Tour and Travels.</p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Who We Are</h2>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Shivansh Tour and Travels</strong> is a leading taxi and tour service provider based in Lucknow, Uttar Pradesh.
          We specialize in airport pickups, outstation trips, local city rides, and curated tour packages across India.
          With a fleet of well-maintained vehicles and professional drivers, we ensure every journey is safe, comfortable, and memorable.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Whether you're a family heading to a pilgrimage, a tourist exploring India's heritage, or a corporate traveler needing reliable transport —
          we are here for you, 24 hours a day, 7 days a week.
        </p>
      </div>
    </section>

    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <SectionHeading title="Our Values" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="bg-card rounded-lg p-6 text-center hover-lift shadow-sm">
              <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                <v.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
