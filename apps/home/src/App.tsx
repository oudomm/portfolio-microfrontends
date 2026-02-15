import profileImg from "./profile.jpg";

const stack = {
  Languages: ["Java", "Python", "JavaScript", "TypeScript"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "Microfrontends"],
  Backend: ["Spring Boot", "PostgreSQL", "MongoDB", "Microservices"],
  "DevOps & Tools": ["Git", "Docker", "VS Code", "IntelliJ IDEA"],
};

export default function App() {
  return (
    <div className="space-y-24">
      {/* Hero */}
      <section className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-6 animate-fade-in-up">
          <div className="space-y-3">
            <p className="text-sm font-medium text-accent tracking-wide uppercase">
              Hello, I'm
            </p>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              Phoem<span className="text-gradient"> Oudom</span>
            </h1>
            <p className="text-lg text-muted max-w-lg">
              Software engineering student focused on full-stack web development.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">
              Student at ISTAD
            </span>
            <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
              Phnom Penh, Cambodia
            </span>
          </div>

          <div className="flex gap-4 text-sm">
            <a
              href="https://github.com/oudomm"
              className="text-muted hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/oudomm"
              className="text-muted hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="mailto:oudomphoem@gmail.com"
              className="text-muted hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="animate-fade-in animate-delay-200 shrink-0">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-linear-to-br from-accent to-accent-2 opacity-60 blur-md" />
            <div className="relative h-32 w-32 rounded-full border-2 border-border bg-card flex items-center justify-center overflow-hidden sm:h-40 sm:w-40">
              <img src={profileImg} alt="Oudom" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="space-y-4 animate-fade-in-up animate-delay-100">
        <h2 className="text-sm font-medium uppercase tracking-widest text-gradient">
          About
        </h2>
        <p className="max-w-2xl leading-relaxed text-muted">
          I'm a software engineering student in the ITP Program at ISTAD,
          currently studying Spring microservices. I enjoy building full-stack
          applications — from crafting clean frontends with React and Next.js to
          designing backend services with Spring Boot. I'm always looking to
          learn and build things that solve real problems.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="space-y-6 animate-fade-in-up animate-delay-200">
        <h2 className="text-sm font-medium uppercase tracking-widest text-gradient">
          Stack
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {Object.entries(stack).map(([category, items]) => (
            <div key={category} className="glass-card rounded-xl p-5 space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-accent">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border/50 bg-bg/50 px-2.5 py-1 font-mono text-xs text-fg/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
