import { ClipboardList, GitPullRequest, BarChart3, CheckCircle } from "lucide-react";
import { useInView } from "../hooks/useInView";

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
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: stepsRef, inView: stepsVisible } = useInView({ threshold: 0.1 });

  return (
    <section id="how-it-works" className="scroll-mt-20 bg-white py-24 lg:py-32 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mx-auto mb-16 max-w-2xl text-center transition-all duration-700 ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-400">
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
        <div ref={stepsRef} className="relative">
          {/* Connector line (desktop) — animated width */}
          <div
            className="absolute top-6 right-0 left-0 hidden h-px lg:block"
            style={{
              background: "linear-gradient(to right, transparent, var(--color-violet-300, #c4b5fd), transparent)",
              opacity: stepsVisible ? 1 : 0,
              transform: stepsVisible ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, opacity 0.5s ease 0.3s",
            }}
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.step}
                className={`relative text-center transition-all duration-600 ${
                  stepsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: stepsVisible ? `${i * 150}ms` : "0ms" }}
              >
                {/* Step number */}
                <div className="relative z-10 mx-auto mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-violet-600 to-purple-600 text-sm font-bold text-white shadow-lg shadow-purple-500/25 transition-transform duration-300 hover:scale-110">
                  {s.step}
                </div>

                {/* Icon */}
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-50 transition-colors duration-300 hover:bg-violet-100 dark:bg-violet-500/10 dark:hover:bg-violet-500/15">
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
