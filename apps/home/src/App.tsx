const stack = {
  Languages: ["Java", "Python", "JavaScript", "TypeScript"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "Microfrontends"],
  Backend: ["Spring Boot", "PostgreSQL", "MongoDB", "Microservices"],
  "DevOps & Tools": ["Git", "Docker", "VS Code", "IntelliJ IDEA"],
};

export default function App() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">Oudom</h1>
        <p className="text-lg text-muted">
          Software engineering student focused on full-stack web development.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
            Student at ISTAD
          </span>
          <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
            Phnom Penh, Cambodia
          </span>
        </div>

        <div className="flex gap-4 text-sm text-muted">
          <a
            href="https://github.com/oudomm"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/oudomm"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:oudomphoem@gmail.com"
            className="hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </section>

      {/* About */}
      <section className="space-y-4">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
          About
        </h2>
        <p className="max-w-2xl leading-relaxed text-fg">
          I'm a software engineering student in the ITP Program at ISTAD,
          currently studying Spring microservices. I enjoy building full-stack
          applications — from crafting clean frontends with React and Next.js to
          designing backend services with Spring Boot. I'm always looking to
          learn and build things that solve real problems.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="space-y-6">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
          Stack
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {Object.entries(stack).map(([category, items]) => (
            <div key={category} className="space-y-2">
              <h3 className="text-xs font-medium text-muted">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-border bg-card px-2.5 py-1 font-mono text-xs"
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
