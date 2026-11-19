"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";

type Status = "idle" | "copied" | "error";

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = window.setTimeout(() => setStatus("idle"), 2000);
    return () => window.clearTimeout(timer);
  }, [status]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="relative z-10 inline-flex h-11 shrink-0 items-center gap-2 rounded-full px-4 text-[0.85rem] font-medium text-white/80 ring-1 ring-white/15 transition-colors hover:bg-white/10 hover:text-white"
    >
      <Icon name={status === "copied" ? "check" : "copy"} width={16} height={16} />
      <span>{status === "copied" ? "Copied" : status === "error" ? "Copy failed" : "Copy"}</span>
      <span className="sr-only"> {label}</span>
      <span role="status" aria-live="polite" className="sr-only">
        {status === "copied" ? `${label} copied to clipboard` : status === "error" ? "Copy failed" : ""}
      </span>
    </button>
  );
}
