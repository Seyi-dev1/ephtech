export const WHATSAPP_NUMBER = "2348032519288";
export const WHATSAPP_DISPLAY = "+234 803 251 9288";

export const WHATSAPP_MESSAGES = {
  quote:
    "Hello Ephtech, I would like to speak with the inventory team about a quote.",
  general: "Hello Ephtech, I would like to discuss a project.",
  system:
    "Hello Ephtech, I would like a quote for the full Ephtech Board system. It includes the board, ceiling grid, channels, studs, fasteners and jointing compound.",
  sample:
    "Hello Ephtech, I would like to request a sample of the Ephtech Board and its jointing system.",
};

export function whatsappHref(message: string = WHATSAPP_MESSAGES.quote) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
