import type { ExpertiseArea, SkillGroup } from "@/lib/types";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ExpertiseProps = {
  areas: readonly ExpertiseArea[];
  skills: readonly SkillGroup[];
};

export function Expertise({ areas, skills }: ExpertiseProps) {
  const core = skills.filter((group) => group.tier === "core");
  const earlier = skills.filter((group) => group.tier === "earlier");

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-title"
      className="scroll-mt-20 py-20 sm:py-28"
    >
      <div className="container-page">
        <SectionHeading
          id="expertise"
          eyebrow="Expertise"
          align="split"
          title="Six disciplines. One goal: technology that improves the work."
          intro="Each discipline stands on its own, but the value comes from combining them — understanding the business, designing the solution and helping people adopt it."
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {areas.map((area, index) => (
            <Reveal
              as="li"
              key={area.id}
              delay={(index % 3) * 80}
              className="card group flex flex-col p-7 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-blue/30 hover:shadow-[0_24px_48px_-28px_rgb(7_21_51/0.35)] sm:p-8"
            >
              <span className="text-[0.85rem] font-semibold text-blue tabular-nums">{area.index}</span>
              <h3 className="mt-4 text-[1.3rem] leading-[1.2] font-bold tracking-[-0.02em] text-navy">
                {area.title}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-slate">{area.summary}</p>

              <ul className="mt-6 space-y-2 border-t border-line pt-6">
                {area.capabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-2.5 text-[0.93rem] text-ink/85">
                    <span aria-hidden="true" className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-navy/40" />
                    {capability}
                  </li>
                ))}
              </ul>

              <p className="mt-auto pt-7">
                <span className="block rounded-2xl bg-ice/70 p-4 text-[0.9rem] leading-relaxed text-navy">
                  <span className="font-semibold">Business value · </span>
                  {area.value}
                </span>
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-16 grid gap-10 rounded-[28px] border border-line bg-white p-7 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="text-[1.4rem] leading-tight font-bold tracking-[-0.02em] text-navy">
              Tools &amp; technologies
            </h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-slate">
              My core working stack, plus tools from earlier digital-marketing and creative work.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8">
            <SkillColumn label="Core working stack" groups={core} />
            <SkillColumn label="From earlier digital-marketing work" groups={earlier} muted />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SkillColumn({
  label,
  groups,
  muted = false,
}: {
  label: string;
  groups: readonly SkillGroup[];
  muted?: boolean;
}) {
  return (
    <div>
      <p className={`text-[0.75rem] font-semibold tracking-[0.12em] uppercase ${muted ? "text-slate" : "text-blue"}`}>
        {label}
      </p>
      <dl className="mt-4 space-y-5">
        {groups.map((group) => (
          <div key={group.title}>
            <dt className="text-[0.95rem] font-semibold text-navy">{group.title}</dt>
            <dd className="mt-2 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className={`rounded-full border px-3 py-1 text-[0.83rem] ${
                    muted ? "border-line text-slate" : "border-blue/20 bg-ice/60 text-navy"
                  }`}
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
