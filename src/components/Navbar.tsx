import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Rocket, Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { APP_URL } from "../config";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollLink = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/60 bg-white/80 shadow-sm backdrop-blur-lg dark:border-slate-800/60 dark:bg-slate-950/80 dark:shadow-black/10"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-violet-500 to-purple-600 shadow-lg shadow-purple-500/20 transition-transform duration-300 hover:scale-105">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            DevFlows
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {[
            { href: scrollLink("#features"), label: "Features" },
            { href: scrollLink("#how-it-works"), label: "How it works" },
            { href: scrollLink("#integrations"), label: "Integrations" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-slate-600 no-underline transition-colors duration-200 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-violet-500 after:transition-all after:duration-300 hover:text-violet-600 hover:after:w-full dark:text-slate-400 dark:hover:text-violet-400"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/docs"
            className="relative text-sm font-medium text-slate-600 no-underline transition-colors duration-200 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-violet-500 after:transition-all after:duration-300 hover:text-violet-600 hover:after:w-full dark:text-slate-400 dark:hover:text-violet-400"
          >
            Docs
          </Link>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-all duration-200 hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200"
          >
            <span className="transition-transform duration-300">
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </span>
          </button>

          <a
            href={APP_URL}
            className="inline-flex h-9 items-center rounded-lg bg-linear-to-r from-violet-600 to-purple-600 px-5 text-sm font-semibold text-white no-underline shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-purple-500/40 hover:brightness-110"
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
      <div
        className={`overflow-hidden border-t border-slate-200/60 bg-white transition-all duration-300 ease-in-out dark:border-slate-800/60 dark:bg-slate-950 md:hidden ${
          open ? "max-h-64 opacity-100" : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 py-4">
          <a href={scrollLink("#features")} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-600 no-underline dark:text-slate-400">Features</a>
          <a href={scrollLink("#how-it-works")} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-600 no-underline dark:text-slate-400">How it works</a>
          <a href={scrollLink("#integrations")} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-600 no-underline dark:text-slate-400">Integrations</a>
          <Link to="/docs" onClick={() => setOpen(false)} className="text-sm font-medium text-slate-600 no-underline dark:text-slate-400">Docs</Link>
          <a href={APP_URL} className="inline-flex h-9 items-center justify-center rounded-lg bg-linear-to-r from-violet-600 to-purple-600 px-5 text-sm font-semibold text-white no-underline">Get Started</a>
        </div>
      </div>
    </nav>
  );
}
