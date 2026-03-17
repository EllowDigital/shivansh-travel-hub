import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Send } from "lucide-react";
import LocationAutocomplete from "@/components/LocationAutocomplete";
import { openWhatsAppMessage } from "@/lib/whatsapp";

const carTypes = ["Swift Dzire", "Ertiga", "Toyota Innova", "Tempo Traveller"];
const tripTypes = ["One Way", "Round Trip", "Local", "Airport"];

const WHATSAPP_NUMBER = "918865038345";

const getDayPeriodLabel = (hour24: number) => {
  if (hour24 >= 5 && hour24 < 12) return "Morning";
  if (hour24 >= 12 && hour24 < 17) return "Afternoon";
  if (hour24 >= 17 && hour24 < 21) return "Evening";
  return "Night";
};

const formatTime12Hour = (time: string) => {
  if (!time) return "";

  const [rawHour, rawMinute] = time.split(":");
  const hour = Number(rawHour);
  const minute = Number(rawMinute);

  if (Number.isNaN(hour) || Number.isNaN(minute)) {
    return time;
  }

  const period = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;
  const dayPeriod = getDayPeriodLabel(hour);
  return `${hour12}:${String(minute).padStart(2, "0")} ${period} (${dayPeriod})`;
};

const BookingForm = ({
  defaultPickup = "",
  defaultDrop = "",
}: {
  defaultPickup?: string;
  defaultDrop?: string;
}) => {
  const [tripType, setTripType] = useState("One Way");
  const [form, setForm] = useState({
    pickup: defaultPickup,
    drop: defaultDrop,
    date: "",
    time: "",
    car: "",
    name: "",
    phone: "",
    passengers: "",
    message: "",
  });

  const update = (key: string, val: string) =>
    setForm((p) => ({ ...p, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.pickup || !form.drop || !form.name || !form.phone || !form.date) {
      toast.error("Please fill all required fields.");
      return;
    }

    const formattedDate = form.date
      ? new Date(form.date).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "Not specified";

    const formattedTime = form.time
      ? formatTime12Hour(form.time)
      : "Not specified";

    const text = [
      `*NEW TAXI BOOKING REQUEST*`,
      `--------------------`,
      ``,
      `*Trip Type:* ${tripType}`,
      ``,
      `*Customer Details:*`,
      `- Name: ${form.name}`,
      `- Phone: ${form.phone}`,
      form.passengers ? `- Passengers: ${form.passengers}` : "",
      ``,
      `*Trip Details:*`,
      `- Pickup: ${form.pickup}`,
      `- Drop: ${form.drop}`,
      `- Date: ${formattedDate}`,
      form.time ? `- Time: ${formattedTime}` : "",
      form.car ? `- Car Type: ${form.car}` : `- Car Type: Any Available`,
      ``,
      form.message ? `*Message:* ${form.message}` : "",
      ``,
      `--------------------`,
      `Sent via Shivansh Tour & Travels Website`,
    ]
      .filter(Boolean)
      .join("\n");

    const opened = openWhatsAppMessage(WHATSAPP_NUMBER, text);
    if (opened) {
      toast.success("Opening WhatsApp with your booking details...");
    } else {
      toast.error("Popup blocked. Please allow popups and try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card rounded-xl shadow-2xl p-5 sm:p-6 w-full max-w-md"
    >
      <h3 className="font-heading text-lg font-bold text-foreground text-center">
        Book Your Taxi
      </h3>
      <p className="text-xs text-muted-foreground text-center mb-4">
        Fill the form & get instant confirmation
      </p>

      {/* Trip Type Tabs */}
      <div className="grid grid-cols-4 gap-1 bg-muted rounded-lg p-1 mb-4">
        {tripTypes.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTripType(t)}
            className={`text-[10px] sm:text-xs font-medium py-2 rounded-md transition-all ${
              tripType === t
                ? "bg-secondary text-secondary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        <LocationAutocomplete
          placeholder="Pickup Location *"
          value={form.pickup}
          onChange={(value) => update("pickup", value)}
          required
          variant="pickup"
        />

        <LocationAutocomplete
          placeholder="Drop Location *"
          value={form.drop}
          onChange={(value) => update("drop", value)}
          required
          variant="drop"
        />

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <label
              htmlFor="pickup-date"
              className="block text-[11px] font-medium text-muted-foreground"
            >
              Pickup Date *
            </label>
            <Input
              id="pickup-date"
              type="date"
              value={form.date}
              onChange={(e) => update("date", e.target.value)}
              className={`date-time-input text-sm [color-scheme:light] ${form.date ? "text-foreground" : "date-time-input-empty"}`}
              aria-label="Pickup Date"
              lang="en-IN"
              required
            />
          </div>
          <div className="space-y-1">
            <label
              htmlFor="pickup-time"
              className="block text-[11px] font-medium text-muted-foreground"
            >
              Pickup Time
            </label>
            <Input
              id="pickup-time"
              type="time"
              value={form.time}
              onChange={(e) => update("time", e.target.value)}
              className={`date-time-input text-sm [color-scheme:light] ${form.time ? "text-foreground" : "date-time-input-empty"}`}
              aria-label="Pickup Time"
              lang="en-IN"
            />
          </div>
        </div>

        <select
          className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          value={form.car}
          onChange={(e) => update("car", e.target.value)}
        >
          <option value="">🚗 Select Car Type</option>
          {carTypes.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <div className="grid grid-cols-2 gap-3">
          <Input
            placeholder="Your Name *"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="text-sm"
            required
          />
          <Input
            placeholder="Phone *"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="text-sm"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Input
            placeholder="Passengers"
            type="number"
            min="1"
            max="20"
            value={form.passengers}
            onChange={(e) => update("passengers", e.target.value)}
            className="text-sm"
          />
          <Input
            placeholder="Message (optional)"
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className="text-sm"
          />
        </div>
      </div>

      <Button type="submit" variant="hero" className="w-full gap-2 mt-4">
        <Send className="h-4 w-4" /> Book via WhatsApp
      </Button>
      <p className="text-[10px] text-center text-muted-foreground mt-2">
        ✅ Place search enabled • Manual input also accepted
      </p>
    </form>
  );
};

export default BookingForm;
