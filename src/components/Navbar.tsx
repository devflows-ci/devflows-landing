import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Rocket, Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollLink = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-lg dark:border-slate-800/60 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-violet-500 to-purple-600 shadow-lg shadow-purple-500/20">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            DevFlows
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          <a href={scrollLink("#features")} className="text-sm font-medium text-slate-600 no-underline transition hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400">
            Features
          </a>
          <a href={scrollLink("#how-it-works")} className="text-sm font-medium text-slate-600 no-underline transition hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400">
            How it works
          </a>
          <a href={scrollLink("#integrations")} className="text-sm font-medium text-slate-600 no-underline transition hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400">
            Integrations
          </a>
          <Link to="/docs" className="text-sm font-medium text-slate-600 no-underline transition hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400">
            Docs
          </Link>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href="#"
            className="inline-flex h-9 items-center rounded-lg bg-linear-to-r from-violet-600 to-purple-600 px-5 text-sm font-semibold text-white no-underline shadow-lg shadow-purple-500/25 transition hover:shadow-purple-500/40 hover:brightness-110"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggle}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-400"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 dark:text-slate-400"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200/60 bg-white px-6 py-4 dark:border-slate-800/60 dark:bg-slate-950 md:hidden">
          <div className="flex flex-col gap-4">
            <a href={scrollLink("#features")} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-600 no-underline dark:text-slate-400">Features</a>
            <a href={scrollLink("#how-it-works")} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-600 no-underline dark:text-slate-400">How it works</a>
            <a href={scrollLink("#integrations")} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-600 no-underline dark:text-slate-400">Integrations</a>
            <Link to="/docs" onClick={() => setOpen(false)} className="text-sm font-medium text-slate-600 no-underline dark:text-slate-400">Docs</Link>
            <a href="#" className="inline-flex h-9 items-center justify-center rounded-lg bg-linear-to-r from-violet-600 to-purple-600 px-5 text-sm font-semibold text-white no-underline">Get Started</a>
          </div>
        </div>
      )}
    </nav>
  );
}
