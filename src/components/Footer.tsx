import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";
import { SUPPORT_EMAIL, SUPPORT_MAILTO } from "../config";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 no-underline">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-emerald-600 to-teal-700">
              <Rocket className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold text-slate-900 dark:text-white">DevFlows</span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="/#features" className="text-sm text-slate-500 no-underline transition hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300">
              Features
            </a>
            <a href="/#how-it-works" className="text-sm text-slate-500 no-underline transition hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300">
              How it works
            </a>
            <a href="/#integrations" className="text-sm text-slate-500 no-underline transition hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300">
              Integrations
            </a>
            <a href="/#task-automation" className="text-sm text-slate-500 no-underline transition hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300">
              Task Automation
            </a>
            <a href="/#pricing" className="text-sm text-slate-500 no-underline transition hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300">
              Pricing
            </a>
            <Link to="/docs" className="text-sm text-slate-500 no-underline transition hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300">
              Docs
            </Link>
            <a href={SUPPORT_MAILTO} className="text-sm text-slate-500 no-underline transition hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300">
              {SUPPORT_EMAIL}
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-400 dark:text-slate-500">
            &copy; {new Date().getFullYear()} DevFlows. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
