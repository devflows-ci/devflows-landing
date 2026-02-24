import {
  LayoutDashboard,
  Rocket,
  BarChart3,
  Users,
  Shield,
  GitBranch,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Kanban Board",
    description:
      "Drag-and-drop task management with custom columns, filters, and real-time optimistic updates. Stay organized without overhead.",
    gradient: "from-violet-500 to-purple-600",
    shadow: "shadow-violet-500/20",
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
    shadow: "shadow-emerald-500/20",
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
    gradient: "from-indigo-500 to-violet-500",
    shadow: "shadow-indigo-500/20",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative scroll-mt-20 py-24 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-slate-50/80 to-white dark:from-slate-900/50 dark:to-slate-950" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-violet-600 uppercase dark:text-violet-400">
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/10 dark:hover:border-slate-600 dark:hover:shadow-black/20"
            >
              {/* Accent glow on hover */}
              <div
                className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-linear-to-br ${f.gradient} opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-[0.08] dark:group-hover:opacity-[0.12]`}
              />

              <div
                className={`relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${f.gradient} shadow-lg ${f.shadow}`}
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
