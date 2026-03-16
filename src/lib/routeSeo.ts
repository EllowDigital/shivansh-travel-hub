export interface City {
  name: string;
  slug: string;
}

export interface RouteSEOData {
  from: City;
  to: City;
  slug: string;
  distanceKm: number;
  travelTimeHours: number;
  oneWayFare: number;
  keywords: string;
}

const CITY_ORDER: City[] = [
  { name: "Agra", slug: "agra" },
  { name: "Delhi", slug: "delhi" },
  { name: "Noida", slug: "noida" },
  { name: "Gurgaon", slug: "gurgaon" },
  { name: "Mathura", slug: "mathura" },
  { name: "Jaipur", slug: "jaipur" },
  { name: "Lucknow", slug: "lucknow" },
  { name: "Chandigarh", slug: "chandigarh" },
  { name: "Haridwar", slug: "haridwar" },
  { name: "Rishikesh", slug: "rishikesh" },
  { name: "Vrindavan", slug: "vrindavan" },
];

const KNOWN_ROUTE_DATA: Record<
  string,
  { distanceKm: number; travelTimeHours: number; oneWayFare: number }
> = {
  "agra-delhi": { distanceKm: 230, travelTimeHours: 4, oneWayFare: 3500 },
  "delhi-agra": { distanceKm: 230, travelTimeHours: 4, oneWayFare: 3500 },
  "agra-jaipur": { distanceKm: 240, travelTimeHours: 4.5, oneWayFare: 3600 },
  "jaipur-agra": { distanceKm: 240, travelTimeHours: 4.5, oneWayFare: 3600 },
  "agra-mathura": { distanceKm: 58, travelTimeHours: 1.5, oneWayFare: 1200 },
  "mathura-agra": { distanceKm: 58, travelTimeHours: 1.5, oneWayFare: 1200 },
  "agra-lucknow": { distanceKm: 370, travelTimeHours: 6.5, oneWayFare: 5500 },
  "lucknow-agra": { distanceKm: 370, travelTimeHours: 6.5, oneWayFare: 5500 },
  "delhi-noida": { distanceKm: 25, travelTimeHours: 1, oneWayFare: 800 },
  "noida-delhi": { distanceKm: 25, travelTimeHours: 1, oneWayFare: 800 },
  "delhi-gurgaon": { distanceKm: 35, travelTimeHours: 1.25, oneWayFare: 900 },
  "gurgaon-delhi": { distanceKm: 35, travelTimeHours: 1.25, oneWayFare: 900 },
  "delhi-chandigarh": { distanceKm: 250, travelTimeHours: 5, oneWayFare: 3800 },
  "chandigarh-delhi": { distanceKm: 250, travelTimeHours: 5, oneWayFare: 3800 },
};

function estimateRoute(
  from: City,
  to: City,
): { distanceKm: number; travelTimeHours: number; oneWayFare: number } {
  const key = `${from.slug}-${to.slug}`;
  const known = KNOWN_ROUTE_DATA[key];
  if (known) return known;

  const fromIdx = CITY_ORDER.findIndex((c) => c.slug === from.slug);
  const toIdx = CITY_ORDER.findIndex((c) => c.slug === to.slug);
  const gap = Math.abs(fromIdx - toIdx) + 1;
  const distanceKm = Math.round(
    70 + gap * 52 + (fromIdx % 3) * 11 + (toIdx % 4) * 9,
  );
  const travelTimeHours = Number((distanceKm / 58).toFixed(1));
  const oneWayFare = Math.max(1200, Math.round(distanceKm * 14));
  return { distanceKm, travelTimeHours, oneWayFare };
}

function formatKeywords(from: string, to: string): string {
  return [
    `${from.toLowerCase()} to ${to.toLowerCase()} taxi`,
    `${from.toLowerCase()} to ${to.toLowerCase()} cab`,
    `${to.toLowerCase()} taxi service`,
    "agra taxi service",
    "outstation taxi booking",
    "delhi airport to agra taxi",
    "cheapest agra taxi service",
    "agra tour taxi",
  ].join(", ");
}

export const cities: City[] = CITY_ORDER;

export const routePages: RouteSEOData[] = CITY_ORDER.flatMap((from) =>
  CITY_ORDER.filter((to) => to.slug !== from.slug).map((to) => {
    const metrics = estimateRoute(from, to);
    return {
      from,
      to,
      slug: `${from.slug}-to-${to.slug}-taxi`,
      distanceKm: metrics.distanceKm,
      travelTimeHours: metrics.travelTimeHours,
      oneWayFare: metrics.oneWayFare,
      keywords: formatKeywords(from.name, to.name),
    };
  }),
);

export function findRouteBySlug(slug: string): RouteSEOData | undefined {
  return routePages.find((route) => route.slug === slug);
}

export function findRouteByCities(
  fromSlug: string,
  toSlug: string,
): RouteSEOData | undefined {
  return routePages.find(
    (route) => route.from.slug === fromSlug && route.to.slug === toSlug,
  );
}

export function getRelatedRoutes(
  route: RouteSEOData,
  limit = 6,
): RouteSEOData[] {
  const sameOrigin = routePages.filter(
    (r) => r.from.slug === route.from.slug && r.to.slug !== route.to.slug,
  );
  const reverse = routePages.find(
    (r) => r.from.slug === route.to.slug && r.to.slug === route.from.slug,
  );
  const priority = reverse ? [reverse, ...sameOrigin] : sameOrigin;
  return priority.slice(0, limit);
}

export function getFareOptions(baseFare: number) {
  return {
    dzire: baseFare,
    ertiga: Math.round(baseFare * 1.2),
    innova: Math.round(baseFare * 1.35),
    tempo: Math.round(baseFare * 2.1),
  };
}

export function getRouteFAQs(route: RouteSEOData) {
  const fare = getFareOptions(route.oneWayFare);
  return [
    {
      question: `What is the ${route.from.name} to ${route.to.name} taxi fare?`,
      answer: `One-way taxi fare starts around Rs ${fare.dzire} for sedan. Ertiga is around Rs ${fare.ertiga}, Innova around Rs ${fare.innova}, and Tempo Traveller around Rs ${fare.tempo}. Final fare depends on date, pickup point, and toll updates.`,
    },
    {
      question: `How long does ${route.from.name} to ${route.to.name} cab travel take?`,
      answer: `Typical travel time is about ${route.travelTimeHours} hours for approximately ${route.distanceKm} km, depending on traffic, weather, and highway conditions.`,
    },
    {
      question: `Is one-way cab available for ${route.from.name} to ${route.to.name}?`,
      answer:
        "Yes, one-way and round-trip cabs are both available, with fixed transparent pricing and no hidden charges.",
    },
    {
      question: "Can I book by WhatsApp for instant confirmation?",
      answer:
        "Yes. Share pickup date, time, and passenger count on WhatsApp and the booking team confirms car availability quickly.",
    },
    {
      question: "Are toll tax, driver allowance, and parking included?",
      answer:
        "Most intercity fare quotes include toll and driver charges. Parking or state tax is shared before booking confirmation to keep billing transparent.",
    },
  ];
}

export function getRouteWordySections(
  route: RouteSEOData,
): Array<{ heading: string; body: string }> {
  return [
    {
      heading: `Book ${route.from.name} to ${route.to.name} Taxi at the Best Price`,
      body: `${route.from.name} to ${route.to.name} taxi booking is one of the most searched intercity travel services in North India, especially for travelers who want comfort, door-to-door pickup, and predictable pricing. This route covers approximately ${route.distanceKm} km and usually takes about ${route.travelTimeHours} hours. Instead of managing bus transfers, train delays, and local transport hassles, a private cab gives complete flexibility in pickup timing, short refreshment halts, luggage handling, and family-friendly comfort. Shivansh Tour and Travels provides clean AC cabs, verified drivers, and upfront fare sharing before trip confirmation. Whether you are traveling for business meetings, family functions, tourism, religious visits, or airport transfers, this service is planned for punctuality and safety. Customers can choose one-way cab, round trip, or multi-city plan with custom stoppages based on their itinerary and budget goals.`,
    },
    {
      heading: `${route.from.name} to ${route.to.name} Route, Distance, and Travel Time`,
      body: `The recommended ${route.from.name} to ${route.to.name} cab route is planned according to traffic flow, expressway conditions, toll convenience, and passenger comfort. On most days, the practical route distance stays close to ${route.distanceKm} km, and average road travel remains around ${route.travelTimeHours} hours. Morning departures usually reduce city congestion and help passengers reach destination on schedule. For corporate users and airport drop customers, drivers can keep extra time buffer to avoid last-minute delays. Families often request breakfast or tea halts, and those stops are accommodated without confusion. During festivals or long weekends, route load can increase, so advance booking is recommended. If passengers prefer specific intermediate cities, temple stops, sightseeing points, or food break preferences, the route plan can be adjusted before departure and shared on WhatsApp so everyone has clarity before the trip starts.`,
    },
    {
      heading: `${route.from.name} to ${route.to.name} Taxi Fare Estimate and Car Options`,
      body: `Affordable pricing is a major reason travelers choose private taxi booking for ${route.from.name} to ${route.to.name}. Estimated sedan fare starts near Rs ${getFareOptions(route.oneWayFare).dzire}, which suits solo travelers and small families. Ertiga option around Rs ${getFareOptions(route.oneWayFare).ertiga} is useful for larger groups with additional luggage. Innova category near Rs ${getFareOptions(route.oneWayFare).innova} is preferred for premium comfort and smoother long-distance experience. Tempo Traveller around Rs ${getFareOptions(route.oneWayFare).tempo} works well for group tours, weddings, and corporate movement. Fare can vary with pickup timing, waiting request, holiday traffic, and local authority tax changes, but the team shares the final quote before confirming your trip. This transparent quotation method helps avoid hidden costs and makes budgeting easier for both one-way and return journeys.`,
    },
    {
      heading: `Why Choose Shivansh Tour and Travels for ${route.from.name} to ${route.to.name} Cab Service`,
      body: `A reliable intercity taxi service is defined by driver behavior, vehicle condition, punctuality, and support responsiveness. Shivansh Tour and Travels focuses on each of these points for every ${route.from.name} to ${route.to.name} booking. Drivers are experienced with highway driving and customer handling. Cars are cleaned regularly and checked for AC, brakes, lights, and tire condition before dispatch. Booking confirmation includes route, fare, and contact details so passengers have complete visibility. The support team remains active to coordinate if pickup landmark changes or live location support is needed. This service is especially suitable for women travelers, senior citizens, and families traveling with children because comfort and safety are treated as non-negotiable standards. Many repeat users book directly through WhatsApp because the process is quick, straightforward, and dependable across weekdays and peak travel seasons.`,
    },
    {
      heading: `Local SEO Travel Coverage and Service Areas`,
      body: `Apart from the ${route.from.name} to ${route.to.name} route, Shivansh Tour and Travels offers extensive local and outstation service from Agra, Delhi, Noida, Gurgaon, Mathura, Jaipur, Lucknow, Chandigarh, Haridwar, Rishikesh, and Vrindavan. This broad coverage helps travelers plan onward journeys without changing operators at every stop. For example, after reaching ${route.to.name}, you can continue toward nearby destinations with the same booking support model. Airport pickup and drop requests, hotel pickup, railway station pickup, and temple-tour combination plans are supported with prior confirmation. Since many users search route-specific keywords like "${route.from.name.toLowerCase()} to ${route.to.name.toLowerCase()} taxi" or "${route.from.name.toLowerCase()} to ${route.to.name.toLowerCase()} cab service", this page is built to provide all practical details in one place: fare guidance, distance estimate, booking steps, route clarity, and support assurance.`,
    },
    {
      heading: `How to Book ${route.from.name} to ${route.to.name} Taxi Online`,
      body: `Booking is intentionally simple. Share journey date, pickup location, passenger count, and destination on WhatsApp or call directly. The team responds with car options, fare estimate, and travel timeline. Once you confirm, booking details are locked and dispatch communication is shared before pickup. If you need round trip, multi-day hold, or custom halts, mention those points during confirmation so pricing remains transparent. For business travelers, invoice-friendly details can be shared in advance. For families, suitable car category is recommended based on luggage and seat requirement. This quick process saves time compared to app-based surge fluctuations and avoids confusion at the last minute. With clear pre-trip communication and route planning, passengers can focus on their travel purpose while the operations team handles the logistics end-to-end.`,
    },
  ];
}

export function getAirportToAgraRoute(): RouteSEOData {
  return {
    from: { name: "Delhi Airport", slug: "delhi-airport" },
    to: { name: "Agra", slug: "agra" },
    slug: "delhi-airport-to-agra-taxi",
    distanceKm: 235,
    travelTimeHours: 4.5,
    oneWayFare: 3900,
    keywords:
      "delhi airport to agra taxi, igi airport to agra cab, agra airport transfer, delhi to agra one way taxi",
  };
}
