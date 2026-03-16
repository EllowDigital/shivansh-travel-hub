import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { openWhatsAppMessage } from "@/lib/whatsapp";
import { Link } from "react-router-dom";
import { Car, ArrowRight, Phone } from "lucide-react";

const agraRoutes = [
  { to: "Delhi", distance: "230 km", price: "â‚¹3,500", slug: "/agra-to-delhi-taxi" },
  { to: "Noida", distance: "200 km", price: "â‚¹3,200", slug: "/agra-to-noida-taxi" },
  { to: "Ghaziabad", distance: "210 km", price: "â‚¹3,300" },
  { to: "Gurgaon", distance: "250 km", price: "â‚¹3,800", slug: "/agra-to-gurgaon-taxi" },
  { to: "Mathura", distance: "58 km", price: "â‚¹1,200", slug: "/agra-to-mathura-taxi" },
  { to: "Jaipur", distance: "240 km", price: "â‚¹3,600", slug: "/agra-to-jaipur-taxi" },
  { to: "Rajasthan", distance: "260 km", price: "â‚¹4,000" },
  { to: "Aligarh", distance: "90 km", price: "â‚¹1,800" },
  { to: "Meerut", distance: "260 km", price: "â‚¹4,000" },
  { to: "Kanpur", distance: "300 km", price: "â‚¹4,500" },
  { to: "Firozabad", distance: "45 km", price: "â‚¹1,000" },
  { to: "Jhansi", distance: "290 km", price: "â‚¹4,200" },
  { to: "Prayagraj", distance: "440 km", price: "â‚¹6,500" },
  { to: "Greater Noida", distance: "190 km", price: "â‚¹3,100" },
  { to: "Ayodhya", distance: "530 km", price: "â‚¹7,500" },
  { to: "Haridwar", distance: "450 km", price: "â‚¹6,500", slug: "/agra-to-haridwar-taxi" },
  { to: "Varanasi", distance: "560 km", price: "â‚¹8,000" },
  { to: "Ajmer", distance: "380 km", price: "â‚¹5,500" },
  { to: "Bareilly", distance: "320 km", price: "â‚¹4,800" },
  { to: "Bhopal", distance: "520 km", price: "â‚¹7,500" },
  { to: "Chandigarh", distance: "470 km", price: "â‚¹7,000", slug: "/agra-to-chandigarh-taxi" },
  { to: "Nainital", distance: "380 km", price: "â‚¹5,500" },
  { to: "Udaipur", distance: "560 km", price: "â‚¹8,000" },
  { to: "Gwalior", distance: "120 km", price: "â‚¹2,200" },
  { to: "Jodhpur", distance: "530 km", price: "â‚¹7,500" },
  { to: "Shimla", distance: "580 km", price: "â‚¹8,500" },
  { to: "Manali", distance: "760 km", price: "â‚¹10,500" },
  { to: "Dehradun", distance: "430 km", price: "â‚¹6,200" },
  { to: "Lucknow", distance: "370 km", price: "â‚¹5,500", slug: "/agra-to-lucknow-taxi" },
  { to: "Gorakhpur", distance: "590 km", price: "â‚¹8,500" },
  { to: "Indore", distance: "620 km", price: "â‚¹9,000" },
  { to: "Ranthambore", distance: "280 km", price: "â‚¹4,200" },
  { to: "Rishikesh", distance: "460 km", price: "â‚¹6,800", slug: "/agra-to-rishikesh-taxi" },
  { to: "Mussoorie", distance: "440 km", price: "â‚¹6,500" },
  { to: "Pushkar", distance: "400 km", price: "â‚¹5,800" },
  { to: "Mount Abu", distance: "580 km", price: "â‚¹8,500" },
  { to: "Orchha", distance: "280 km", price: "â‚¹4,200" },
  { to: "Khajuraho", distance: "400 km", price: "â‚¹5,800" },
  { to: "Amritsar", distance: "680 km", price: "â‚¹9,500" },
];

const delhiRoutes = [
  { to: "Agra", distance: "230 km", price: "â‚¹3,500", slug: "/delhi-to-agra-taxi" },
  { to: "Noida", distance: "25 km", price: "â‚¹800", slug: "/delhi-to-noida-taxi" },
  { to: "Ghaziabad", distance: "30 km", price: "â‚¹800" },
  { to: "Gurgaon", distance: "35 km", price: "â‚¹900", slug: "/delhi-to-gurgaon-taxi" },
  { to: "Mathura", distance: "180 km", price: "â‚¹2,800", slug: "/delhi-to-mathura-taxi" },
  { to: "Jaipur", distance: "280 km", price: "â‚¹4,200", slug: "/delhi-to-jaipur-taxi" },
  { to: "Rajasthan", distance: "280 km", price: "â‚¹4,200" },
  { to: "Aligarh", distance: "140 km", price: "â‚¹2,400" },
  { to: "Meerut", distance: "70 km", price: "â‚¹1,500" },
  { to: "Kanpur", distance: "440 km", price: "â‚¹6,500" },
  { to: "Firozabad", distance: "260 km", price: "â‚¹4,000" },
  { to: "Jhansi", distance: "410 km", price: "â‚¹6,000" },
  { to: "Prayagraj", distance: "630 km", price: "â‚¹9,000" },
  { to: "Greater Noida", distance: "45 km", price: "â‚¹1,000" },
  { to: "Ayodhya", distance: "630 km", price: "â‚¹9,000" },
  { to: "Haridwar", distance: "230 km", price: "â‚¹3,500", slug: "/delhi-to-haridwar-taxi" },
  { to: "Varanasi", distance: "780 km", price: "â‚¹10,500" },
  { to: "Ajmer", distance: "400 km", price: "â‚¹5,800" },
  { to: "Bareilly", distance: "260 km", price: "â‚¹4,000" },
  { to: "Bhopal", distance: "770 km", price: "â‚¹10,000" },
  { to: "Nainital", distance: "310 km", price: "â‚¹4,500" },
  { to: "Udaipur", distance: "660 km", price: "â‚¹9,500" },
  { to: "Gwalior", distance: "320 km", price: "â‚¹4,800" },
  { to: "Jodhpur", distance: "580 km", price: "â‚¹8,500" },
  { to: "Shimla", distance: "350 km", price: "â‚¹5,200" },
  { to: "Manali", distance: "540 km", price: "â‚¹7,800" },
  { to: "Dehradun", distance: "250 km", price: "â‚¹3,800" },
  { to: "Lucknow", distance: "550 km", price: "â‚¹8,000", slug: "/delhi-to-lucknow-taxi" },
  { to: "Gorakhpur", distance: "790 km", price: "â‚¹10,500" },
  { to: "Indore", distance: "820 km", price: "â‚¹11,000" },
  { to: "Chandigarh", distance: "250 km", price: "â‚¹3,800", slug: "/delhi-to-chandigarh-taxi" },
  { to: "Ranthambore", distance: "400 km", price: "â‚¹5,800" },
  { to: "Rishikesh", distance: "240 km", price: "â‚¹3,600", slug: "/delhi-to-rishikesh-taxi" },
  { to: "Mussoorie", distance: "280 km", price: "â‚¹4,200" },
  { to: "Pushkar", distance: "420 km", price: "â‚¹6,000" },
  { to: "Mount Abu", distance: "700 km", price: "â‚¹9,500" },
  { to: "Amritsar", distance: "450 km", price: "â‚¹6,500" },
  { to: "Khajuraho", distance: "600 km", price: "â‚¹8,500" },
];

const WHATSAPP_NUMBER = "918865038345";

const handleRouteBook = (from: string, to: string, distance: string, price: string) => {
  const text = `ðŸš• *TAXI BOOKING ENQUIRY*\nâ”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”\n\nðŸ“ *Route Details:*\nâ€¢ From: ${from}\nâ€¢ To: ${to}\nâ€¢ Distance: ${distance}\nâ€¢ Estimated Price: ${price}\n\nHi, I want to book a taxi from ${from} to ${to}. Please share availability and confirm the fare.\n\nâ”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”\nSent via Shivansh Tour & Travels Website`;
  openWhatsAppMessage(WHATSAPP_NUMBER, text);
};

const RouteCard = ({ from, to, distance, price, slug }: { from: string; to: string; distance: string; price: string; slug?: string }) => (
  <div className="bg-card rounded-xl p-3 sm:p-4 border border-border/50 hover-lift shadow-sm flex items-center justify-between gap-2 sm:gap-3">
    <div className="flex items-center gap-2 min-w-0">
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-accent flex items-center justify-center shrink-0">
        <Car className="h-4 w-4 text-secondary" />
      </div>
      <div className="min-w-0">
        {slug ? (
          <Link to={slug} className="font-heading text-xs sm:text-sm font-semibold text-foreground truncate hover:text-secondary">
            {from} <ArrowRight className="inline h-3 w-3 mx-0.5" /> {to}
          </Link>
        ) : (
          <h3 className="font-heading text-xs sm:text-sm font-semibold text-foreground truncate">
            {from} <ArrowRight className="inline h-3 w-3 mx-0.5" /> {to}
          </h3>
        )}
        <p className="text-[10px] sm:text-xs text-muted-foreground">{distance}</p>
      </div>
    </div>
    <div className="text-right shrink-0">
      <p className="text-xs sm:text-sm font-bold text-secondary">{price}</p>
      <Button variant="hero" size="sm" className="mt-1 text-[10px] sm:text-xs h-6 sm:h-7 px-2 sm:px-3" onClick={() => handleRouteBook(from, to, distance, price)}>Book</Button>
    </div>
  </div>
);

const allRouteKeywords = [
  ...agraRoutes.map(r => `agra to ${r.to.toLowerCase()} taxi`),
  ...delhiRoutes.map(r => `delhi to ${r.to.toLowerCase()} taxi`),
].join(", ");

const Routes = () => (
  <div className="pt-14 sm:pt-16 lg:pt-[88px]">
    <SEO
      title="Taxi Routes & Pricing | Agra to Delhi, Jaipur, Varanasi Cab Fare"
      description="Check taxi fare from Agra & Delhi to 70+ cities. Agra to Delhi â‚¹3,500, Agra to Jaipur â‚¹3,600, Agra to Varanasi â‚¹8,000. Book outstation cab online. Call +91 8865038345."
      keywords={`outstation taxi routes, taxi fare calculator, ${allRouteKeywords.slice(0, 500)}`}
      canonical="https://shivansh-tour-hub.netlify.app/routes"
    />
    <section className="page-header">
      <div className="container mx-auto text-center">
        <h1 className="page-header-title">Taxi Routes & Pricing</h1>
        <p className="page-header-subtitle">
          Affordable outstation taxi services from Agra and Delhi to all major cities. Transparent pricing, no hidden charges.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading title="Taxi Services From Agra" subtitle="Reliable and affordable cab services from Agra to all major destinations across India." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {agraRoutes.map((r, i) => <RouteCard key={i} from="Agra" to={r.to} distance={r.distance} price={r.price} slug={r.slug} />)}
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <SectionHeading title="Taxi Services From Delhi" subtitle="Book outstation taxi from Delhi to popular cities across North India." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {delhiRoutes.map((r, i) => <RouteCard key={i} from="Delhi" to={r.to} distance={r.distance} price={r.price} slug={r.slug} />)}
        </div>
      </div>
    </section>

    <section className="section-padding bg-secondary text-center">
      <div className="container mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-secondary-foreground">Don't See Your Route?</h2>
        <p className="mt-2 text-secondary-foreground/90 text-sm sm:text-base">Contact us for custom routes and special pricing.</p>
        <div className="mt-6 flex justify-center gap-3 sm:gap-4 flex-wrap">
          <Link to="/contact"><Button variant="default" size="lg" className="text-sm sm:text-base">Get Custom Quote</Button></Link>
          <a href="tel:+918865038345">
            <Button variant="hero-outline" size="lg" className="border-primary text-primary hover:bg-primary/10 gap-2 text-sm sm:text-base">
              <Phone className="h-4 w-4" /> Call Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Routes;

