export const buildWhatsAppUrl = (phone: string, message: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export const openWhatsAppMessage = (phone: string, message: string) => {
  const url = buildWhatsAppUrl(phone, message);
  window.open(url, "_blank");
  return true;
};
