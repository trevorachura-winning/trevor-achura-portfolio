import type { CaseStudy } from "./types";

/**
 * Phase two. Returns only case studies that are approved for publication.
 * Nothing renders this yet — the projects section ships when the first
 * approved case study (screenshots, responsibilities, verified results) exists.
 */
export function publishableCaseStudies(caseStudies: readonly CaseStudy[]): CaseStudy[] {
  return caseStudies.filter(
    (study) =>
      study.status === "approved" &&
      study.screenshots.every((shot) => shot.approved) &&
      (study.liveUrl ? study.liveUrl.verified : true),
  );
}
