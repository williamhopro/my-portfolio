import { GraduationCap } from "lucide-react";

import { highlights } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/motion/reveal";

export function Achievements() {
  return (
    <section id="achievements" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Career Highlights"
          title="What sets the work apart"
          description="The competitive advantages built over seven years of shipping production software."
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <div className="group glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {/* Education callout */}
        <Reveal delay={0.1}>
          <div className="glass mt-6 flex flex-col items-start gap-5 rounded-2xl p-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-inset ring-primary/20">
                <GraduationCap className="size-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">
                  BSc in Computer Science
                </h3>
                <p className="text-sm text-primary">Lingnan University</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Data Structures · Algorithms · Database Systems · Software
                  Engineering · Cloud Computing
                </p>
              </div>
            </div>
            <span className="rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-muted-foreground">
              2015 — 2019 · Tuen Mun, Hong Kong
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
