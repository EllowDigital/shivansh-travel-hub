import { useEffect, useMemo, useState } from "react";
import {
  MessageCircle,
  X,
  Send,
  ArrowRight,
  MapPin,
  Navigation,
  Car,
  Calendar,
  User,
  Phone,
  Check,
  Loader2,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { openWhatsAppMessage } from "@/lib/whatsapp";
import {
  searchLocationSuggestions,
  type LocationSuggestion,
} from "@/lib/locationSearch";

const carOptions = [
  { name: "Swift Dzire", seats: "4 Seater", price: "Rs 11/km" },
  { name: "Ertiga", seats: "7 Seater", price: "Rs 14/km" },
  { name: "Toyota Innova", seats: "7 Seater Premium", price: "Rs 16/km" },
  { name: "Tempo Traveller", seats: "12 Seater", price: "Rs 22/km" },
];

type Step =
  | "welcome"
  | "pickup"
  | "drop"
  | "car"
  | "date"
  | "name"
  | "phone"
  | "confirm";

const WHATSAPP_NUMBER = "918865038345";

const getDayPeriodLabel = (hour24: number) => {
  if (hour24 >= 5 && hour24 < 12) return "Morning";
  if (hour24 >= 12 && hour24 < 17) return "Afternoon";
  if (hour24 >= 17 && hour24 < 21) return "Evening";
  return "Night";
};

const getReadableDateTimeDetails = (value: string) => {
  const input = value.trim();
  if (!input) return "";

  const amPmMatch = input.match(
    /\b(1[0-2]|0?[1-9])(?::([0-5]\d))?\s*(AM|PM)\b/i,
  );
  if (amPmMatch) {
    const hour12 = Number(amPmMatch[1]);
    const minute = amPmMatch[2] ?? "00";
    const period = amPmMatch[3].toUpperCase();
    const hour24 = period === "PM" ? (hour12 % 12) + 12 : hour12 % 12;
    return `${hour12}:${minute} ${period} (${getDayPeriodLabel(hour24)})`;
  }

  const twentyFourHourMatch = input.match(/\b([01]?\d|2[0-3]):([0-5]\d)\b/);
  if (twentyFourHourMatch) {
    const hour24 = Number(twentyFourHourMatch[1]);
    const minute = twentyFourHourMatch[2];
    const period = hour24 >= 12 ? "PM" : "AM";
    const hour12 = hour24 % 12 || 12;
    return `${hour12}:${minute} ${period} (${getDayPeriodLabel(hour24)})`;
  }

  return "";
};

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("welcome");
  const [data, setData] = useState({
    pickup: "",
    drop: "",
    car: "",
    date: "",
    name: "",
    phone: "",
  });
  const [inputVal, setInputVal] = useState("");

  const [locationSuggestions, setLocationSuggestions] = useState<
    LocationSuggestion[]
  >([]);
  const [searchingLocation, setSearchingLocation] = useState(false);

  const locationStep = step === "pickup" || step === "drop";

  useEffect(() => {
    if (!locationStep || inputVal.trim().length < 3) {
      setLocationSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      setSearchingLocation(true);
      const results = await searchLocationSuggestions(inputVal.trim());
      setLocationSuggestions(results);
      setSearchingLocation(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [inputVal, locationStep]);

  const reset = () => {
    setStep("welcome");
    setData({ pickup: "", drop: "", car: "", date: "", name: "", phone: "" });
    setInputVal("");
    setLocationSuggestions([]);
  };

  const applyLocationValue = (value: string) => {
    const finalValue = value.trim();
    if (!finalValue) return;

    if (step === "pickup") {
      setData((d) => ({ ...d, pickup: finalValue }));
      setInputVal("");
      setLocationSuggestions([]);
      setStep("drop");
      return;
    }

    if (step === "drop") {
      setData((d) => ({ ...d, drop: finalValue }));
      setInputVal("");
      setLocationSuggestions([]);
      setStep("car");
    }
  };

  const handleSubmit = () => {
    if (step === "welcome") {
      setStep("pickup");
      return;
    }
    if (step === "pickup") {
      applyLocationValue(inputVal);
      return;
    }
    if (step === "drop") {
      applyLocationValue(inputVal);
      return;
    }
    if (step === "date" && inputVal.trim()) {
      setData((d) => ({ ...d, date: inputVal.trim() }));
      setInputVal("");
      setStep("name");
      return;
    }
    if (step === "name" && inputVal.trim()) {
      setData((d) => ({ ...d, name: inputVal.trim() }));
      setInputVal("");
      setStep("phone");
      return;
    }
    if (step === "phone" && inputVal.trim()) {
      setData((d) => ({ ...d, phone: inputVal.trim() }));
      setInputVal("");
      setStep("confirm");
    }
  };

  const handleCarSelect = (car: string) => {
    setData((d) => ({ ...d, car }));
    setStep("date");
  };

  const sendToWhatsApp = () => {
    const timeDetails = getReadableDateTimeDetails(data.date);

    const text = [
      `TAXI BOOKING REQUEST`,
      `--------------------`,
      ``,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Pickup: ${data.pickup}`,
      `Drop: ${data.drop}`,
      `Car: ${data.car}`,
      `Date: ${data.date}`,
      timeDetails ? `Time: ${timeDetails}` : "",
      ``,
      `Please confirm availability and fare.`,
      ``,
      `--------------------`,
      `Sent via Shivansh Travels Website`,
    ].join("\n");

    const opened = openWhatsAppMessage(WHATSAPP_NUMBER, text);
    if (!opened) {
      toast.error("Popup blocked. Please allow popups and try again.");
      return;
    }

    toast.success("Opening WhatsApp...");
    setOpen(false);
    reset();
  };

  const messages = useMemo(() => {
    const msgs: {
      from: "bot" | "user";
      text: string;
      jsx?: React.ReactNode;
    }[] = [];

    msgs.push({
      from: "bot",
      text: "Hi! Welcome to Shivansh Tour & Travels. I will help you book a taxi in a few steps.",
    });

    if (step === "welcome") {
      msgs.push({
        from: "bot",
        text: "",
        jsx: (
          <Button
            variant="hero"
            size="sm"
            className="w-full gap-2 text-xs mt-1"
            onClick={() => setStep("pickup")}
          >
            Start Booking <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        ),
      });
      return msgs;
    }

    msgs.push({ from: "bot", text: "Pickup location?" });
    if (data.pickup) {
      msgs.push({ from: "user", text: data.pickup });
      msgs.push({ from: "bot", text: "Drop location?" });
    }
    if (data.drop) {
      msgs.push({ from: "user", text: data.drop });
      msgs.push({ from: "bot", text: "Choose your car:" });
    }
    if (data.car) {
      msgs.push({ from: "user", text: data.car });
      msgs.push({
        from: "bot",
        text: "Travel date and time? (e.g., 15 March, 8 AM)",
      });
    }
    if (data.date) {
      msgs.push({ from: "user", text: data.date });
      msgs.push({ from: "bot", text: "Your name?" });
    }
    if (data.name) {
      msgs.push({ from: "user", text: data.name });
      msgs.push({ from: "bot", text: "Phone number?" });
    }
    if (data.phone) {
      msgs.push({ from: "user", text: data.phone });
      msgs.push({ from: "bot", text: "Great! Confirm this booking:" });
    }

    return msgs;
  }, [step, data]);

  return (
    <>
      {open && (
        <div className="fixed bottom-20 right-3 sm:right-5 z-[60] w-[calc(100vw-24px)] max-w-[340px] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden animate-fade-up">
          <div className="bg-success text-primary-foreground p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold text-xs">Shivansh Travels</p>
                <p className="text-[10px] opacity-80">Online | Quick reply</p>
              </div>
            </div>
            <button
              onClick={() => {
                setOpen(false);
                reset();
              }}
              className="hover:bg-primary-foreground/10 p-1 rounded-full transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="h-[320px] overflow-y-auto p-3 space-y-2 bg-muted/30">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-3 py-2 text-xs leading-relaxed ${
                    m.from === "user"
                      ? "bg-success text-primary-foreground rounded-br-sm"
                      : "bg-card text-foreground shadow-sm border border-border/50 rounded-bl-sm"
                  }`}
                >
                  {m.jsx || m.text}
                </div>
              </div>
            ))}

            {step === "car" && (
              <div className="space-y-1.5 mt-1">
                {carOptions.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => handleCarSelect(c.name)}
                    className="w-full bg-card rounded-lg p-2.5 border border-border/50 hover:border-secondary shadow-sm text-left flex items-center justify-between gap-2 transition-colors"
                  >
                    <div>
                      <p className="font-semibold text-foreground text-xs">
                        {c.name}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        {c.seats}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-secondary shrink-0">
                      {c.price}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {step === "confirm" && (
              <div className="bg-card rounded-xl p-3 border border-border/50 shadow-sm space-y-1.5">
                <div className="text-[10px] text-muted-foreground space-y-1">
                  <p className="flex items-center gap-1.5">
                    <MapPin className="h-3 w-3 text-secondary" />{" "}
                    <strong>Pickup:</strong> {data.pickup}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Navigation className="h-3 w-3 text-secondary" />{" "}
                    <strong>Drop:</strong> {data.drop}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Car className="h-3 w-3 text-secondary" />{" "}
                    <strong>Car:</strong> {data.car}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Calendar className="h-3 w-3 text-secondary" />{" "}
                    <strong>Date:</strong> {data.date}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <User className="h-3 w-3 text-secondary" />{" "}
                    <strong>Name:</strong> {data.name}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Phone className="h-3 w-3 text-secondary" />{" "}
                    <strong>Phone:</strong> {data.phone}
                  </p>
                </div>
                <Button
                  variant="hero"
                  size="sm"
                  className="w-full gap-2 text-xs mt-2 bg-success hover:bg-success/90"
                  onClick={sendToWhatsApp}
                >
                  <Check className="h-3.5 w-3.5" /> Confirm & Send on WhatsApp
                </Button>
                <button
                  onClick={reset}
                  className="w-full text-center text-[10px] text-muted-foreground hover:text-foreground mt-1 transition-colors"
                >
                  Start Over
                </button>
              </div>
            )}
          </div>

          {["pickup", "drop", "date", "name", "phone"].includes(step) && (
            <div className="p-2 border-t border-border bg-card">
              {locationStep && inputVal.trim().length >= 3 && (
                <div className="max-h-24 overflow-auto mb-2 space-y-1">
                  {searchingLocation ? (
                    <div className="text-[10px] text-muted-foreground px-1.5 py-1 inline-flex items-center gap-1.5">
                      <Loader2 className="h-3 w-3 animate-spin" /> Searching
                      places...
                    </div>
                  ) : (
                    <>
                      {locationSuggestions.map((s) => (
                        <button
                          type="button"
                          key={s.id}
                          onClick={() => applyLocationValue(s.label)}
                          className="w-full text-left text-[10px] px-2 py-1.5 rounded-md bg-muted hover:bg-accent text-foreground transition-colors"
                        >
                          {s.label}
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() => applyLocationValue(inputVal)}
                        className="w-full text-left text-[10px] px-2 py-1.5 rounded-md bg-muted hover:bg-accent text-secondary transition-colors"
                      >
                        Use typed location: "{inputVal.trim()}"
                      </button>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(inputVal.trim())}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-[10px] px-2 py-1.5 rounded-md bg-muted hover:bg-accent text-muted-foreground transition-colors"
                      >
                        <span className="inline-flex items-center gap-1">
                          <Search className="h-3 w-3" /> Search on Google Maps
                        </span>
                      </a>
                    </>
                  )}
                </div>
              )}

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder={
                    step === "pickup"
                      ? "Enter pickup location..."
                      : step === "drop"
                        ? "Enter drop location..."
                        : step === "date"
                          ? "e.g., 15 March 2026, 8 AM"
                          : step === "name"
                            ? "Enter your name..."
                            : "Enter phone number..."
                  }
                  className="flex-1 bg-muted rounded-lg px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground outline-none border-none"
                  autoFocus
                />
                <button
                  type="submit"
                  className="w-8 h-8 rounded-full bg-success flex items-center justify-center text-primary-foreground hover:bg-success/90 transition-colors shrink-0"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>
          )}
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-3 sm:right-5 z-50 bg-success text-primary-foreground rounded-full p-3 sm:p-4 shadow-lg hover:scale-110 transition-transform"
        style={!open ? { animation: "bounce 2s ease-in-out 3" } : undefined}
        aria-label="Book via WhatsApp"
      >
        {open ? (
          <X className="h-5 w-5 sm:h-6 sm:w-6" />
        ) : (
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
        )}
      </button>
    </>
  );
};

export default WhatsAppButton;
