"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Loader2,
  Minus,
  Send,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { profile } from "@/lib/data";
import { Button } from "@/components/ui/button";

const RECIPIENT = profile.email;
// FormSubmit delivers form posts to an email address with no API key or signup.
// The first submission triggers a one-time confirmation email to the recipient.
const ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(RECIPIENT)}`;

type Status = "idle" | "sending" | "success" | "error" | "pending";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function MailComposer() {
  const [open, setOpen] = React.useState(false);
  const [minimized, setMinimized] = React.useState(false);
  const [status, setStatus] = React.useState<Status>("idle");
  const [error, setError] = React.useState<string | null>(null);

  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const subjectRef = React.useRef<HTMLInputElement>(null);

  const close = React.useCallback(() => {
    setOpen(false);
    setMinimized(false);
  }, []);

  // Lock body scroll + Escape to close while the composer is open.
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  // Focus the subject once the window is expanded.
  React.useEffect(() => {
    if (open && !minimized) {
      const t = setTimeout(() => subjectRef.current?.focus(), 120);
      return () => clearTimeout(t);
    }
  }, [open, minimized]);

  const resetSoon = React.useCallback(() => {
    setTimeout(() => {
      close();
      setStatus("idle");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 1600);
  }, [close]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!emailRe.test(email)) {
      setError("Please enter a valid email so I can reply.");
      return;
    }
    if (!subject.trim() || !message.trim()) {
      setError("Add a subject and a message before sending.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: email, // shown as the sender label
          email, // sets the Reply-To, so you can reply straight from Gmail
          _subject: `Portfolio · ${subject}`,
          message,
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = await res.json();
      const succeeded = data.success === true || data.success === "true";
      const needsActivation = /activat/i.test(String(data.message ?? ""));
      // FormSubmit returns success as a boolean or the string "true".
      if (res.ok && succeeded) {
        setStatus("success");
        resetSoon();
      } else if (needsActivation) {
        // Not an error — the request went through; the inbox owner just has to
        // confirm the form once via the email FormSubmit sent them.
        setStatus("pending");
        setError(null);
      } else {
        setStatus("error");
        setError(
          data.message || "Something went wrong. Please try again in a moment."
        );
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again in a moment.");
    }
  }

  const sending = status === "sending";

  return (
    <>
      <Button
        type="button"
        size="lg"
        variant="glass"
        onClick={() => {
          setOpen(true);
          setMinimized(false);
        }}
      >
        Start a conversation <ArrowRight className="size-4" />
      </Button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="fixed inset-0 z-[60] bg-background/70 backdrop-blur-sm"
              aria-hidden
            />

            {/* Composer window — centered on mobile, docked bottom-right on desktop */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Compose a message to William Ho"
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-4 bottom-4 z-[70] mx-auto flex max-h-[90svh] w-auto max-w-lg flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_80px_-12px_rgba(0,0,0,0.7)] sm:inset-x-auto sm:bottom-6 sm:right-6 sm:mx-0 sm:w-[28rem]"
            >
              {/* Header bar */}
              <div className="flex items-center justify-between gap-2 bg-secondary/80 px-4 py-2.5 backdrop-blur">
                <p className="text-sm font-medium text-foreground">
                  New message
                </p>
                <div className="flex items-center gap-0.5">
                  <button
                    type="button"
                    onClick={() => setMinimized((v) => !v)}
                    aria-label={minimized ? "Expand composer" : "Minimize composer"}
                    className="grid size-7 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
                  >
                    <Minus className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={close}
                    aria-label="Close composer"
                    className="grid size-7 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
                  >
                    <X className="size-4" />
                  </button>
                </div>
              </div>

              {!minimized && (
                <form
                  onSubmit={handleSubmit}
                  className="flex min-h-0 flex-1 flex-col"
                >
                  <div className="min-h-0 flex-1 overflow-y-auto">
                    {/* To (fixed recipient) */}
                    <div className="flex items-center gap-2 border-b border-border px-4 py-2.5 text-sm">
                      <span className="text-muted-foreground">To</span>
                      <span className="font-medium text-foreground">
                        {RECIPIENT}
                      </span>
                    </div>

                    {/* From (visitor email — used as reply-to) */}
                    <div className="flex items-center gap-2 border-b border-border px-4 py-1 text-sm">
                      <label htmlFor="mc-email" className="text-muted-foreground">
                        From
                      </label>
                      <input
                        id="mc-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        autoComplete="email"
                        className="w-full bg-transparent py-2 text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
                      />
                    </div>

                    {/* Subject / title */}
                    <div className="border-b border-border px-4 py-1">
                      <input
                        ref={subjectRef}
                        type="text"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Subject"
                        className="w-full bg-transparent py-2 text-sm font-medium text-foreground placeholder:font-normal placeholder:text-muted-foreground/60 focus:outline-none"
                      />
                    </div>

                    {/* Message / content */}
                    <textarea
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your message…"
                      rows={7}
                      className="block w-full resize-none bg-transparent px-4 py-3 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
                    />
                  </div>

                  {/* Status line */}
                  <AnimatePresence mode="wait">
                    {status === "success" && (
                      <motion.p
                        key="ok"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-emerald-400"
                      >
                        <CheckCircle2 className="size-4" /> Message sent — I&apos;ll
                        get back to you soon.
                      </motion.p>
                    )}
                    {status === "pending" && (
                      <motion.p
                        key="pending"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-start gap-2 px-4 py-2 text-sm text-amber-400"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                        <span>
                          Thanks! Your message was received. One-time setup:
                          the owner is activating the inbox — please try again
                          shortly.
                        </span>
                      </motion.p>
                    )}
                    {error && status !== "success" && status !== "pending" && (
                      <motion.p
                        key="err"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-red-400"
                      >
                        <AlertCircle className="size-4 shrink-0" /> {error}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* Footer / send */}
                  <div className="flex items-center justify-between gap-3 border-t border-border px-4 py-3">
                    <Button
                      type="submit"
                      disabled={sending || status === "success"}
                      className={cn("min-w-[7.5rem]")}
                    >
                      {sending ? (
                        <>
                          <Loader2 className="size-4 animate-spin" /> Sending…
                        </>
                      ) : (
                        <>
                          <Send className="size-4" /> Send
                        </>
                      )}
                    </Button>
                    <span className="text-xs text-muted-foreground">
                      Goes straight to my inbox
                    </span>
                  </div>
                </form>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
