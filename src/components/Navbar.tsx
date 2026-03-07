import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Our Cars" },
  { to: "/tours", label: "Tour Packages" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-heading text-xl font-bold text-primary">
          Shivansh<span className="text-secondary"> Tour & Travels</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                location.pathname === l.to ? "text-secondary" : "text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a href="tel:+919876543210">
            <Button size="sm" variant="hero" className="gap-1">
              <Phone className="h-3.5 w-3.5" /> Call Now
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-up">
          <div className="flex flex-col p-4 gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`py-2 text-sm font-medium ${
                  location.pathname === l.to ? "text-secondary" : "text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a href="tel:+919876543210">
              <Button size="sm" variant="hero" className="w-full gap-1">
                <Phone className="h-3.5 w-3.5" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
