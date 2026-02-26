import {
  LayoutDashboard,
  Rocket,
  BarChart3,
  Users,
  Shield,
  GitBranch,
} from "lucide-react";
import { useInView } from "../hooks/useInView";

const features = [
  {
    icon: LayoutDashboard,
    title: "Kanban Board",
    description:
      "Drag-and-drop task management with custom columns, filters, and real-time optimistic updates. Stay organized without overhead.",
    gradient: "from-emerald-600 to-teal-700",
    shadow: "shadow-emerald-600/20",
  },
  {
    icon: Rocket,
    title: "Deployment Timeline",
    description:
      'Track every release across environments. See exactly what version is where and answer "who deployed what, when" in seconds.',
    gradient: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-500/20",
  },
  {
    icon: BarChart3,
    title: "DORA Metrics",
    description:
      "Deployment frequency, lead time, change failure rate, and MTTR — all calculated automatically from your deployment data.",
    gradient: "from-emerald-500 to-teal-500",
    shadow: "shadow-emerald-600/20",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Invite members, assign roles, get notified. Everyone stays in the loop with automated email notifications for key events.",
    gradient: "from-orange-500 to-amber-500",
    shadow: "shadow-orange-500/20",
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description:
      "OAuth2 with PKCE, JWT with rotational refresh tokens, email verification, and scoped API keys for CI/CD integrations.",
    gradient: "from-rose-500 to-pink-500",
    shadow: "shadow-rose-500/20",
  },
  {
    icon: GitBranch,
    title: "CI/CD Native",
    description:
      "Plug into GitHub Actions, GitLab CI, or any pipeline with a single webhook. Ready-made snippets get you started in minutes.",
    gradient: "from-indigo-500 to-emerald-600",
    shadow: "shadow-indigo-500/20",
  },
];

export default function Features() {
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: gridRef, inView: gridVisible } = useInView({ threshold: 0.05 });

  return (
    <section id="features" className="relative scroll-mt-20 py-24 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-slate-50/80 to-white dark:from-slate-900/50 dark:to-slate-950" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mx-auto mb-16 max-w-2xl text-center transition-all duration-700 ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="mb-3 text-sm font-semibold tracking-wide uppercase text-emerald-700 dark:text-emerald-500">
            Everything you need
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            One platform, full visibility
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            From task planning to production monitoring — DevFlows bridges the
            gap between what you're building and what's running.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/10 dark:hover:border-slate-600 dark:hover:shadow-black/20 ${
                gridVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: gridVisible ? `${i * 100}ms` : "0ms" }}
            >
              {/* Accent glow on hover */}
              <div
                className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-linear-to-br ${f.gradient} opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-[0.08] dark:group-hover:opacity-[0.12]`}
              />

              <div
                className={`relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${f.gradient} shadow-lg ${f.shadow} transition-transform duration-300 group-hover:scale-110`}
              >
                <f.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="relative mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                {f.title}
              </h3>
              <p className="relative text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
