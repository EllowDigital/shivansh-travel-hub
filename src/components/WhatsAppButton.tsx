import { useState } from "react";
import { MessageCircle, X, Send, ArrowRight, MapPin, Navigation, Car, Calendar, User, Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const carOptions = [
  { name: "Swift Dzire", seats: "4 Seater", price: "₹11/km" },
  { name: "Ertiga", seats: "7 Seater", price: "₹14/km" },
  { name: "Toyota Innova", seats: "7 Seater Premium", price: "₹16/km" },
  { name: "Tempo Traveller", seats: "12 Seater", price: "₹22/km" },
];

type Step = "welcome" | "pickup" | "drop" | "car" | "date" | "name" | "phone" | "confirm";

const WHATSAPP_NUMBER = "918960446756";

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("welcome");
  const [data, setData] = useState({ pickup: "", drop: "", car: "", date: "", name: "", phone: "" });
  const [inputVal, setInputVal] = useState("");

  const reset = () => {
    setStep("welcome");
    setData({ pickup: "", drop: "", car: "", date: "", name: "", phone: "" });
    setInputVal("");
  };

  const handleSubmit = () => {
    if (step === "welcome") { setStep("pickup"); return; }
    if (step === "pickup" && inputVal.trim()) { setData(d => ({ ...d, pickup: inputVal.trim() })); setInputVal(""); setStep("drop"); return; }
    if (step === "drop" && inputVal.trim()) { setData(d => ({ ...d, drop: inputVal.trim() })); setInputVal(""); setStep("car"); return; }
    if (step === "date" && inputVal.trim()) { setData(d => ({ ...d, date: inputVal.trim() })); setInputVal(""); setStep("name"); return; }
    if (step === "name" && inputVal.trim()) { setData(d => ({ ...d, name: inputVal.trim() })); setInputVal(""); setStep("phone"); return; }
    if (step === "phone" && inputVal.trim()) { setData(d => ({ ...d, phone: inputVal.trim() })); setInputVal(""); setStep("confirm"); return; }
  };

  const handleCarSelect = (car: string) => {
    setData(d => ({ ...d, car }));
    setStep("date");
  };

  const sendToWhatsApp = () => {
    const text = [
      `🚕 *TAXI BOOKING REQUEST*`,
      `━━━━━━━━━━━━━━━━━━`,
      ``,
      `👤 *Name:* ${data.name}`,
      `📱 *Phone:* ${data.phone}`,
      `📍 *Pickup:* ${data.pickup}`,
      `🏁 *Drop:* ${data.drop}`,
      `🚗 *Car:* ${data.car}`,
      `📅 *Date:* ${data.date}`,
      ``,
      `Please confirm availability and fare.`,
      ``,
      `━━━━━━━━━━━━━━━━━━`,
      `Sent via Shivansh Travels Website`,
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    setOpen(false);
    reset();
  };

  const renderMessages = () => {
    const msgs: { from: "bot" | "user"; text: string; jsx?: React.ReactNode }[] = [];

    msgs.push({ from: "bot", text: "👋 Hi! Welcome to Shivansh Tour & Travels. I'll help you book a taxi in just a few steps!" });

    if (step === "welcome") {
      msgs.push({ from: "bot", text: "", jsx: (
        <Button variant="hero" size="sm" className="w-full gap-2 text-xs mt-1" onClick={() => setStep("pickup")}>
          Book a Taxi Now <ArrowRight className="h-3.5 w-3.5" />
        </Button>
      )});
      return msgs;
    }

    // Pickup
    msgs.push({ from: "bot", text: "📍 Where should we pick you up?" });
    if (data.pickup) {
      msgs.push({ from: "user", text: data.pickup });
      msgs.push({ from: "bot", text: "🏁 Where are you going? (Drop location)" });
    }
    if (data.drop) {
      msgs.push({ from: "user", text: data.drop });
      msgs.push({ from: "bot", text: "🚗 Choose your car:" });
    }
    if (data.car) {
      msgs.push({ from: "user", text: data.car });
      msgs.push({ from: "bot", text: "📅 When do you want to travel? (e.g., 15 March 2026, 8 AM)" });
    }
    if (data.date) {
      msgs.push({ from: "user", text: data.date });
      msgs.push({ from: "bot", text: "👤 What's your name?" });
    }
    if (data.name) {
      msgs.push({ from: "user", text: data.name });
      msgs.push({ from: "bot", text: "📱 Your phone number?" });
    }
    if (data.phone) {
      msgs.push({ from: "user", text: data.phone });
      msgs.push({ from: "bot", text: "✅ Great! Here's your booking summary:" });
    }

    return msgs;
  };

  return (
    <>
      {/* Chat Widget */}
      {open && (
        <div className="fixed bottom-20 right-3 sm:right-5 z-[60] w-[calc(100vw-24px)] max-w-[340px] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden animate-fade-up">
          {/* Header */}
          <div className="bg-[hsl(142,70%,40%)] text-primary-foreground p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold text-xs">Shivansh Travels</p>
                <p className="text-[10px] opacity-80">Online • Replies instantly</p>
              </div>
            </div>
            <button onClick={() => { setOpen(false); reset(); }} className="hover:bg-primary-foreground/10 p-1 rounded-full transition-colors">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-[320px] overflow-y-auto p-3 space-y-2 bg-muted/30">
            {renderMessages().map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-xl px-3 py-2 text-xs leading-relaxed ${
                  m.from === "user"
                    ? "bg-[hsl(142,70%,40%)] text-primary-foreground rounded-br-sm"
                    : "bg-card text-foreground shadow-sm border border-border/50 rounded-bl-sm"
                }`}>
                  {m.jsx || m.text}
                </div>
              </div>
            ))}

            {/* Car selection cards */}
            {step === "car" && (
              <div className="space-y-1.5 mt-1">
                {carOptions.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => handleCarSelect(c.name)}
                    className="w-full bg-card rounded-lg p-2.5 border border-border/50 hover:border-secondary shadow-sm text-left flex items-center justify-between gap-2 transition-colors"
                  >
                    <div>
                      <p className="font-semibold text-foreground text-xs">{c.name}</p>
                      <p className="text-[10px] text-muted-foreground">{c.seats}</p>
                    </div>
                    <span className="text-xs font-bold text-secondary shrink-0">{c.price}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Confirm summary */}
            {step === "confirm" && (
              <div className="bg-card rounded-xl p-3 border border-border/50 shadow-sm space-y-1.5">
                <div className="text-[10px] text-muted-foreground space-y-1">
                  <p className="flex items-center gap-1.5"><MapPin className="h-3 w-3 text-secondary" /> <strong>Pickup:</strong> {data.pickup}</p>
                  <p className="flex items-center gap-1.5"><Navigation className="h-3 w-3 text-secondary" /> <strong>Drop:</strong> {data.drop}</p>
                  <p className="flex items-center gap-1.5"><Car className="h-3 w-3 text-secondary" /> <strong>Car:</strong> {data.car}</p>
                  <p className="flex items-center gap-1.5"><Calendar className="h-3 w-3 text-secondary" /> <strong>Date:</strong> {data.date}</p>
                  <p className="flex items-center gap-1.5"><User className="h-3 w-3 text-secondary" /> <strong>Name:</strong> {data.name}</p>
                  <p className="flex items-center gap-1.5"><Phone className="h-3 w-3 text-secondary" /> <strong>Phone:</strong> {data.phone}</p>
                </div>
                <Button variant="hero" size="sm" className="w-full gap-2 text-xs mt-2 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)]" onClick={sendToWhatsApp}>
                  <Check className="h-3.5 w-3.5" /> Confirm & Send via WhatsApp
                </Button>
                <button onClick={reset} className="w-full text-center text-[10px] text-muted-foreground hover:text-foreground mt-1 transition-colors">
                  Start Over
                </button>
              </div>
            )}
          </div>

          {/* Input */}
          {["pickup", "drop", "date", "name", "phone"].includes(step) && (
            <div className="p-2 border-t border-border bg-card">
              <form
                onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder={
                    step === "pickup" ? "Enter pickup location..." :
                    step === "drop" ? "Enter drop location..." :
                    step === "date" ? "e.g., 15 March 2026, 8 AM" :
                    step === "name" ? "Enter your name..." :
                    "Enter phone number..."
                  }
                  className="flex-1 bg-muted rounded-lg px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground outline-none border-none"
                  autoFocus
                />
                <button
                  type="submit"
                  className="w-8 h-8 rounded-full bg-[hsl(142,70%,40%)] flex items-center justify-center text-primary-foreground hover:bg-[hsl(142,70%,35%)] transition-colors shrink-0"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>
          )}
        </div>
      )}

      {/* FAB Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-3 sm:right-5 z-50 bg-[hsl(142,70%,40%)] text-primary-foreground rounded-full p-3 sm:p-4 shadow-lg hover:scale-110 transition-transform"
        style={!open ? { animation: "bounce 2s ease-in-out 3" } : undefined}
        aria-label="Book via WhatsApp"
      >
        {open ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />}
      </button>
    </>
  );
};

export default WhatsAppButton;
