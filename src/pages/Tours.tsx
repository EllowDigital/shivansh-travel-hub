import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Clock, IndianRupee, Calendar, CheckCircle, ArrowRight } from "lucide-react";

const tours = [
  {
    name: "Ayodhya Tour", duration: "2 Days / 1 Night", price: "â‚¹4,999",
    highlights: "Ram Mandir, Hanuman Garhi, Kanak Bhawan, Saryu River Ghat",
    itinerary: ["Day 1: Pickup â†’ Drive to Ayodhya â†’ Ram Mandir & Hanuman Garhi â†’ Evening Saryu Aarti", "Day 2: Kanak Bhawan â†’ Nageshwarnath Temple â†’ Dashrath Mahal â†’ Return"],
    included: ["AC Car", "Hotel (1 Night)", "Driver Allowance", "Toll & Parking"],
  },
  {
    name: "Varanasi Tour", duration: "3 Days / 2 Nights", price: "â‚¹6,999",
    highlights: "Kashi Vishwanath, Ganga Aarti, Sarnath, Boat Ride",
    itinerary: ["Day 1: Arrival â†’ Hotel check-in â†’ Evening Ganga Aarti at Dashashwamedh Ghat", "Day 2: Kashi Vishwanath â†’ Manikarnika Ghat â†’ Boat ride â†’ Sarnath", "Day 3: Tulsi Manas Temple â†’ Ramnagar Fort â†’ Return"],
    included: ["AC Car", "Hotel (2 Nights)", "Boat Ride", "Driver Allowance", "Toll & Parking"],
  },
  {
    name: "Prayagraj Tour", duration: "2 Days / 1 Night", price: "â‚¹3,999",
    highlights: "Triveni Sangam, Anand Bhawan, Allahabad Fort, Khusro Bagh",
    itinerary: ["Day 1: Pickup â†’ Triveni Sangam boat ride â†’ Anand Bhawan Museum", "Day 2: Allahabad Fort â†’ Khusro Bagh â†’ Hanuman Mandir â†’ Return"],
    included: ["AC Car", "Hotel (1 Night)", "Boat Ride at Sangam", "Driver Allowance"],
  },
  {
    name: "Mathura Vrindavan Tour", duration: "2 Days / 1 Night", price: "â‚¹4,499",
    highlights: "Krishna Janmabhoomi, Banke Bihari, Prem Mandir, Govardhan",
    itinerary: ["Day 1: Mathura: Krishna Janmabhoomi, Dwarkadhish Temple â†’ Vrindavan: Banke Bihari", "Day 2: Prem Mandir â†’ ISKCON Temple â†’ Govardhan Parikrama â†’ Return"],
    included: ["AC Car", "Hotel (1 Night)", "Driver Allowance", "Toll & Parking"],
  },
  {
    name: "Uttarakhand Tour", duration: "5 Days / 4 Nights", price: "â‚¹14,999",
    highlights: "Mussoorie, Rishikesh, Haridwar, Nainital",
    itinerary: ["Day 1: Pickup â†’ Haridwar â†’ Har Ki Pauri â†’ Evening Ganga Aarti", "Day 2: Rishikesh â†’ Laxman Jhula, Ram Jhula â†’ Rafting (optional)", "Day 3: Drive to Mussoorie â†’ Kempty Falls, Mall Road, Gun Hill", "Day 4: Mussoorie to Nainital â†’ Naini Lake, Naina Devi Temple", "Day 5: Tiffin Top, Snow View Point â†’ Return"],
    included: ["AC Car", "Hotel (4 Nights)", "Driver Allowance", "Toll & Parking", "Sightseeing"],
  },
  {
    name: "Agra Tour", duration: "1 Day", price: "â‚¹2,499",
    highlights: "Taj Mahal, Agra Fort, Mehtab Bagh, Fatehpur Sikri",
    itinerary: ["Day 1: Taj Mahal sunrise â†’ Agra Fort â†’ Mehtab Bagh â†’ Fatehpur Sikri â†’ Return"],
    included: ["AC Car", "Driver Allowance", "Toll & Parking"],
  },
  {
    name: "Rajasthan Tour", duration: "6 Days / 5 Nights", price: "â‚¹19,999",
    highlights: "Jaipur, Jodhpur, Udaipur, Ajmer",
    itinerary: ["Day 1: Jaipur â†’ Hawa Mahal, City Palace â†’ Evening Chokhi Dhani", "Day 2: Amber Fort â†’ Ajmer â†’ Dargah Sharif", "Day 3: Pushkar â†’ Drive to Jodhpur â†’ Mehrangarh Fort", "Day 4: Jodhpur â†’ Drive to Udaipur", "Day 5: Udaipur: City Palace, Lake Pichola boat ride", "Day 6: Fateh Sagar Lake â†’ Return"],
    included: ["AC Car", "Hotel (5 Nights)", "Driver Allowance", "Toll & Parking", "Sightseeing"],
  },
  {
    name: "Shimla Manali Tour", duration: "5 Days / 4 Nights", price: "â‚¹15,999",
    highlights: "Shimla Mall Road, Kufri, Solang Valley, Rohtang Pass",
    itinerary: ["Day 1: Drive to Shimla â†’ Mall Road, Ridge, Christ Church", "Day 2: Kufri, Jakhoo Temple â†’ Drive to Manali", "Day 3: Solang Valley â†’ Hadimba Temple", "Day 4: Rohtang Pass â†’ Old Manali, Vashisht Hot Springs", "Day 5: Manikaran Sahib â†’ Return"],
    included: ["AC Car", "Hotel (4 Nights)", "Driver Allowance", "Toll & Parking"],
  },
];

const Tours = () => (
  <div className="pt-14 sm:pt-16 lg:pt-[88px]">
    <SEO
      title="Tour Packages from Agra | Ayodhya, Varanasi, Rajasthan, Shimla Manali"
      description="Book all-inclusive tour packages from Agra. Ayodhya â‚¹4,999, Varanasi â‚¹6,999, Rajasthan â‚¹19,999, Shimla Manali â‚¹15,999. Hotel + Car + Sightseeing included. Call +91 8865038345."
      keywords="tour packages from agra, ayodhya tour package, varanasi tour package, rajasthan tour package, shimla manali tour, mathura vrindavan tour, uttarakhand tour package, agra tour package, pilgrimage tour india"
      canonical="https://shivansh-tour-hub.netlify.app/tours"
    />
    <section className="page-header">
      <div className="container mx-auto text-center">
        <h1 className="page-header-title">Tour Packages</h1>
        <p className="page-header-subtitle">
          Explore India's best destinations with our curated all-inclusive packages from Agra.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto space-y-6 sm:space-y-8">
        {tours.map((t, i) => (
          <article key={i} className="bg-card rounded-xl shadow-md border border-border/50 overflow-hidden">
            <div className="bg-accent/50 p-4 sm:p-6 border-b border-border">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-foreground">{t.name}</h2>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> {t.duration}</span>
                  <span className="flex items-center gap-1 text-secondary font-bold text-base sm:text-lg">{t.price}</span>
                </div>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground"><strong className="text-foreground">Highlights:</strong> {t.highlights}</p>
            </div>
            <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3 flex items-center gap-2 text-sm sm:text-base"><Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" /> Itinerary</h3>
                <ul className="space-y-2">
                  {t.itinerary.map((day, j) => (
                    <li key={j} className="text-xs sm:text-sm text-muted-foreground pl-3 sm:pl-4 border-l-2 border-secondary/30 py-1">{day}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3 flex items-center gap-2 text-sm sm:text-base"><CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" /> What's Included</h3>
                <ul className="space-y-1.5 mb-5">
                  {t.included.map((item, j) => (
                    <li key={j} className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" /> {item}</li>
                  ))}
                </ul>
                <Link to="/contact"><Button variant="hero" className="w-full sm:w-auto gap-2 text-xs sm:text-sm">Enquire Now <ArrowRight className="h-3.5 w-3.5" /></Button></Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  </div>
);

export default Tours;

