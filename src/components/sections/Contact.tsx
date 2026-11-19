import type { ContactMethod, Portfolio } from "@/lib/types";
import { CopyButton } from "@/components/ui/CopyButton";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const iconFor: Record<ContactMethod["id"], IconName> = {
  email: "mail",
  whatsapp: "chat",
  phone: "phone",
};

type ContactProps = {
  contact: Portfolio["contact"];
  location: string;
};

export function Contact({ contact, location }: ContactProps) {
  const methods = contact.methods.filter((method) => method.public);
  const socials = contact.socials.filter((social) => social.verified);
  const email = methods.find((method) => method.id === "email");
  const others = methods.filter((method) => method.id !== "email");

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate scroll-mt-20 overflow-hidden bg-navy py-20 text-white sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50rem_30rem_at_90%_0%,rgb(20_81_210/0.35),transparent_70%)]"
      />
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow text-[#8fb3ff]">Contact</p>
          <h2
            id="contact-title"
            className="mt-4 text-[2.2rem] leading-[1.05] font-bold tracking-[-0.03em] sm:text-[3rem] lg:text-[3.4rem]"
          >
            {contact.title}
          </h2>
          <p className="mt-6 max-w-xl text-[1.08rem] leading-relaxed text-white/70">{contact.body}</p>
          <p className="mt-8 inline-flex items-center gap-2 text-[0.95rem] text-white/70">
            <Icon name="mapPin" width={18} height={18} className="text-[#8fb3ff]" />
            Based in {location}
          </p>
        </Reveal>

        <Reveal className="space-y-4 lg:col-span-6 lg:pt-4">
          {email ? (
            <div className="relative rounded-[24px] bg-white/[0.06] p-6 ring-1 ring-white/10 transition-colors hover:bg-white/[0.09] sm:p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="flex items-center gap-2 text-[0.85rem] font-medium text-white/60">
                    <Icon name="mail" width={16} height={16} />
                    {email.label} · {email.hint}
                  </p>
                  <a
                    href={email.href}
                    className="mt-2 block text-[1.25rem] font-semibold tracking-[-0.01em] break-all after:absolute after:inset-0 after:content-[''] sm:text-[1.45rem]"
                  >
                    {email.value}
                  </a>
                </div>
                <CopyButton value={email.value} label="Email address" />
              </div>
            </div>
          ) : null}

          <ul className="grid gap-4 sm:grid-cols-2">
            {others.map((method) => (
              <li key={method.id}>
                <a
                  href={method.href}
                  {...(method.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex h-full flex-col rounded-[24px] bg-white/[0.06] p-6 ring-1 ring-white/10 transition-colors hover:bg-white/[0.09]"
                >
                  <span className="flex items-center justify-between text-[0.85rem] font-medium text-white/60">
                    <span className="flex items-center gap-2">
                      <Icon name={iconFor[method.id]} width={16} height={16} />
                      {method.label}
                    </span>
                    <Icon
                      name="arrowUpRight"
                      width={16}
                      height={16}
                      className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                  <span className="mt-3 text-[1.15rem] font-semibold tabular-nums">{method.value}</span>
                  <span className="mt-1 text-[0.85rem] text-white/50">{method.hint}</span>
                  {method.href.startsWith("http") ? <span className="sr-only">(opens in a new tab)</span> : null}
                </a>
              </li>
            ))}
          </ul>

          {socials.length > 0 ? (
            <ul className="flex flex-wrap gap-2 pt-2">
              {socials.map((social) => (
                <li key={social.url}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-[0.9rem] font-medium text-white/80 ring-1 ring-white/15 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {social.label === "GitHub" ? <Icon name="github" width={16} height={16} /> : null}
                    {social.label}
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
