import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/918960446756?text=Hi%2C%20I%20want%20to%20book%20a%20taxi"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-5 right-5 z-50 bg-[hsl(142,70%,40%)] text-primary-foreground rounded-full p-3 sm:p-4 shadow-lg hover:scale-110 transition-transform animate-bounce"
    style={{ animationDuration: "2s", animationIterationCount: "3" }}
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
  </a>
);

export default WhatsAppButton;
