import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-navy">This page doesn&apos;t exist.</h1>
      <p className="mt-4 text-slate">The link may be out of date.</p>
      <Link href="/" className="btn-primary mt-8">
        Back to the homepage
      </Link>
    </main>
  );
}
