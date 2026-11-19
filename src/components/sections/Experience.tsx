import type { Engagement, ExperienceRecord } from "@/lib/types";
import { Icon } from "@/components/ui/Icon";
import { OrgMark } from "@/components/ui/OrgMark";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ExperienceProps = {
  records: readonly ExperienceRecord[];
  engagements: readonly Engagement[];
};

export function Experience({ records, engagements }: ExperienceProps) {
  return (
    <section id="experience" aria-labelledby="experience-title" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="experience"
          eyebrow="Professional experience"
          align="split"
          title="Where I've worked — and what the work involved."
          intro="From corporate digital transformation to founding my own ventures, each role added a different lens on how organisations communicate, operate and grow."
        />

        <ol className="relative mt-14 space-y-5 lg:pl-10">
          <span
            aria-hidden="true"
            className="absolute top-4 bottom-4 left-[11px] hidden w-px bg-gradient-to-b from-blue/50 via-line to-transparent lg:block"
          />
          {records.map((record) => (
            <Reveal as="li" key={record.id} className="relative">
              <span
                aria-hidden="true"
                className={`absolute top-10 -left-10 hidden h-[23px] w-[23px] items-center justify-center rounded-full border bg-white lg:flex ${
                  record.featured ? "border-blue/40" : "border-line"
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${record.featured ? "bg-blue" : "bg-navy/30"}`} />
              </span>
              <ExperienceCard record={record} />
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-16">
          <h3 className="text-[1.3rem] font-bold tracking-[-0.02em] text-navy">Selected engagements</h3>
          <p className="mt-2 max-w-2xl text-[0.98rem] text-slate">
            Project-based work with event, media and e-commerce teams.
          </p>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {engagements.map((engagement) => (
              <li key={engagement.id} className="card p-6">
                <p className="font-semibold tracking-[-0.01em] text-navy">
                  {engagement.website?.verified ? (
                    <a
                      href={engagement.website.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-blue"
                    >
                      {engagement.name}
                      <Icon name="arrowUpRight" width={16} height={16} />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  ) : (
                    engagement.name
                  )}
                </p>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-slate">{engagement.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function ExperienceCard({ record }: { record: ExperienceRecord }) {
  const { organisation } = record;
  const website = organisation.website?.verified ? organisation.website : undefined;
  const title = record.role ?? record.areaOfWork;
  const titleLabel = record.role ? "Role" : "Area of work";

  return (
    <article
      aria-labelledby={`${record.id}-name`}
      className={`card grid gap-7 p-6 sm:p-8 lg:grid-cols-12 lg:gap-10 ${
        record.featured ? "border-blue/20 shadow-[0_24px_60px_-40px_rgb(7_21_51/0.45)]" : ""
      }`}
    >
      <header className="lg:col-span-4">
        <div className="flex items-center gap-4">
          <OrgMark organisation={organisation} size={record.featured ? "lg" : "md"} />
          <div className="min-w-0">
            <h3
              id={`${record.id}-name`}
              className="text-[1.12rem] leading-snug font-bold tracking-[-0.015em] text-navy sm:text-[1.2rem]"
            >
              {organisation.name}
            </h3>
            {website ? (
              <a
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 inline-flex min-h-6 items-center gap-1 text-[0.85rem] font-medium text-blue hover:text-blue-deep"
              >
                {website.url.replace(/^https?:\/\//, "")}
                <Icon name="arrowUpRight" width={14} height={14} />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : null}
          </div>
        </div>

        <dl className="mt-6 space-y-3">
          {title ? (
            <div>
              <dt className="text-[0.72rem] font-semibold tracking-[0.12em] text-slate uppercase">{titleLabel}</dt>
              <dd className="mt-1 text-[0.98rem] font-semibold text-ink">{title}</dd>
            </div>
          ) : null}
          {record.period ? (
            <div>
              <dt className="text-[0.72rem] font-semibold tracking-[0.12em] text-slate uppercase">Period</dt>
              <dd className="mt-1 text-[0.95rem] text-ink tabular-nums">{record.period}</dd>
            </div>
          ) : null}
        </dl>

        {record.note ? (
          <p className="mt-4 text-[0.82rem] leading-snug text-slate italic">{record.note}</p>
        ) : null}
      </header>

      <div className="lg:col-span-8">
        <p className="text-[1.05rem] leading-relaxed text-ink/90">{record.summary}</p>

        <ul aria-label={`Responsibilities at ${organisation.name}`} className="mt-5 flex flex-wrap gap-2">
          {record.responsibilities.map((item) => (
            <li
              key={item}
              className="rounded-full border border-line bg-white px-3 py-1.5 text-[0.85rem] leading-tight text-navy/85"
            >
              {item}
            </li>
          ))}
        </ul>

        {record.outcomes && record.outcomes.length > 0 ? (
          <div className="mt-7">
            <p className="text-[0.72rem] font-semibold tracking-[0.12em] text-slate uppercase">
              Outcomes · {record.outcomes[0]?.source}
            </p>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {record.outcomes.map((outcome) => (
                <li key={outcome.label} className="rounded-2xl bg-ice/70 p-5">
                  <span className="block text-[1.9rem] leading-none font-bold tracking-[-0.03em] text-blue tabular-nums [font-family:var(--font-display)]">
                    {outcome.figure}
                  </span>
                  <span className="mt-2 block text-[0.9rem] leading-snug text-navy">{outcome.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  );
}
