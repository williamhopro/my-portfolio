import { ArrowUpRight } from "lucide-react";

import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  return (
    <section id="work" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Featured Work"
          title="Selected engagement highlights"
          description="Case studies drawn directly from real roles — the challenges, the build, and the outcome shipped."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <Reveal key={project.slug} delay={(i % 2) * 0.08}>
                <article className="group glass relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                      project.accent
                    )}
                  />
                  <div className="relative flex items-start justify-between gap-4">
                    <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary ring-1 ring-inset ring-primary/20">
                      <Icon className="size-6" />
                    </span>
                    <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>

                  <div className="relative mt-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-primary/80">
                      {project.context}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="relative mt-5 space-y-3 text-sm">
                    <div>
                      <p className="font-medium text-foreground/90">Challenge</p>
                      <p className="text-muted-foreground">{project.challenge}</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground/90">Approach</p>
                      <p className="text-muted-foreground">{project.solution}</p>
                    </div>
                  </div>

                  <ul className="relative mt-5 space-y-2">
                    {project.impact.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-auto flex flex-wrap gap-2 pt-6">
                    {project.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
