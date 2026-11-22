export const faqs = [
  {
    q: "Where do you deliver?",
    a: "We dispatch from Lagos, Owerri and Aba, with delivery scheduled to site nationwide. The delivery window is confirmed with your quote.",
  },
  {
    q: "How quickly will I hear back?",
    a: "Quote requests are reviewed within one business day. Larger take-offs or site visits may take a little longer; we confirm the timing when we reply.",
  },
  {
    q: "Can I order a sample?",
    a: "Yes. Request a sample of the Ephtech Board or the jointing system on WhatsApp, and we will arrange it with the nearest branch.",
  },
  {
    q: "Do you supply only, or supply and install?",
    a: "Both. You can order materials for your own team, or have Ephtech supply and install the system under one contract with a single point of accountability.",
  },
  {
    q: "How is pricing worked out?",
    a: "Pricing is confirmed from your drawings or a site visit, and every quote is confirmed in a proforma invoice before dispatch.",
  },
  {
    q: "What does the warranty cover?",
    a: "Materials and workmanship are covered as set out in your contract. The warranty terms are confirmed with your quote and exclude misuse, water ingress, structural movement and work by others.",
  },
  {
    q: "Do you work outside Lagos, Owerri and Aba?",
    a: "Yes. We deliver nationwide and install with our teams or approved installers. Share the site location and we will confirm the programme.",
  },
];

/** A short set for the home page; the full list lives on /board#faq. */
export const homeFaqs = faqs
  .filter(
    (faq) =>
      faq.q !== "How quickly will I hear back?" &&
      faq.q !== "What does the warranty cover?",
  )
  .slice(0, 4);
