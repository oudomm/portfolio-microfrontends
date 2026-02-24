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
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              Oudom
            </h1>
            <p className="text-lg text-muted max-w-lg">
              Building things with Spring Boot and Next.js. Based in Phnom Penh.
            </p>
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
              href="https://linkedin.com/in/oudomdev"
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
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
          About
        </h2>
        <p className="max-w-2xl leading-relaxed text-muted">
          Full-stack developer who enjoys both sides of the stack — Spring Boot
          microservices on the backend, microfrontend architectures with Next.js
          multi-zones and Module Federation on the frontend.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="space-y-6 animate-fade-in-up animate-delay-200">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
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
