import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Send } from "lucide-react";

const carTypes = ["Swift Dzire", "Ertiga", "Toyota Innova", "Tempo Traveller"];

const BookingForm = () => {
  const [form, setForm] = useState({
    pickup: "", drop: "", date: "", car: "", name: "", phone: "", message: "",
  });

  const update = (key: string, val: string) => setForm((p) => ({ ...p, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.pickup || !form.name || !form.phone) {
      toast.error("Please fill required fields.");
      return;
    }
    const text = `Booking Request:\nName: ${form.name}\nPhone: ${form.phone}\nPickup: ${form.pickup}\nDrop: ${form.drop}\nDate: ${form.date}\nCar: ${form.car}\nMessage: ${form.message}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow-2xl p-5 sm:p-6 space-y-3 w-full max-w-md">
      <h3 className="font-heading text-lg font-bold text-foreground text-center">Book Your Taxi</h3>
      <p className="text-xs text-muted-foreground text-center -mt-1">Fill the form & get instant confirmation</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input placeholder="Pickup Location *" value={form.pickup} onChange={(e) => update("pickup", e.target.value)} className="text-sm" />
        <Input placeholder="Drop Location" value={form.drop} onChange={(e) => update("drop", e.target.value)} className="text-sm" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input type="date" value={form.date} onChange={(e) => update("date", e.target.value)} className="text-sm" />
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
        <Input placeholder="Your Name *" value={form.name} onChange={(e) => update("name", e.target.value)} className="text-sm" />
        <Input placeholder="Phone Number *" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="text-sm" />
      </div>
      <Input placeholder="Optional Message" value={form.message} onChange={(e) => update("message", e.target.value)} className="text-sm" />
      <Button type="submit" variant="hero" className="w-full gap-2">
        <Send className="h-4 w-4" /> Send Booking via WhatsApp
      </Button>
    </form>
  );
};

export default BookingForm;
