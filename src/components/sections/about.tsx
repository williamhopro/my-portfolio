import Image from "next/image";
import { Check } from "lucide-react";

import { about, profile } from "@/lib/data";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow={about.eyebrow}
          title={about.title}
          align="left"
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-7">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              {/* Portrait */}
              <div className="group relative overflow-hidden rounded-2xl border border-border">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-br from-primary/30 via-transparent to-fuchsia-500/20 opacity-70" />
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={profile.photo}
                    alt={`Portrait of ${profile.name}, ${profile.title}`}
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    priority={false}
                  />
                  {/* Bottom scrim for the name plate */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent p-5">
                    <p className="text-base font-semibold text-foreground">
                      {profile.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {profile.title} · {profile.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
              <p className="text-sm font-medium text-foreground">
                What you can count on
              </p>
              <ul className="mt-4 space-y-3">
                {about.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                      <Check className="size-3" />
                    </span>
                    <span className="text-sm text-muted-foreground">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-6 text-sm">
                <div>
                  <p className="text-muted-foreground">Based in</p>
                  <p className="font-medium">{profile.location}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Experience</p>
                  <p className="font-medium">{profile.yearsExperience} years</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Focus</p>
                  <p className="font-medium">Full Stack · AI · Web3</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Work style</p>
                  <p className="font-medium">Remote-first</p>
                </div>
              </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
