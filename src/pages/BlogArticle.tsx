import { useParams, Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { blogPosts } from "./Blog";
import { ArrowLeft, Calendar, Clock, User, Phone, ArrowRight } from "lucide-react";

const articleContent: Record<string, { sections: { heading: string; content: string }[] }> = {
  "agra-to-delhi-taxi-complete-guide": {
    sections: [
      { heading: "Overview: Agra to Delhi by Taxi", content: "The Agra to Delhi route is one of the most popular taxi routes in North India. The distance is approximately 230 km via the Yamuna Expressway, and the journey takes about 3-4 hours depending on traffic. Whether you're returning from a Taj Mahal visit or heading to Delhi airport, a taxi is the most comfortable and convenient option." },
      { heading: "Best Route Options", content: "There are two main routes: 1) Yamuna Expressway (fastest, ~3 hours, toll road with smooth driving) and 2) NH-44 via Mathura (slightly longer but scenic, passes through Mathura and Vrindavan). We recommend the Yamuna Expressway for speed and comfort, especially for airport transfers." },
      { heading: "Taxi Fare: Agra to Delhi", content: "Swift Dzire (4-seater): ₹3,500 | Ertiga (7-seater): ₹4,200 | Toyota Innova (7-seater premium): ₹4,800 | Tempo Traveller (12-seater): ₹7,500. All prices include toll charges, driver allowance, and parking. No hidden fees — the price quoted is what you pay." },
      { heading: "What's Included in the Fare?", content: "Our Agra to Delhi taxi fare includes: toll charges on Yamuna Expressway, driver allowance, parking fees, fuel charges, and GST. There are absolutely no hidden charges. You can pay via cash, UPI, or bank transfer." },
      { heading: "Tips for a Comfortable Journey", content: "1) Book in advance during peak tourist season (October-March). 2) Start early morning to avoid Delhi traffic. 3) Keep water and snacks for the highway journey. 4) Our cars are AC with clean interiors and phone chargers. 5) Request a stop at the highway food courts if needed — our drivers are happy to accommodate." },
      { heading: "How to Book", content: "Booking is super easy! Just WhatsApp us at +91 89604 46756 with your pickup date, time, and location. We'll confirm availability instantly. You can also call us 24/7 for immediate bookings. No app download needed — just a simple WhatsApp message gets you a confirmed ride." },
    ]
  },
  "best-places-to-visit-from-agra": {
    sections: [
      { heading: "Top Weekend Getaways from Agra", content: "Agra's central location in North India makes it a perfect base for exploring many incredible destinations. Whether you have a day or a week, there are amazing places within taxi distance that cover heritage, spirituality, nature, and adventure." },
      { heading: "1. Mathura & Vrindavan (58 km)", content: "Just an hour from Agra, the twin cities of Mathura and Vrindavan are the birthplace of Lord Krishna. Visit Krishna Janmabhoomi, Banke Bihari Temple, Prem Mandir (stunning at night), and ISKCON Temple. Taxi fare: ₹1,200 one-way. Perfect for a day trip." },
      { heading: "2. Fatehpur Sikri (40 km)", content: "The abandoned Mughal city built by Emperor Akbar is a UNESCO World Heritage Site. Marvel at the Buland Darwaza (Victory Gate), Jama Masjid, and Panch Mahal. Just 40 minutes by taxi. Can be combined with your Agra sightseeing." },
      { heading: "3. Jaipur – The Pink City (240 km)", content: "Jaipur offers Amber Fort, Hawa Mahal, City Palace, and vibrant bazaars. The drive via NH-21 takes about 4 hours. Taxi fare: ₹3,600. Ideal for a 2-day weekend trip. Our drivers can also guide you to the best local restaurants." },
      { heading: "4. Ranthambore National Park (280 km)", content: "Tiger safari paradise! Best visited from October to June. The drive takes about 5 hours. Taxi fare: ₹4,200. Book a 2-day trip to catch morning and evening safaris. We can help arrange safari permits too." },
      { heading: "5-15. More Destinations", content: "Other amazing trips: Gwalior Fort (120 km, ₹2,200), Orchha (280 km, ₹4,200), Bharatpur Bird Sanctuary (55 km, ₹1,100), Chambal Safari (70 km, ₹1,400), Bateshwar Temples (65 km), Etawah Safari Park (200 km), Lucknow (370 km), Varanasi (560 km), Rishikesh (460 km), and Nainital (380 km). Contact us for custom multi-day itineraries!" },
    ]
  },
  "ayodhya-ram-mandir-tour-guide": {
    sections: [
      { heading: "Ayodhya Ram Mandir: A Complete Visitor's Guide", content: "The newly constructed Ram Mandir in Ayodhya has become one of India's most visited temples. Located approximately 530 km from Agra, this pilgrimage draws millions of devotees annually. Here's everything you need to plan your trip by taxi from Agra." },
      { heading: "Route & Distance from Agra", content: "The Agra to Ayodhya journey covers 530 km via Lucknow (NH-44 to NH-27). The drive takes approximately 8-9 hours with rest stops. We recommend starting early morning (5-6 AM) for a comfortable journey. Our experienced drivers know the best highway stops for food and refreshments." },
      { heading: "Taxi Fare & Car Options", content: "Swift Dzire: ₹7,500 | Ertiga: ₹9,000 | Toyota Innova: ₹10,500. For a round trip with 1-night stay, packages start at ₹4,999 per person (including hotel). All fares include toll, parking, and driver night allowance." },
      { heading: "Darshan Timings & Tips", content: "Ram Mandir is open from 7:00 AM to 11:00 PM. Morning darshan (7-11 AM) is less crowded. Carry minimal belongings — lockers are available near the temple. Dress modestly. Photography is allowed in the outer premises. Free prasad is distributed. VIP darshan passes may be available — check the official website." },
      { heading: "2-Day Itinerary", content: "Day 1: Early morning departure from Agra → Arrive Ayodhya by afternoon → Hotel check-in → Evening visit to Saryu River Ghat → Aarti ceremony. Day 2: Morning darshan at Ram Mandir → Hanuman Garhi → Kanak Bhawan → Nageshwarnath Temple → Dashrath Mahal → Return to Agra by evening." },
      { heading: "Nearby Temples to Visit", content: "Hanuman Garhi (must visit, 1 km from Ram Mandir), Kanak Bhawan (beautiful temple dedicated to Lord Ram and Sita), Nageshwarnath Temple (one of the oldest Shiva temples), Treta Ke Thakur, and Mani Parvat. All within 2-3 km radius and included in our tour itinerary." },
    ]
  },
  "how-to-book-taxi-in-agra": {
    sections: [
      { heading: "The Easiest Way to Book a Taxi in Agra", content: "Booking a taxi in Agra doesn't have to be complicated. While aggregator apps exist, the most reliable and affordable way is to book directly with a trusted local operator like Shivansh Tour & Travels. Here's a comparison of all your options." },
      { heading: "WhatsApp Booking (Recommended)", content: "Simply send a WhatsApp message to +91 89604 46756 with: your pickup location, destination, date, time, and preferred car type. You'll get an instant confirmation with driver details and exact fare. No app needed, no surge pricing, no hidden charges. This is how 80% of our customers book." },
      { heading: "Phone Call Booking", content: "Call us at +91 89604 46756 anytime — we're available 24/7. Our team will help you choose the right car, give you an exact fare quote, and confirm your booking. Perfect if you need a taxi urgently or want to discuss custom requirements." },
      { heading: "Why Direct Booking Beats App Booking", content: "1) No surge pricing — our rates are fixed. 2) Personal service — same driver for your entire trip. 3) Flexible stops — add detours without extra charges. 4) No commission — savings passed to you. 5) Local expertise — our drivers know the best routes, restaurants, and hidden gems." },
      { heading: "How to Avoid Taxi Scams in Agra", content: "1) Always agree on fare BEFORE the trip. 2) Avoid touts at railway stations and tourist spots. 3) Book with established operators who have Google reviews. 4) Get the driver's name and car number before pickup. 5) Pay via UPI for a digital record. With Shivansh Travels, you get transparent pricing and verified drivers — zero scam risk." },
      { heading: "Our Pricing Guide", content: "Local Agra sightseeing (8 hours): ₹1,800-2,500. Airport pickup/drop: ₹800-1,200. Outstation per km: ₹11 (Dzire) to ₹22 (Tempo Traveller). All prices include fuel, driver, and tolls. Contact us for a custom quote tailored to your specific needs." },
    ]
  },
  "rajasthan-road-trip-from-agra": {
    sections: [
      { heading: "The Ultimate Rajasthan Road Trip", content: "A road trip through Rajasthan from Agra is one of India's most iconic travel experiences. Covering royal forts, vibrant cities, desert landscapes, and incredible food — this 6-day itinerary by taxi gives you the best of Rajasthan without the hassle of driving." },
      { heading: "Day 1: Agra → Jaipur (240 km, 4 hrs)", content: "Depart Agra early morning. Arrive Jaipur by lunch. Afternoon: Visit Hawa Mahal and City Palace. Evening: Explore the bustling Johari Bazaar for jewelry shopping. Dinner at Chokhi Dhani for an authentic Rajasthani experience with folk dances and traditional thali. Overnight in Jaipur." },
      { heading: "Day 2: Jaipur → Ajmer → Pushkar (145 km)", content: "Morning: Amber Fort (arrive early to avoid crowds). Drive to Ajmer for lunch and visit Dargah Sharif. Continue to Pushkar — visit Brahma Temple and enjoy the lakeside sunset. The evening bazaar in Pushkar is perfect for souvenirs. Overnight in Pushkar." },
      { heading: "Day 3-4: Pushkar → Jodhpur → Udaipur", content: "Day 3: Drive to Jodhpur (200 km). Visit Mehrangarh Fort (one of India's largest forts), Jaswant Thada, and the blue city streets. Try Mirchi Vada at a local stall. Day 4: Drive to Udaipur (330 km). Evening boat ride on Lake Pichola with City Palace views. Overnight in Udaipur." },
      { heading: "Day 5-6: Udaipur & Return", content: "Day 5: Full day in Udaipur — City Palace, Saheliyon-ki-Bari, Fateh Sagar Lake, and Sajjangarh Monsoon Palace for sunset views. Day 6: Depart for Agra (630 km) with stops at Chittorgarh Fort or drive via Kota. Arrive Agra by late evening." },
      { heading: "Cost & Booking", content: "Complete 6-day Rajasthan tour package: ₹19,999/person (includes car, hotel, driver allowance, toll & parking). Car-only rental: Innova ₹16/km × approx 1,500 km = ~₹24,000 + driver charges. Book via WhatsApp: +91 89604 46756. We customize itineraries based on your interests and budget!" },
    ]
  },
  "varanasi-tour-from-agra-guide": {
    sections: [
      { heading: "Varanasi: The Spiritual Capital of India", content: "Varanasi (Kashi) is one of the oldest continuously inhabited cities in the world and the spiritual capital of India. Located 560 km from Agra, this sacred city on the banks of the Ganges offers an experience unlike anywhere else on earth." },
      { heading: "Getting There from Agra", content: "The Agra to Varanasi drive covers 560 km via the Agra-Lucknow Expressway and NH-31. Journey time: 8-9 hours with stops. We recommend breaking the journey at Lucknow or Prayagraj. Taxi fare: Swift Dzire ₹8,000 | Ertiga ₹9,500 | Innova ₹11,000 (one-way)." },
      { heading: "Day 1: Arrival & Ganga Aarti", content: "Arrive in Varanasi by afternoon. Check into hotel near Dashashwamedh Ghat. Evening: Witness the spectacular Ganga Aarti ceremony — arrive by 5:30 PM for a good spot. The aarti features fire rituals with brass lamps, chanting, and flower offerings. An unforgettable spiritual experience." },
      { heading: "Day 2: Temples & Boat Ride", content: "Early morning: Sunrise boat ride on the Ganges (our driver can arrange this). Visit 84 ghats along the river. Then: Kashi Vishwanath Temple, Manikarnika Ghat (cremation ghat — observe respectfully from a distance). Afternoon: Sarnath — where Buddha gave his first sermon. Visit the Dhamek Stupa and museum." },
      { heading: "Day 3: Exploration & Return", content: "Morning: Tulsi Manas Temple, Sankat Mochan Hanuman Temple. Visit Ramnagar Fort across the river. Enjoy famous Varanasi street food: kachori-sabzi, lassi at Blue Lassi Shop, and Banarasi paan. Afternoon: Begin return journey to Agra." },
      { heading: "3-Day Package Details", content: "Complete Varanasi tour package from Agra: ₹6,999/person. Includes: AC car (round trip), 2 nights hotel, boat ride, driver allowance, toll & parking. Optional add-on: Prayagraj Sangam visit (+₹1,500). Book at +91 89604 46756 or WhatsApp for instant confirmation." },
    ]
  },
};

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  const content = slug ? articleContent[slug] : null;

  if (!post || !content) {
    return (
      <div className="pt-14 sm:pt-16 lg:pt-[88px] section-padding text-center">
        <h1 className="font-heading text-2xl font-bold text-foreground">Article Not Found</h1>
        <Link to="/blog"><Button variant="outline" className="mt-4">← Back to Blog</Button></Link>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "author": { "@type": "Organization", "name": "Shivansh Tour and Travels" },
    "publisher": { "@type": "Organization", "name": "Shivansh Tour and Travels", "url": "https://shivanshtravels.com" },
    "datePublished": "2026-01-01",
    "mainEntityOfPage": `https://shivanshtravels.com/blog/${post.slug}`,
  };

  return (
    <div className="pt-14 sm:pt-16 lg:pt-[88px]">
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.keywords}
        canonical={`https://shivanshtravels.com/blog/${post.slug}`}
        schema={articleSchema}
      />

      {/* Article Header */}
      <section className="bg-primary text-primary-foreground py-10 sm:py-14 px-4">
        <div className="container mx-auto max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-primary-foreground/70 hover:text-secondary transition-colors text-xs sm:text-sm mb-4">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Blog
          </Link>
          <span className="block text-[10px] sm:text-xs font-semibold text-secondary bg-secondary/20 px-2 py-0.5 rounded-full w-fit mb-3">{post.category}</span>
          <h1 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">{post.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-primary-foreground/70">
            <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
            <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <div className="prose-like space-y-8">
            {content.sections.map((s, i) => (
              <div key={i}>
                <h2 className="font-heading text-base sm:text-lg md:text-xl font-bold text-foreground mb-3">{s.heading}</h2>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-10 sm:mt-12 bg-accent rounded-2xl p-5 sm:p-8 text-center border border-border/50">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">Ready to Book This Trip?</h3>
            <p className="mt-2 text-muted-foreground text-xs sm:text-sm">Contact Shivansh Tour & Travels for the best rates and personalized service.</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a href="https://wa.me/918960446756" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" className="gap-2 text-sm">WhatsApp Us <ArrowRight className="h-4 w-4" /></Button>
              </a>
              <a href="tel:+918960446756">
                <Button variant="outline" className="gap-2 text-sm"><Phone className="h-4 w-4" /> Call +91 89604 46756</Button>
              </a>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-10 sm:mt-12">
            <h3 className="font-heading text-base sm:text-lg font-bold text-foreground mb-4">More Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {blogPosts.filter(p => p.slug !== slug).slice(0, 4).map(p => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="bg-card rounded-xl p-4 border border-border/50 hover-lift shadow-sm">
                  <span className="text-[10px] text-secondary font-semibold">{p.category}</span>
                  <h4 className="font-heading text-xs sm:text-sm font-semibold text-foreground mt-1 line-clamp-2">{p.title}</h4>
                  <span className="text-[10px] text-muted-foreground mt-1 block">{p.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogArticle;
