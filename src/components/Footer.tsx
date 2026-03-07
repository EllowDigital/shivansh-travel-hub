import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="font-heading text-lg font-bold mb-3">
          Shivansh<span className="text-secondary"> Tour & Travels</span>
        </h3>
        <p className="text-sm text-primary-foreground/80 leading-relaxed">
          Your trusted partner for comfortable, affordable taxi &amp; tour services across India. Available 24/7.
        </p>
      </div>

      <div>
        <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/80">
          {["/services", "/fleet", "/tours", "/about", "/contact"].map((p) => (
            <li key={p}>
              <Link to={p} className="hover:text-secondary transition-colors capitalize">
                {p.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-heading font-semibold mb-3">Contact Us</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/80">
          <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-secondary" /> +91 98765 43210</li>
          <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-secondary" /> info@shivanshtravels.com</li>
          <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-secondary" /> Lucknow, Uttar Pradesh, India</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-primary-foreground/20 text-center py-4 text-xs text-primary-foreground/60">
      © {new Date().getFullYear()} Shivansh Tour and Travels. All rights reserved.
    </div>
  </footer>
);

export default Footer;
