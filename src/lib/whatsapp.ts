export const buildWhatsAppUrl = (phone: string, message: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export const openWhatsAppMessage = (phone: string, message: string) => {
  const url = buildWhatsAppUrl(phone, message);

  try {
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    return true;
  } catch {
    const popup = window.open(url, "_blank", "noopener,noreferrer");
    return Boolean(popup);
  }
};
