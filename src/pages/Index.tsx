import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/BookingForm";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import { Plane, Car, MapPin, ShieldCheck, Clock, Star, Users, Phone, ArrowRight, CheckCircle, Headphones } from "lucide-react";

const services = [
  { icon: Plane, title: "Airport Transfers", desc: "Timely airport pickups & drops across India." },
  { icon: Car, title: "Local City Taxi", desc: "Comfortable rides within your city." },
  { icon: MapPin, title: "Outstation Taxi", desc: "Affordable outstation cab bookings." },
  { icon: Users, title: "Tour Packages", desc: "Curated religious & leisure tours." },
];

const destinations = [
  { name: "Ayodhya", tag: "Religious", price: "From ₹4,999" },
  { name: "Varanasi", tag: "Spiritual", price: "From ₹6,999" },
  { name: "Prayagraj", tag: "Heritage", price: "From ₹3,999" },
  { name: "Mathura Vrindavan", tag: "Pilgrimage", price: "From ₹4,499" },
  { name: "Uttarakhand", tag: "Hill Station", price: "From ₹14,999" },
  { name: "Rajasthan", tag: "Royal Tour", price: "From ₹19,999" },
];

const stats = [
  { value: "10,000+", label: "Happy Customers" },
  { value: "50+", label: "Cities Covered" },
  { value: "24/7", label: "Support Available" },
  { value: "100%", label: "Safe Journeys" },
];

const whyUs = [
  { icon: ShieldCheck, title: "Trusted Drivers", desc: "Verified, experienced and courteous drivers for every ride." },
  { icon: Clock, title: "24/7 Available", desc: "Book anytime — we're always ready to serve you." },
  { icon: Star, title: "Best Prices", desc: "Competitive rates with absolutely no hidden charges." },
  { icon: Headphones, title: "Dedicated Support", desc: "Responsive customer service for a seamless experience." },
];

const testimonials = [
  { name: "Rahul Sharma", city: "Agra", text: "Excellent service! The driver was very professional and the car was spotless. Highly recommend!" },
  { name: "Priya Singh", city: "Delhi", text: "Best taxi service. Used them for our family trip to Varanasi. Very comfortable and affordable." },
  { name: "Amit Verma", city: "Lucknow", text: "Very punctual and affordable. The booking was super easy via WhatsApp. Great experience!" },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section
      className="relative min-h-[100svh] flex items-center"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50" />
      <div className="relative z-10 container mx-auto px-4 py-20 sm:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-primary-foreground animate-fade-up text-center lg:text-left">
            <span className="inline-block bg-secondary/20 text-secondary border border-secondary/30 rounded-full px-4 py-1 text-xs sm:text-sm font-medium mb-4">
              🚗 Trusted by 10,000+ Customers
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Reliable Taxi &amp; Tour Services <span className="text-secondary">Across India</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-primary-foreground/85 max-w-xl mx-auto lg:mx-0">
              Comfortable rides, affordable prices, and trusted service — from airport pickups to outstation trips.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="gap-2 text-sm sm:text-base">
                  Book Taxi <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href="tel:+919876543210">
                <Button variant="hero-outline" size="lg" className="gap-2 text-sm sm:text-base">
                  <Phone className="h-4 w-4" /> Call Now
                </Button>
              </a>
            </div>
          </div>
          <div className="w-full max-w-md lg:max-w-sm xl:max-w-md animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <BookingForm />
          </div>
        </div>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="bg-secondary py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-secondary-foreground">{s.value}</p>
              <p className="text-xs sm:text-sm text-secondary-foreground/80 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading title="Our Services" subtitle="Comprehensive taxi & tour services to make your travel hassle-free." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-card rounded-xl p-5 sm:p-6 text-center hover-lift shadow-md border border-border/50 group">
              <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-accent flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <s.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-sm sm:text-base">{s.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/services">
            <Button variant="outline" className="gap-2">View All Services <ArrowRight className="h-4 w-4" /></Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Popular Destinations */}
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <SectionHeading title="Popular Tour Packages" subtitle="Explore India's most sought-after destinations with our all-inclusive packages." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {destinations.map((d, i) => (
            <div key={i} className="bg-card rounded-xl p-5 flex items-center gap-4 hover-lift shadow-sm border border-border/50 group">
              <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center shrink-0 group-hover:bg-secondary/25 transition-colors">
                <MapPin className="h-6 w-6 text-secondary" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-heading font-semibold text-foreground text-sm sm:text-base truncate">{d.name}</h3>
                <span className="text-xs text-muted-foreground">{d.tag}</span>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs sm:text-sm font-bold text-secondary">{d.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/tours">
            <Button variant="outline" className="gap-2">View All Packages <ArrowRight className="h-4 w-4" /></Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading title="Why Choose Us?" subtitle="Thousands of happy customers trust Shivansh Tour and Travels." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {whyUs.map((w, i) => (
            <div key={i} className="text-center p-5 sm:p-6 rounded-xl bg-card border border-border/50 shadow-sm">
              <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                <w.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-sm sm:text-base">{w.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding bg-primary">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground">What Our Customers Say</h2>
          <div className="mt-3 sm:mt-4 mx-auto w-16 sm:w-20 h-1 bg-secondary rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-primary-foreground/10">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />)}
              </div>
              <p className="text-primary-foreground/90 text-sm italic leading-relaxed">"{t.text}"</p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center text-secondary font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-secondary text-sm">{t.name}</p>
                  <p className="text-xs text-primary-foreground/60">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-secondary text-center">
      <div className="container mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-secondary-foreground">Ready to Travel?</h2>
        <p className="mt-2 text-secondary-foreground/90 text-sm sm:text-base max-w-lg mx-auto">
          Book your ride now or contact us for custom tour packages at the best prices.
        </p>
        <div className="mt-6 flex justify-center gap-3 sm:gap-4 flex-wrap">
          <Link to="/contact"><Button variant="default" size="lg" className="text-sm sm:text-base">Book Now</Button></Link>
          <a href="tel:+919876543210">
            <Button variant="hero-outline" size="lg" className="border-primary text-primary hover:bg-primary/10 gap-2 text-sm sm:text-base">
              <Phone className="h-4 w-4" /> Call Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
