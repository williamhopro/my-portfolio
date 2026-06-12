"use client";

import * as React from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { socialLinks } from "@/lib/data";

type SocialLinksProps = {
  className?: string;
  /** Visual treatment: pill buttons (default) or compact icon-only badges. */
  variant?: "pill" | "icon";
};

export function SocialLinks({ className, variant = "pill" }: SocialLinksProps) {
  const [copied, setCopied] = React.useState<string | null>(null);
  const timeout = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    []
  );

  const handleCopy = React.useCallback((value: string, label: string) => {
    void navigator.clipboard?.writeText(value);
    setCopied(label);
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setCopied(null), 1800);
  }, []);

  const base =
    "group inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
  const sizing = variant === "icon" ? "h-10 w-10 justify-center" : "px-4 py-2 text-sm";

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2",
        variant === "pill" ? "justify-center" : "",
        className
      )}
    >
      {socialLinks.map((link) => {
        const isCopied = copied === link.label;
        const Icon = isCopied ? Check : link.icon;
        const labelText =
          variant === "icon"
            ? null
            : isCopied
              ? "Copied!"
              : link.handle;

        const content = (
          <>
            <Icon
              className={cn(
                "size-4 shrink-0 transition-colors",
                isCopied ? "text-emerald-400" : "text-primary"
              )}
            />
            {labelText && <span className="truncate">{labelText}</span>}
          </>
        );

        if (link.href) {
          const external = link.href.startsWith("http");
          return (
            <a
              key={link.label}
              href={link.href}
              aria-label={`${link.label}: ${link.handle}`}
              title={`${link.label} · ${link.handle}`}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={cn(base, sizing)}
            >
              {content}
            </a>
          );
        }

        return (
          <button
            key={link.label}
            type="button"
            onClick={() => handleCopy(link.copy ?? link.handle, link.label)}
            aria-label={`Copy ${link.label} handle ${link.handle}`}
            title={`${link.label} · ${link.handle} (click to copy)`}
            className={cn(base, sizing)}
          >
            {content}
          </button>
        );
      })}
    </div>
  );
}
