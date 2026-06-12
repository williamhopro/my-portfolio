"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Sparkles } from "lucide-react";

import { profile, stats } from "@/lib/data";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pb-24 pt-32"
    >
      {/* Ambient aurora background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] animate-aurora" />
        <div className="absolute right-[10%] top-1/3 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-[120px] animate-aurora [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-[15%] h-[24rem] w-[24rem] rounded-full bg-sky-500/10 blur-[120px] animate-aurora [animation-delay:-12s]" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </div>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="text-gradient">{profile.name}</span>
          <span className="mt-3 block text-gradient-brand">
            {profile.title}
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg"
        >
          {profile.subheadline}
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4 text-primary" /> {profile.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="size-4 text-primary" /> {profile.yearsExperience} years experience
          </span>
        </motion.div>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg">
            <a href="#work">
              View my work <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="glass">
            <a href="#contact">
              <Mail className="size-4" /> Contact me
            </a>
          </Button>
        </motion.div>

        {/* Stat band */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-16 grid w-full max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border/50 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 bg-card/60 px-4 py-5 backdrop-blur"
            >
              <span className="text-2xl font-semibold text-gradient-brand sm:text-3xl">
                {stat.value}
              </span>
              <span className="text-center text-[11px] leading-tight text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
