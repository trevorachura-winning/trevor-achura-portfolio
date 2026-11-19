import type { SVGProps } from "react";

const paths = {
  arrowRight: <path d="M5 12h14m-6-6 6 6-6 6" />,
  arrowDown: <path d="M12 5v14m-6-6 6 6 6-6" />,
  arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
  mapPin: (
    <>
      <path d="M12 21s-7-5.6-7-11a7 7 0 1 1 14 0c0 5.4-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  phone: (
    <path d="M5 4h3.2l1.6 4-2.2 1.4a11 11 0 0 0 5 5l1.4-2.2 4 1.6V17a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  chat: (
    <path d="M4 19.5 5.3 15A8 8 0 1 1 9 18.7L4 19.5Z" />
  ),
  copy: (
    <>
      <rect x="9" y="9" width="11" height="11" rx="2.5" />
      <path d="M15 9V6.5A2.5 2.5 0 0 0 12.5 4h-6A2.5 2.5 0 0 0 4 6.5v6A2.5 2.5 0 0 0 6.5 15H9" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  github: (
    <path d="M9 19c-4 1.3-4-2-6-2.5m12 5v-3.5a3 3 0 0 0-.9-2.4c3-.3 6.1-1.5 6.1-6.6a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.1-.4-3.7 1.4a12.6 12.6 0 0 0-6.6 0C5.8 1.4 4.7 1.8 4.7 1.8a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 3.2 9c0 5.1 3.1 6.3 6.1 6.6a3 3 0 0 0-.9 2.4V21.5" />
  ),
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
