import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/BookingForm";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import swiftDzire from "@/assets/swift-dzire.png";
import ertiga from "@/assets/ertiga.png";
import innova from "@/assets/innova.png";
import tempoTraveller from "@/assets/tempo-traveller.png";
import { Plane, Car, MapPin, ShieldCheck, Clock, Star, Users as UsersIcon, Phone, ArrowRight, Headphones, BadgeCheck, IndianRupee, Zap, Users } from "lucide-react";

const services = [
  { icon: Plane, title: "Airport Transfers", desc: "Timely airport pickups & drops across India." },
  { icon: Car, title: "Outstation Taxi", desc: "Affordable one-way & round trip cabs." },
  { icon: MapPin, title: "Local City Taxi", desc: "Comfortable rides within your city." },
  { icon: Users, title: "Tour Packages", desc: "Curated religious & leisure tours." },
];

const destinations = [
  { name: "Ayodhya", tag: "Religious", price: "From ₹4,999", days: "2D/1N" },
  { name: "Varanasi", tag: "Spiritual", price: "From ₹6,999", days: "3D/2N" },
  { name: "Prayagraj", tag: "Heritage", price: "From ₹3,999", days: "2D/1N" },
  { name: "Mathura Vrindavan", tag: "Pilgrimage", price: "From ₹4,499", days: "2D/1N" },
  { name: "Uttarakhand", tag: "Hill Station", price: "From ₹14,999", days: "5D/4N" },
  { name: "Rajasthan", tag: "Royal Tour", price: "From ₹19,999", days: "6D/5N" },
];

const stats = [
  { value: "10,000+", label: "Happy Customers" },
  { value: "50+", label: "Cities Covered" },
  { value: "24/7", label: "Support Available" },
  { value: "100%", label: "Safe Journeys" },
];

const whyUs = [
  { icon: ShieldCheck, title: "Verified Drivers", desc: "Background-checked, experienced professionals." },
  { icon: IndianRupee, title: "No Hidden Charges", desc: "Transparent pricing — what you see is what you pay." },
  { icon: Zap, title: "Instant Booking", desc: "Book in seconds via WhatsApp. No app needed." },
  { icon: Headphones, title: "24/7 Support", desc: "Round the clock customer service for any help." },
  { icon: BadgeCheck, title: "Clean & Hygienic Cars", desc: "Sanitized vehicles maintained to high standards." },
  { icon: Clock, title: "On-Time Guarantee", desc: "Punctual pickups — we value your time." },
];

const testimonials = [
  { name: "Rahul Sharma", city: "Agra", text: "Excellent service! The driver was very professional and the car was spotless. Booked via WhatsApp and it was so easy!", rating: 5 },
  { name: "Priya Singh", city: "Delhi", text: "Best taxi service. Used them for our family trip to Varanasi. Very comfortable and affordable. Highly recommended!", rating: 5 },
  { name: "Amit Verma", city: "Lucknow", text: "Very punctual and affordable. The booking was super easy. Great experience for our Ayodhya trip!", rating: 5 },
  { name: "Sunita Gupta", city: "Mathura", text: "We booked for Rajasthan tour and everything was perfectly arranged. The driver was knowledgeable and friendly.", rating: 5 },
];

const popularRoutes = [
  { from: "Agra", to: "Delhi", price: "₹3,500" },
  { from: "Agra", to: "Jaipur", price: "₹3,600" },
  { from: "Delhi", to: "Manali", price: "₹7,800" },
  { from: "Agra", to: "Varanasi", price: "₹8,000" },
  { from: "Delhi", to: "Shimla", price: "₹5,200" },
  { from: "Agra", to: "Mathura", price: "₹1,200" },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section
      className="relative min-h-[100svh] flex items-center"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/65 to-primary/40" />
      <div className="relative z-10 container mx-auto px-4 py-24 sm:py-28 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-primary-foreground animate-fade-up text-center lg:text-left">
            <span className="inline-block bg-secondary/20 text-secondary border border-secondary/30 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium mb-5">
              🚗 India's Trusted Taxi & Tour Service
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Book Your Ride <br className="hidden sm:block" />
              <span className="text-secondary">Anytime, Anywhere</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-primary-foreground/85 max-w-xl mx-auto lg:mx-0">
              From airport pickups to outstation trips — comfortable rides at unbeatable prices. Book instantly via WhatsApp!
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="gap-2 text-sm sm:text-base">
                  Book Taxi <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href="tel:+918960446756">
                <Button variant="hero-outline" size="lg" className="gap-2 text-sm sm:text-base">
                  <Phone className="h-4 w-4" /> Call Now
                </Button>
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-primary-foreground/70 text-xs sm:text-sm">
              <span className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-secondary" /> Verified Drivers</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-secondary" /> Safe & Clean Cars</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-secondary" /> 24/7 Available</span>
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-card rounded-xl p-4 sm:p-6 text-center hover-lift shadow-md border border-border/50 group">
              <div className="mx-auto mb-3 sm:mb-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <s.icon className="h-6 w-6 sm:h-7 sm:w-7 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-xs sm:text-base">{s.title}</h3>
              <p className="mt-1 sm:mt-2 text-[10px] sm:text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6 sm:mt-8">
          <Link to="/services">
            <Button variant="outline" className="gap-2 text-sm">View All Services <ArrowRight className="h-4 w-4" /></Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Popular Routes - NEW */}
    <section className="section-padding bg-accent/50">
      <div className="container mx-auto">
        <SectionHeading title="Popular Routes" subtitle="Most booked taxi routes with transparent pricing." />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {popularRoutes.map((r, i) => (
            <Link to="/routes" key={i} className="bg-card rounded-xl p-4 text-center hover-lift shadow-sm border border-border/50 group">
              <div className="text-xs text-muted-foreground">{r.from}</div>
              <ArrowRight className="h-3 w-3 mx-auto my-1 text-secondary" />
              <div className="font-heading font-semibold text-foreground text-sm">{r.to}</div>
              <div className="mt-2 text-secondary font-bold text-sm">{r.price}</div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-6 sm:mt-8">
          <Link to="/routes">
            <Button variant="outline" className="gap-2 text-sm">View All Routes <ArrowRight className="h-4 w-4" /></Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Tour Packages */}
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <SectionHeading title="Popular Tour Packages" subtitle="All-inclusive tour packages with hotel, car, and sightseeing." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {destinations.map((d, i) => (
            <div key={i} className="bg-card rounded-xl overflow-hidden hover-lift shadow-sm border border-border/50 group">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary/15 flex items-center justify-center shrink-0 group-hover:bg-secondary/25 transition-colors">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground text-sm sm:text-base">{d.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] sm:text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{d.tag}</span>
                        <span className="text-[10px] sm:text-xs text-muted-foreground">{d.days}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm sm:text-base font-bold text-secondary">{d.price}</p>
                  </div>
                </div>
              </div>
              <div className="px-4 sm:px-5 py-3 flex items-center justify-between border-t border-border/50">
                <span className="text-[10px] sm:text-xs text-muted-foreground">✅ Hotel + Car + Sightseeing</span>
                <Link to="/tours">
                  <Button variant="outline" size="sm" className="text-[10px] sm:text-xs h-7 px-3">View Details</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6 sm:mt-8">
          <Link to="/tours">
            <Button variant="outline" className="gap-2 text-sm">View All Packages <ArrowRight className="h-4 w-4" /></Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading title="Why Choose Shivansh Travels?" subtitle="Thousands of happy customers trust us for their travel needs." />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {whyUs.map((w, i) => (
            <div key={i} className="text-center p-4 sm:p-6 rounded-xl bg-card border border-border/50 shadow-sm">
              <div className="mx-auto mb-3 sm:mb-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent flex items-center justify-center">
                <w.icon className="h-6 w-6 sm:h-7 sm:w-7 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-xs sm:text-base">{w.title}</h3>
              <p className="mt-1 sm:mt-2 text-[10px] sm:text-sm text-muted-foreground">{w.desc}</p>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-primary-foreground/10">
              <div className="flex gap-0.5 mb-2">
                {[...Array(t.rating)].map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-secondary text-secondary" />)}
              </div>
              <p className="text-primary-foreground/90 text-xs sm:text-sm italic leading-relaxed">"{t.text}"</p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center text-secondary font-bold text-xs">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-secondary text-xs sm:text-sm">{t.name}</p>
                  <p className="text-[10px] sm:text-xs text-primary-foreground/60">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-gradient-to-r from-secondary to-secondary/80 text-center">
      <div className="container mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-secondary-foreground">Ready to Travel?</h2>
        <p className="mt-2 text-secondary-foreground/90 text-sm sm:text-base max-w-lg mx-auto">
          Book your ride in seconds via WhatsApp. No app download needed!
        </p>
        <div className="mt-6 flex justify-center gap-3 sm:gap-4 flex-wrap">
          <Link to="/contact"><Button variant="default" size="lg" className="text-sm sm:text-base">Book Now</Button></Link>
          <a href="tel:+918960446756">
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
