import { Mail, MapPin } from "lucide-react";

import { profile } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { SocialLinks } from "@/components/social-links";
import { MailComposer } from "@/components/mail-composer";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/60 px-6 py-16 text-center backdrop-blur-xl sm:px-16">
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
              <div className="absolute inset-0 grid-bg opacity-40" />
            </div>

            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {profile.availability}
            </span>

            <h2 className="mx-auto mt-6 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-gradient sm:text-5xl">
              Let&apos;s build something exceptional
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
              Whether you&apos;re hiring a senior engineer or need a partner for
              your next product, I&apos;d love to hear what you&apos;re building.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button type="button" size="lg" className="cursor-default">
                <Mail className="size-4" /> {profile.email}
              </Button>
              <MailComposer />
            </div>

            <SocialLinks className="mt-9" />

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4 text-primary" /> {profile.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Mail className="size-4 text-primary" /> {profile.email}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
