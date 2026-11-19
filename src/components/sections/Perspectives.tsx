import type { Portfolio, PointOfView } from "@/lib/types";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Perspectives({ perspectives }: { perspectives: Portfolio["perspectives"] }) {
  const [lead, ...rest] = perspectives.pointsOfView;
  const articles = perspectives.articles.filter((article) => article.url.verified);

  return (
    <section id="perspectives" aria-labelledby="perspectives-title" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="perspectives"
          eyebrow={perspectives.eyebrow}
          align="split"
          title={perspectives.title}
          intro={perspectives.intro}
        />

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {lead ? (
            <Reveal
              as="li"
              className="relative isolate overflow-hidden rounded-[28px] bg-navy p-8 text-white sm:col-span-2 sm:p-12 lg:col-span-3"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-32 -right-24 -z-10 h-80 w-80 rounded-full bg-blue/40 blur-3xl"
              />
              <p className="flex items-center gap-3 text-[0.75rem] font-semibold tracking-[0.14em] text-[#8fb3ff] uppercase">
                <span className="tabular-nums">01</span>
                <span aria-hidden="true" className="h-px w-8 bg-[#8fb3ff]/50" />
                {lead.theme}
              </p>
              <h3 className="mt-6 max-w-4xl text-[1.9rem] leading-[1.1] font-bold tracking-[-0.03em] sm:text-[2.6rem] lg:text-[3.1rem]">
                {lead.statement}
              </h3>
              <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-white/70 sm:text-[1.12rem]">
                {lead.argument}
              </p>
            </Reveal>
          ) : null}

          {rest.map((pov, index) => (
            <PointOfViewCard
              key={pov.id}
              pov={pov}
              number={index + 2}
              delay={(index % 3) * 70}
              wide={index === rest.length - 1 && rest.length % 3 === 2}
            />
          ))}
        </ol>

        {articles.length > 0 ? (
          <Reveal className="mt-14">
            <h3 className="text-[1.3rem] font-bold tracking-[-0.02em] text-navy">Latest writing</h3>
            <ul className="mt-5 divide-y divide-line border-y border-line">
              {articles.map((article) => (
                <li key={article.id}>
                  <a
                    href={article.url.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-14 items-center justify-between gap-6 py-4 text-navy hover:text-blue"
                  >
                    <span className="font-semibold">{article.title}</span>
                    <span className="shrink-0 text-[0.9rem] text-slate">
                      {article.outlet ? `${article.outlet} · ` : ""}
                      {article.publishedOn}
                    </span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}

        <Reveal className="mt-16 grid gap-10 rounded-[28px] bg-ice/70 p-7 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="text-[1.6rem] leading-tight font-bold tracking-[-0.02em] text-navy">
              {perspectives.briefings.title}
            </h3>
            <p className="mt-3 text-[1rem] leading-relaxed text-slate">{perspectives.briefings.intro}</p>
            <a href="#contact" className="btn-primary mt-7">
              Invite me to speak
              <Icon name="arrowRight" width={18} height={18} />
            </a>
          </div>
          <ul className="divide-y divide-line/80 lg:col-span-7">
            {perspectives.briefings.topics.map((topic) => (
              <li key={topic.id} className="py-5 first:pt-0 last:pb-0">
                <p className="text-[1.08rem] leading-snug font-semibold tracking-[-0.01em] text-navy">{topic.title}</p>
                <p className="mt-1 text-[0.92rem] text-slate">For {topic.audience}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function PointOfViewCard({
  pov,
  number,
  delay,
  wide,
}: {
  pov: PointOfView;
  number: number;
  delay: number;
  wide: boolean;
}) {
  return (
    <Reveal
      as="li"
      delay={delay}
      className={`card flex flex-col p-7 sm:p-8 ${wide ? "sm:col-span-2 lg:col-span-2" : ""}`}
    >
      <p className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.14em] text-blue uppercase">
        <span className="tabular-nums">{String(number).padStart(2, "0")}</span>
        <span aria-hidden="true" className="h-px w-6 bg-blue/40" />
        {pov.theme}
      </p>
      <h3 className="mt-5 text-[1.35rem] leading-[1.2] font-bold tracking-[-0.02em] text-navy">{pov.statement}</h3>
      <p className="mt-3 text-[0.98rem] leading-relaxed text-slate">{pov.argument}</p>
    </Reveal>
  );
}
