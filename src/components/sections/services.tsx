import { Check } from "lucide-react";

import { services } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";

export function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="How I can help your team"
          description="Engagements scoped to outcomes — whether you need a full product, a single feature, or a performance lift."
        />

        <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title}>
                <div className="group glass flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-inset ring-primary/20">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-border pt-4">
                    {service.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="size-3.5 text-primary" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
