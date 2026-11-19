import type { Portfolio } from "./types";

/** schema.org Person, built only from verified content. */
export function personJsonLd(portfolio: Portfolio) {
  const flameConnect = portfolio.experience.find((record) => record.id === "flame-connect");
  const sameAs = portfolio.contact.socials.filter((social) => social.verified).map((social) => social.url);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.profile.name,
    url: portfolio.site.url,
    jobTitle: "Enterprise AI & Automation Consultant",
    description: portfolio.site.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kampala",
      addressCountry: "UG",
    },
    knowsAbout: portfolio.expertise.map((area) => area.title),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    ...(flameConnect?.organisation.website?.verified
      ? {
          affiliation: {
            "@type": "Organization",
            name: flameConnect.organisation.name,
            url: flameConnect.organisation.website.url,
          },
        }
      : {}),
  };
}
