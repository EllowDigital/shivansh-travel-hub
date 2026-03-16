import BookingForm from "@/components/BookingForm";
import SEO from "@/components/SEO";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  { icon: Phone, title: "Phone", content: "+91 89604 46756", href: "tel:+918960446756" },
  { icon: MessageCircle, title: "WhatsApp", content: "Chat on WhatsApp", href: "https://wa.me/918960446756" },
  { icon: Mail, title: "Email", content: "sarwanyadav6174@gmail.com", href: "mailto:sarwanyadav6174@gmail.com" },
  { icon: MapPin, title: "Address", content: "Agra, Uttar Pradesh, India" },
  { icon: Clock, title: "Working Hours", content: "24/7 — Always Available" },
];

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Shivansh Tour and Travels",
  "url": "https://shivanshtravels.com/contact",
  "image": "https://shivanshtravels.com/og-image.jpg",
  "telephone": "+918960446756",
  "email": "sarwanyadav6174@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Agra",
    "addressRegion": "Uttar Pradesh",
    "addressCountry": "IN"
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "areaServed": ["Agra", "Delhi", "Noida", "Gurgaon", "Mathura", "Jaipur", "Lucknow"]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://shivanshtravels.com" },
    { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://shivanshtravels.com/contact" }
  ]
};

const Contact = () => (
  <div className="pt-14 sm:pt-16 lg:pt-[88px]">
    <SEO
      title="Contact Us | Book Taxi in Agra | Call +91 89604 46756"
      description="Contact Shivansh Tour & Travels for taxi bookings, tour packages & custom quotes. Call +91 89604 46756, WhatsApp or email. 24/7 service from Agra."
      keywords="contact taxi agra, book cab agra, taxi booking phone number agra, whatsapp taxi booking, agra travel agency contact"
      canonical="https://shivanshtravels.com/contact"
      schema={[contactSchema, breadcrumbSchema]}
    />
    <section className="page-header">
      <div className="container mx-auto text-center">
        <h1 className="page-header-title">Contact Us</h1>
        <p className="page-header-subtitle">Get in touch for bookings, queries, or custom tour packages.</p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        <div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-5 sm:mb-6">Get In Touch</h2>
          <div className="space-y-4">
            {contactInfo.map((c, i) => (
              <div key={i} className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <c.icon className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">{c.title}</h3>
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                       className="text-muted-foreground hover:text-secondary transition-colors text-xs sm:text-sm break-all">
                      {c.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-xs sm:text-sm">{c.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 sm:mt-8 rounded-xl overflow-hidden shadow-md border border-border/50">
            <iframe
              title="Shivansh Tour and Travels Location in Agra"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.38256437284!2d78.0081!3d27.1767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747121d702ff6d%3A0xdd2ae4803f767dde!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" height="220" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <BookingForm />
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
