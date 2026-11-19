import Image from "next/image";
import type { Profile } from "@/lib/types";
import { Icon } from "@/components/ui/Icon";

export function Hero({ profile }: { profile: Profile }) {
  const roles = profile.headline.split("|").map((role) => role.trim());
  const portrait = profile.portrait?.approved ? profile.portrait : undefined;

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_85%_-10%,var(--color-ice),transparent_70%),radial-gradient(40rem_30rem_at_-10%_110%,rgb(234_243_255/0.6),transparent_70%)]"
      />

      <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.92rem] font-medium text-slate">
            <span className="font-semibold text-navy">{profile.name}</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-line" />
            <span className="inline-flex items-center gap-1.5">
              <Icon name="mapPin" width={16} height={16} className="text-blue" />
              {profile.location}
            </span>
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-[2.6rem] leading-[1.02] font-bold tracking-[-0.035em] text-navy sm:text-[3.6rem] lg:text-[4.4rem]"
          >
            {profile.heroStatement}
          </h1>

          <p className="mt-6 max-w-[38rem] text-[1.08rem] leading-[1.6] text-slate sm:text-[1.2rem]">
            {profile.supportingCopy}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#perspectives" className="btn-primary">
              Read my perspectives
              <Icon name="arrowDown" width={18} height={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
            </a>
          </div>

          <ul
            aria-label="Focus areas"
            className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-[0.88rem] font-medium text-navy/80"
          >
            {profile.positioning.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-blue" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          {portrait ? (
            <figure className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[28px] bg-ice">
              <Image
                src={portrait.src}
                alt={portrait.alt}
                fill
                priority
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover"
              />
            </figure>
          ) : (
            <ProfileCard name={profile.name} roles={roles} location={profile.location} />
          )}
        </div>
      </div>

      <div className="container-page mt-14 hidden lg:block">
        <a
          href="#perspectives"
          className="group inline-flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.14em] text-slate uppercase"
        >
          <span aria-hidden="true" className="relative h-10 w-px overflow-hidden bg-line">
            <span className="scroll-cue-line absolute inset-x-0 top-0 h-1/2 bg-blue" />
          </span>
          <span className="transition-colors group-hover:text-navy">Scroll to explore</span>
        </a>
      </div>
    </section>
  );
}

/** Shown until an approved portrait is supplied. Intentional, not a placeholder image. */
function ProfileCard({ name, roles, location }: { name: string; roles: string[]; location: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[440px] overflow-hidden rounded-[28px] bg-navy p-8 text-white shadow-[0_40px_80px_-40px_rgb(7_21_51/0.55)] sm:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue/40 blur-3xl"
      />
      <div aria-hidden="true" className="relative flex items-center justify-between">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold tracking-[0.02em] ring-1 ring-white/15">
          TA
        </span>
        <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[0.75rem] font-medium text-white/80 ring-1 ring-white/10">
          <span className="h-1.5 w-1.5 rounded-full bg-[#5fd39a]" />
          Open to conversations
        </span>
      </div>

      <p className="relative mt-14 text-[1.7rem] leading-tight font-bold tracking-[-0.02em] [font-family:var(--font-display)]">
        {name}
      </p>
      <ul className="relative mt-5 space-y-3">
        {roles.map((role) => (
          <li key={role} className="flex items-start gap-3 text-[0.98rem] leading-snug text-white/80">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8fb3ff]" />
            {role}
          </li>
        ))}
      </ul>

      <div className="relative mt-10 flex items-center gap-2 border-t border-white/10 pt-6 text-[0.9rem] text-white/70">
        <Icon name="mapPin" width={16} height={16} />
        {location}
      </div>
    </div>
  );
}
