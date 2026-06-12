import { navLinks, profile } from "@/lib/data";
import { SocialLinks } from "@/components/social-links";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <a href="#top" className="flex items-center justify-center gap-2 md:justify-start">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/15 text-sm font-semibold text-primary ring-1 ring-primary/30">
                WH
              </span>
              <span className="font-semibold tracking-tight">{profile.name}</span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              {profile.title} · {profile.location}
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <SocialLinks variant="icon" className="md:justify-end" />
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with Next.js,
            TypeScript, Tailwind CSS &amp; Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
