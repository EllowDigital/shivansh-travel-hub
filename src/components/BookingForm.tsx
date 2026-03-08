import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Send } from "lucide-react";

const carTypes = ["Swift Dzire", "Ertiga", "Toyota Innova", "Tempo Traveller"];

const WHATSAPP_NUMBER = "919876543210";

const BookingForm = ({ defaultPickup = "", defaultDrop = "" }: { defaultPickup?: string; defaultDrop?: string }) => {
  const [form, setForm] = useState({
    pickup: defaultPickup, drop: defaultDrop, date: "", car: "", name: "", phone: "", passengers: "", message: "",
  });

  const update = (key: string, val: string) => setForm((p) => ({ ...p, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.pickup || !form.drop || !form.name || !form.phone || !form.date) {
      toast.error("Please fill all required fields.");
      return;
    }

    const formattedDate = form.date ? new Date(form.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) : "Not specified";

    const text = [
      `🚕 *NEW TAXI BOOKING REQUEST*`,
      `━━━━━━━━━━━━━━━━━━`,
      ``,
      `👤 *Customer Details:*`,
      `• Name: ${form.name}`,
      `• Phone: ${form.phone}`,
      form.passengers ? `• Passengers: ${form.passengers}` : "",
      ``,
      `📍 *Trip Details:*`,
      `• Pickup: ${form.pickup}`,
      `• Drop: ${form.drop}`,
      `• Date: ${formattedDate}`,
      form.car ? `• Car Type: ${form.car}` : `• Car Type: Any Available`,
      ``,
      form.message ? `💬 *Message:* ${form.message}` : "",
      ``,
      `━━━━━━━━━━━━━━━━━━`,
      `Sent via Shivansh Tour & Travels Website`,
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    toast.success("Redirecting to WhatsApp with your booking details!");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow-2xl p-5 sm:p-6 space-y-3 w-full max-w-md">
      <h3 className="font-heading text-lg font-bold text-foreground text-center">Book Your Taxi</h3>
      <p className="text-xs text-muted-foreground text-center -mt-1">Fill the form & get instant confirmation</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input placeholder="Pickup Location *" value={form.pickup} onChange={(e) => update("pickup", e.target.value)} className="text-sm" required />
        <Input placeholder="Drop Location *" value={form.drop} onChange={(e) => update("drop", e.target.value)} className="text-sm" required />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input type="date" value={form.date} onChange={(e) => update("date", e.target.value)} className="text-sm" required />
        <select
          className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          value={form.car}
          onChange={(e) => update("car", e.target.value)}
        >
          <option value="">Select Car Type</option>
          {carTypes.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input placeholder="Your Name *" value={form.name} onChange={(e) => update("name", e.target.value)} className="text-sm" required />
        <Input placeholder="Phone Number *" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="text-sm" required />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input placeholder="No. of Passengers" type="number" min="1" max="20" value={form.passengers} onChange={(e) => update("passengers", e.target.value)} className="text-sm" />
        <Input placeholder="Optional Message" value={form.message} onChange={(e) => update("message", e.target.value)} className="text-sm" />
      </div>
      <Button type="submit" variant="hero" className="w-full gap-2">
        <Send className="h-4 w-4" /> Send Booking via WhatsApp
      </Button>
    </form>
  );
};

export default BookingForm;
