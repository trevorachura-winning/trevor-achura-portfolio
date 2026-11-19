import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "split";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "left",
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <Reveal
      className={
        align === "split"
          ? "grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10"
          : "max-w-3xl"
      }
    >
      <div className={align === "split" ? "lg:col-span-7" : undefined}>
        <p className={dark ? "eyebrow text-[#8fb3ff]" : "eyebrow"}>{eyebrow}</p>
        <h2
          id={`${id}-title`}
          className={`mt-4 text-[2rem] leading-[1.08] font-bold tracking-[-0.025em] sm:text-[2.6rem] lg:text-[3rem] ${
            dark ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h2>
      </div>
      {intro ? (
        <p
          className={`text-[1.05rem] leading-relaxed sm:text-lg ${
            align === "split" ? "lg:col-span-5" : "mt-5"
          } ${dark ? "text-white/70" : "text-slate"}`}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
