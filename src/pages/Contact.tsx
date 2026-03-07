import BookingForm from "@/components/BookingForm";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <div className="pt-16">
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">Get in touch for bookings, queries, or custom tour packages.</p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12">
        {/* Info */}
        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Phone</h3>
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-secondary transition-colors">+91 98765 43210</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                <MessageCircle className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">WhatsApp</h3>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">Chat on WhatsApp</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <a href="mailto:info@shivanshtravels.com" className="text-muted-foreground hover:text-secondary transition-colors">info@shivanshtravels.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Address</h3>
                <p className="text-muted-foreground">Lucknow, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-8 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Shivansh Tour and Travels Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.38256437284!2d80.7714!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Booking form */}
        <div className="flex justify-center lg:justify-end">
          <BookingForm />
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
