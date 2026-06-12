import Image from "next/image";

import { experiences } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="A track record of progressive ownership"
          description="From Junior Developer to Senior Full Stack Engineer — four roles, delivered remotely across the US and Europe."
        />

        <div className="relative mt-16 mx-auto max-w-3xl">
          {/* Vertical timeline rail */}
          <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-primary/40 via-border to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.05}>
                <div className="relative pl-12 sm:pl-0">
                  {/* Node */}
                  <span className="absolute left-4 top-2 z-10 grid size-3 -translate-x-1/2 place-items-center sm:left-1/2">
                    <span className="size-3 rounded-full bg-primary ring-4 ring-background" />
                  </span>

                  <div className="sm:grid sm:grid-cols-2 sm:gap-8">
                    {/* Meta column — alternates side on desktop */}
                    <div
                      className={
                        i % 2 === 0
                          ? "sm:col-start-1 sm:text-right sm:pr-10"
                          : "sm:col-start-2 sm:pl-10"
                      }
                    >
                      <p className="text-xs font-medium uppercase tracking-wider text-primary/80">
                        {exp.period}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {exp.location}
                      </p>
                    </div>

                    {/* Content card */}
                    <div
                      className={
                        i % 2 === 0
                          ? "sm:col-start-2 sm:pl-10"
                          : "sm:col-start-1 sm:row-start-1 sm:pr-10"
                      }
                    >
                      <div className="glass rounded-2xl p-6">
                        <h3 className="text-lg font-semibold tracking-tight">
                          {exp.role}
                        </h3>
                        {exp.logo ? (
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            width={936}
                            height={500}
                            className="mt-1 h-6 w-auto"
                          />
                        ) : (
                          <p className="text-sm font-medium text-primary">
                            {exp.company}
                          </p>
                        )}
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {exp.stack}
                        </p>
                        <p className="mt-3 text-sm text-muted-foreground">
                          {exp.summary}
                        </p>
                        <ul className="mt-4 space-y-2">
                          {exp.achievements.map((a) => (
                            <li
                              key={a}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
