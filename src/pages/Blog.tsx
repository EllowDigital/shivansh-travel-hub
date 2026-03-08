import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  keywords: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "agra-to-delhi-taxi-complete-guide",
    title: "Agra to Delhi Taxi: Complete Guide with Fare, Route & Tips (2026)",
    excerpt: "Planning to travel from Agra to Delhi by taxi? Here's everything you need to know — best routes, fare comparison, car options, and booking tips for a comfortable journey.",
    date: "March 5, 2026",
    readTime: "8 min read",
    author: "Shivansh Travels",
    category: "Travel Guide",
    keywords: "agra to delhi taxi, agra to delhi cab fare, agra to delhi by car, agra to delhi route",
  },
  {
    slug: "best-places-to-visit-from-agra",
    title: "15 Best Places to Visit from Agra by Taxi (Weekend Getaways 2026)",
    excerpt: "Looking for the best day trips and weekend getaways from Agra? Discover 15 amazing destinations you can reach by taxi — from Mathura to Jaipur, Ranthambore to Fatehpur Sikri.",
    date: "February 28, 2026",
    readTime: "10 min read",
    author: "Shivansh Travels",
    category: "Destinations",
    keywords: "places to visit from agra, agra weekend getaways, day trips from agra, agra to mathura, agra to jaipur",
  },
  {
    slug: "ayodhya-ram-mandir-tour-guide",
    title: "Ayodhya Ram Mandir Tour from Agra: Complete Travel Guide (2026)",
    excerpt: "Complete guide to visiting Ayodhya Ram Mandir from Agra — best route, taxi fare, darshan timings, nearby temples, hotels, and a detailed 2-day itinerary.",
    date: "February 20, 2026",
    readTime: "9 min read",
    author: "Shivansh Travels",
    category: "Pilgrimage",
    keywords: "ayodhya tour from agra, ram mandir darshan, ayodhya travel guide, agra to ayodhya taxi",
  },
  {
    slug: "how-to-book-taxi-in-agra",
    title: "How to Book a Taxi in Agra: Cheapest & Safest Options (2026)",
    excerpt: "Confused about booking a taxi in Agra? Compare WhatsApp booking, phone booking, and online options. Learn how to get the best rates and avoid scams.",
    date: "February 15, 2026",
    readTime: "6 min read",
    author: "Shivansh Travels",
    category: "Tips",
    keywords: "book taxi agra, taxi booking agra, cheap taxi agra, safe cab agra, taxi near me agra",
  },
  {
    slug: "rajasthan-road-trip-from-agra",
    title: "Rajasthan Road Trip from Agra: 6-Day Itinerary with Taxi (2026)",
    excerpt: "Plan the perfect Rajasthan road trip from Agra covering Jaipur, Jodhpur, Udaipur, and Pushkar. Day-by-day itinerary, costs, best stops, and taxi booking tips.",
    date: "February 10, 2026",
    readTime: "12 min read",
    author: "Shivansh Travels",
    category: "Road Trips",
    keywords: "rajasthan road trip, agra to jaipur road trip, rajasthan tour by car, rajasthan itinerary",
  },
  {
    slug: "varanasi-tour-from-agra-guide",
    title: "Varanasi Tour from Agra by Taxi: Route, Fare & 3-Day Itinerary",
    excerpt: "Everything about traveling from Agra to Varanasi by taxi — route options, fare breakdown, must-visit ghats, temples, and a complete 3-day sightseeing plan.",
    date: "February 5, 2026",
    readTime: "9 min read",
    author: "Shivansh Travels",
    category: "Pilgrimage",
    keywords: "varanasi tour from agra, agra to varanasi taxi, varanasi travel guide, kashi vishwanath tour",
  },
];

const Blog = () => (
  <div className="pt-14 sm:pt-16 lg:pt-[88px]">
    <SEO
      title="Travel Blog | Taxi Tips, Route Guides & Tour Itineraries from Agra"
      description="Read travel guides, taxi tips, and tour itineraries from Agra. Agra to Delhi guide, Ayodhya tour, Rajasthan road trip, Varanasi travel guide & more."
      keywords="agra travel blog, taxi guide india, tour itinerary agra, travel tips agra, road trip guide india"
      canonical="https://shivanshtravels.com/blog"
    />
    <section className="page-header">
      <div className="container mx-auto text-center">
        <h1 className="page-header-title">Travel Blog</h1>
        <p className="page-header-subtitle">
          Expert travel guides, taxi tips, and tour itineraries to help you plan your perfect trip from Agra.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-card rounded-xl overflow-hidden shadow-md hover-lift border border-border/50 flex flex-col">
              <div className="bg-gradient-to-br from-primary/10 via-accent/50 to-secondary/10 p-6 sm:p-8">
                <span className="text-[10px] sm:text-xs font-semibold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">{post.category}</span>
                <h2 className="font-heading text-sm sm:text-base font-bold text-foreground mt-3 leading-snug line-clamp-3">
                  {post.title}
                </h2>
              </div>
              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-[10px] sm:text-xs text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                  </div>
                </div>
                <Link to={`/blog/${post.slug}`} className="mt-3">
                  <Button variant="outline" size="sm" className="w-full gap-2 text-xs sm:text-sm">
                    Read Article <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-secondary text-center">
      <div className="container mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-secondary-foreground">Ready to Book Your Trip?</h2>
        <p className="mt-2 text-secondary-foreground/90 text-sm sm:text-base">Turn these guides into reality — book a taxi with us today!</p>
        <div className="mt-6 flex justify-center gap-3 flex-wrap">
          <Link to="/contact"><Button variant="default" size="lg" className="text-sm sm:text-base">Book Taxi Now</Button></Link>
          <Link to="/tours"><Button variant="hero-outline" size="lg" className="border-primary text-primary hover:bg-primary/10 text-sm sm:text-base">View Tour Packages</Button></Link>
        </div>
      </div>
    </section>
  </div>
);

export default Blog;
