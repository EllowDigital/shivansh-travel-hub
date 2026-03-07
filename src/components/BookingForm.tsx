import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

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
    <form onSubmit={handleSubmit} className="bg-card rounded-lg shadow-xl p-6 space-y-4 max-w-md w-full">
      <h3 className="font-heading text-lg font-bold text-foreground">Book Your Taxi</h3>
      <Input placeholder="Pickup Location *" value={form.pickup} onChange={(e) => update("pickup", e.target.value)} />
      <Input placeholder="Drop Location" value={form.drop} onChange={(e) => update("drop", e.target.value)} />
      <Input type="date" value={form.date} onChange={(e) => update("date", e.target.value)} />
      <select
        className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
        value={form.car}
        onChange={(e) => update("car", e.target.value)}
      >
        <option value="">Select Car Type</option>
        {carTypes.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>
      <Input placeholder="Your Name *" value={form.name} onChange={(e) => update("name", e.target.value)} />
      <Input placeholder="Phone Number *" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
      <Input placeholder="Optional Message" value={form.message} onChange={(e) => update("message", e.target.value)} />
      <Button type="submit" variant="hero" className="w-full">Send Booking via WhatsApp</Button>
    </form>
  );
};

export default BookingForm;
