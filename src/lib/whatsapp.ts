import { toast } from "sonner";

const WHATSAPP_NUMBER = "918865038345";

export const buildWhatsAppUrl = (phone: string, message: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export const buildWhatsAppDeepLink = (phone: string, message: string) =>
  `whatsapp://send?phone=${phone}&text=${encodeURIComponent(message)}`;

/**
 * Robust WhatsApp message sender with fallback chain:
 * 1. Try whatsapp:// deep link (works best on mobile, bypasses browser blocks)
 * 2. Fallback to wa.me link
 * 3. If both fail, copy message to clipboard and show toast
 */
export const openWhatsAppMessage = (
  phone: string,
  message: string,
): boolean => {
  const waMe = buildWhatsAppUrl(phone, message);
  const deepLink = buildWhatsAppDeepLink(phone, message);

  // Detect mobile
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    // On mobile, try deep link first (most reliable, opens app directly)
    window.location.href = deepLink;
    // Fallback after short delay if deep link didn't work
    setTimeout(() => {
      window.open(waMe, "_blank");
    }, 1500);
  } else {
    // On desktop, use wa.me (opens WhatsApp Web or desktop app)
    const win = window.open(waMe, "_blank");
    if (!win) {
      // Popup blocked â€” try anchor click method
      const a = document.createElement("a");
      a.href = waMe;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  }

  // Always copy to clipboard as safety net
  copyMessageToClipboard(phone, message);
  return true;
};

const copyMessageToClipboard = (phone: string, message: string) => {
  const fallbackText = message;
  try {
    navigator.clipboard.writeText(fallbackText).then(() => {
      toast.success(
        "Message copied to clipboard! If WhatsApp didn't open, paste it manually.",
        {
          duration: 6000,
          action: {
            label: "Open WhatsApp",
            onClick: () => {
              window.open(
                `https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`,
                "_blank",
              );
            },
          },
        },
      );
    });
  } catch {
    // Clipboard API not available â€” silent fail, wa.me should have worked
  }
};

export { WHATSAPP_NUMBER };
