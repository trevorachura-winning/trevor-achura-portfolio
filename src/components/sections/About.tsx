import type { Portfolio } from "@/lib/types";
import { Reveal } from "@/components/ui/Reveal";

export function About({ about }: { about: Portfolio["about"] }) {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-20 bg-ice/45 py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2
            id="about-title"
            className="mt-4 text-[2rem] leading-[1.08] font-bold tracking-[-0.025em] text-navy sm:text-[2.6rem] lg:sticky lg:top-28 lg:text-[3rem]"
          >
            {about.title}
          </h2>
        </Reveal>

        <div className="lg:col-span-7 lg:pt-10">
          <Reveal className="space-y-6 text-[1.08rem] leading-[1.7] text-ink/85 sm:text-[1.15rem]">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </Reveal>

          <ol className="mt-12 grid gap-4 sm:grid-cols-3">
            {about.pillars.map((pillar, index) => (
              <Reveal as="li" key={pillar.title} delay={index * 80} className="card p-6">
                <span className="text-[0.8rem] font-semibold text-blue tabular-nums">0{index + 1}</span>
                <h3 className="mt-3 text-[1.08rem] leading-snug font-semibold tracking-[-0.01em] text-navy">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-slate">{pillar.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
