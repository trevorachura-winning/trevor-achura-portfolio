import type { Portfolio } from "@/lib/types";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Insights({ insights }: { insights: Portfolio["insights"] }) {
  return (
    <section id="insights" aria-labelledby="insights-title" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="insights"
          eyebrow="Insights"
          align="split"
          title="What I'm thinking about."
          intro={insights.intro}
        />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {insights.themes.map((theme, index) => (
            <Reveal as="li" key={theme.id} delay={index * 60} className="flex flex-col bg-white p-7 sm:last:col-span-2 lg:last:col-span-1">
              <span className="text-[0.8rem] font-semibold text-blue tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-[1.12rem] leading-snug font-bold tracking-[-0.015em] text-navy">
                {theme.title}
              </h3>
              <p className="mt-3 text-[0.93rem] leading-relaxed text-slate">{theme.question}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
