import { portfolio } from "@/content/portfolio";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Expertise } from "@/components/sections/Expertise";
import { Hero } from "@/components/sections/Hero";
import { Learning } from "@/components/sections/Learning";
import { Perspectives } from "@/components/sections/Perspectives";

export default function HomePage() {
  const { profile } = portfolio;

  return (
    <>
      <SiteHeader name={profile.name} navigation={portfolio.navigation} />
      <main id="main">
        <Hero profile={profile} />
        <Perspectives perspectives={portfolio.perspectives} />
        <About about={portfolio.about} />
        <Expertise areas={portfolio.expertise} skills={portfolio.skills} />
        <Experience records={portfolio.experience} engagements={portfolio.engagements} />
        <Learning credentials={portfolio.credentials} />
        <Contact contact={portfolio.contact} location={profile.location} />
      </main>
      <SiteFooter name={profile.name} />
    </>
  );
}
