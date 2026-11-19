export function SiteFooter({ name }: { name: string }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-navy text-white/55">
      <div className="container-page flex flex-col gap-3 py-8 text-[0.85rem] sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {name}. All rights reserved.
        </p>
        <p>
          Part of the{" "}
          <a
            href="https://flameconnect.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-white/80 underline-offset-4 hover:text-white hover:underline"
          >
            Flame Connect
          </a>{" "}
          team portfolio network.
        </p>
      </div>
    </footer>
  );
}
