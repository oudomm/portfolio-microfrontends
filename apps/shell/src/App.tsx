import { useCallback } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { RemoteMount } from "./RemoteMount";

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `text-sm transition-colors ${isActive
          ? "text-accent underline underline-offset-4 decoration-accent"
          : "text-muted hover:text-fg"
        }`
      }
    >
      {label}
    </NavLink>
  );
}

export default function App() {
  const home = useCallback(() => import("home/mount"), []);
  const projects = useCallback(() => import("projects/mount"), []);
  const blog = useCallback(() => import("blog/mount"), []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <NavLink to="/" className="font-mono text-base tracking-tight">
            oudom<span className="text-accent">.</span>
          </NavLink>

          <nav className="flex gap-6">
            <NavItem to="/" label="Home" />
            <NavItem to="/projects" label="Projects" />
            <NavItem to="/blog" label="Blog" />
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16">
        <Routes>
          <Route path="/" element={<RemoteMount load={home} />} />
          <Route path="/projects" element={<RemoteMount load={projects} />} />
          <Route path="/blog" element={<RemoteMount load={blog} />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-xs text-muted">
          <span>&copy; {new Date().getFullYear()} Oudom</span>
          <div className="flex gap-4">
            <a href="https://github.com/oudomm" className="hover:text-fg transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/oudomm" className="hover:text-fg transition-colors">LinkedIn</a>
            <a href="mailto:oudomphoem@gmail.com" className="hover:text-fg transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
