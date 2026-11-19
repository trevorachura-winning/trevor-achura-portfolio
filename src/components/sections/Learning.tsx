import type { Credential } from "@/lib/types";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Learning({ credentials }: { credentials: readonly Credential[] }) {
  return (
    <section id="learning" aria-labelledby="learning-title" className="scroll-mt-20 bg-ice/45 py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SectionHeading
            id="learning"
            eyebrow="Education & continuous learning"
            title="A foundation in law. A habit of learning by doing."
            intro="Formal study in law, alongside design, digital marketing and AI credentials that keep my practice current."
          />
        </div>

        <ol className="lg:col-span-7">
          {credentials.map((credential, index) => (
            <Reveal
              as="li"
              key={credential.id}
              delay={index * 60}
              className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 border-b border-line py-6 first:pt-0 sm:grid-cols-[7.5rem_1fr_auto]"
            >
              <span className="col-span-2 text-[0.72rem] font-semibold tracking-[0.12em] text-blue uppercase sm:col-span-1">
                {credential.kind}
              </span>
              <span>
                <span className="block text-[1.12rem] font-semibold tracking-[-0.01em] text-navy">
                  {credential.title}
                </span>
                {credential.issuer ? (
                  <span className="mt-0.5 block text-[0.95rem] text-slate">{credential.issuer}</span>
                ) : null}
              </span>
              <span className="text-[0.92rem] text-slate tabular-nums">{credential.period ?? ""}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
