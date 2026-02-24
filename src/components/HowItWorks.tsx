import { ClipboardList, GitPullRequest, BarChart3, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Plan your work",
    description:
      "Create a project, set up your Kanban columns, and add tasks. Assign team members and track progress visually.",
  },
  {
    icon: GitPullRequest,
    step: "02",
    title: "Connect your pipeline",
    description:
      "Drop a webhook into your CI/CD pipeline. DevFlows captures every deployment with environment, version, and status automatically.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Measure what matters",
    description:
      "DORA metrics are calculated in real-time. See deployment frequency, lead time, failure rate, and recovery time at a glance.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Ship with confidence",
    description:
      "Know exactly what's running where. Your team has full visibility from backlog to production — no more guesswork.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-24 lg:py-32 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-violet-600 uppercase dark:text-violet-400">
            Simple workflow
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Up and running in minutes
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            No complex setup. No steep learning curve. Plug DevFlows into your
            existing workflow and start getting insights immediately.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="absolute top-6 right-0 left-0 hidden h-px bg-linear-to-r from-transparent via-violet-300 to-transparent lg:block dark:via-violet-500/30" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.step} className="relative text-center">
                {/* Step number */}
                <div className="relative z-10 mx-auto mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-violet-600 to-purple-600 text-sm font-bold text-white shadow-lg shadow-purple-500/25">
                  {s.step}
                </div>

                {/* Icon */}
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-50 dark:bg-violet-500/10">
                  <s.icon className="h-8 w-8 text-violet-600 dark:text-violet-400" />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
