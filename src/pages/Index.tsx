import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/BookingForm";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import { Plane, Car, MapPin, ShieldCheck, Clock, Star, Users, Phone } from "lucide-react";

const services = [
  { icon: Plane, title: "Airport Pickup & Drop", desc: "Timely airport transfers across India." },
  { icon: Car, title: "Local City Taxi", desc: "Comfortable rides within your city." },
  { icon: MapPin, title: "Outstation Taxi", desc: "Affordable outstation cab bookings." },
  { icon: Users, title: "Tour Packages", desc: "Curated religious & leisure tours." },
];

const destinations = [
  { name: "Ayodhya", tag: "Religious" },
  { name: "Varanasi", tag: "Spiritual" },
  { name: "Prayagraj", tag: "Heritage" },
  { name: "Mathura Vrindavan", tag: "Pilgrimage" },
  { name: "Uttarakhand", tag: "Hill Station" },
  { name: "Lucknow", tag: "City Tour" },
];

const whyUs = [
  { icon: ShieldCheck, title: "Trusted Drivers", desc: "Verified, experienced and courteous drivers." },
  { icon: Clock, title: "24/7 Available", desc: "Book anytime, we're always ready." },
  { icon: Star, title: "Best Prices", desc: "Competitive rates with no hidden charges." },
];

const testimonials = [
  { name: "Rahul Sharma", text: "Excellent service! The driver was very professional and the car was spotless." },
  { name: "Priya Singh", text: "Best taxi service in Lucknow. Used them for our family trip to Varanasi." },
  { name: "Amit Verma", text: "Very punctual and affordable. Highly recommend for airport transfers." },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section
      className="relative min-h-[90vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-primary/60" />
      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 text-primary-foreground animate-fade-up">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Reliable Taxi &amp; Tour Services Across India
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/90 max-w-xl">
            Comfortable rides, affordable prices, and trusted service — from airport pickups to outstation trips.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact">
              <Button variant="hero" size="lg">Book Taxi</Button>
            </Link>
            <a href="tel:+919876543210">
              <Button variant="hero-outline" size="lg" className="gap-2">
                <Phone className="h-4 w-4" /> Call Now
              </Button>
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <BookingForm />
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading title="Our Services" subtitle="We offer a range of taxi and tour services to make your travel hassle-free." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-card rounded-lg p-6 text-center hover-lift shadow-md">
              <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                <s.icon className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Popular Destinations */}
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <SectionHeading title="Popular Destinations" subtitle="Explore India's most sought-after travel spots with us." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((d, i) => (
            <div key={i} className="bg-card rounded-lg p-6 flex items-center gap-4 hover-lift shadow-sm">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">{d.name}</h3>
                <span className="text-xs text-muted-foreground">{d.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading title="Why Choose Us?" subtitle="Thousands of happy customers trust Shivansh Tour and Travels." />
        <div className="grid md:grid-cols-3 gap-8">
          {whyUs.map((w, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                <w.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding bg-primary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">What Our Customers Say</h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-secondary rounded-full" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />)}
              </div>
              <p className="text-primary-foreground/90 text-sm italic">"{t.text}"</p>
              <p className="mt-4 font-semibold text-secondary text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-secondary text-center">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl font-bold text-secondary-foreground">Ready to Travel?</h2>
        <p className="mt-2 text-secondary-foreground/90">Book your ride now or contact us for custom tour packages.</p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <Link to="/contact"><Button variant="default" size="lg">Book Now</Button></Link>
          <a href="tel:+919876543210"><Button variant="hero-outline" size="lg" className="border-primary text-primary hover:bg-primary/10"><Phone className="h-4 w-4 mr-2" />Call Now</Button></a>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
