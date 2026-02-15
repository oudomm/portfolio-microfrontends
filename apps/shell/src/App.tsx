import { useCallback, useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { RemoteMount } from "./RemoteMount";

function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return { dark, toggle: () => setDark((d) => !d) };
}

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `text-sm font-medium transition-all duration-200 ${isActive
          ? "text-gradient"
          : "text-muted hover:text-fg"
        }`
      }
    >
      {label}
    </NavLink>
  );
}

export default function App() {
  const { dark, toggle } = useTheme();
  const home = useCallback(() => import("home/mount"), []);
  const projects = useCallback(() => import("projects/mount"), []);
  const blog = useCallback(() => import("blog/mount"), []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background glow effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent-2/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-bg/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <NavLink to="/" className="font-mono text-lg font-bold tracking-tight transition-colors hover:text-accent">
            oudom<span className="text-gradient">.</span>
          </NavLink>

          <div className="flex items-center gap-6">
            <nav className="flex gap-6">
              <NavItem to="/" label="Home" />
              <NavItem to="/projects" label="Projects" />
              <NavItem to="/blog" label="Blog" />
            </nav>

            <button
              onClick={toggle}
              className="rounded-lg border border-border/50 p-2 text-muted transition-colors hover:text-fg hover:border-border cursor-pointer"
              aria-label="Toggle theme"
            >
              {dark ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="relative mx-auto w-full max-w-6xl flex-1 px-6 py-16">
        <Routes>
          <Route path="/" element={<RemoteMount load={home} />} />
          <Route path="/projects" element={<RemoteMount load={projects} />} />
          <Route path="/blog" element={<RemoteMount load={blog} />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-border/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-xs text-muted">
          <span>&copy; {new Date().getFullYear()} Phoem Oudom</span>
          <div className="flex gap-4">
            <a href="https://github.com/oudomm" className="hover:text-accent transition-colors" target="_blank"
              rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/oudomm" className="hover:text-accent transition-colors" target="_blank"
              rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:oudomphoem@gmail.com" className="hover:text-accent transition-colors" target="_blank"
              rel="noopener noreferrer">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
