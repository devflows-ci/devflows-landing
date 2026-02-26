import { ArrowRight, Check, CreditCard, FolderKanban, Sparkles, Users } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { APP_URL, SUPPORT_EMAIL, SUPPORT_MAILTO } from "../config";

const plans = [
  {
    name: "Free",
    subtitle: "Best to start",
    description: "For solo builders and small teams validating workflows.",
    limits: [
      { icon: FolderKanban, text: "Up to 1 project per workspace" },
      { icon: Users, text: "Up to 3 users per workspace" },
      { icon: CreditCard, text: "No credit card required" },
    ],
    ctaLabel: "Start Free",
    ctaHref: APP_URL,
    highlight: false as const,
  },
  {
    name: "Premium",
    subtitle: "Most popular",
    description: "For product teams that need more projects and collaborators.",
    limits: [
      { icon: FolderKanban, text: "Up to 25 projects per workspace" },
      { icon: Users, text: "Up to 15 users per workspace" },
      { icon: CreditCard, text: "Workspace billing via Stripe or PayPal" },
    ],
    ctaLabel: "Choose Premium",
    ctaHref: APP_URL,
    highlight: true as const,
  },
  {
    name: "Business",
    subtitle: "For larger organizations",
    description: "For organizations that need expanded limits and a custom commercial setup.",
    limits: [
      { icon: FolderKanban, text: "Unlimited projects per workspace" },
      { icon: Users, text: "Unlimited users per workspace" },
      { icon: CreditCard, text: "Business activation via support" },
    ],
    ctaLabel: "Contact Support",
    ctaHref: SUPPORT_MAILTO,
    highlight: false as const,
  },
];

export default function Pricing() {
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: cardsRef, inView: cardsVisible } = useInView({ threshold: 0.1 });

  return (
    <section id="pricing" className="relative scroll-mt-20 bg-slate-50 py-24 lg:py-32 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={headerRef}
          className={`mx-auto mb-14 max-w-3xl text-center transition-all duration-700 ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-500">
            Workspace Billing
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Choose the plan that fits your team
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            DevFlows pricing is workspace-based with three modes: Free, Premium, and Business.
          </p>
        </div>

        <div ref={cardsRef} className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className={`relative overflow-hidden rounded-2xl border p-8 shadow-sm transition-all duration-500 ${
                plan.highlight
                  ? "border-emerald-400 bg-white shadow-lg shadow-emerald-600/20 dark:border-emerald-500/40 dark:bg-slate-900"
                  : "border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900"
              } ${cardsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: cardsVisible ? `${index * 120}ms` : "0ms" }}
            >
              <div
                className={`pointer-events-none absolute -top-20 -right-16 h-48 w-48 rounded-full blur-3xl ${
                  plan.highlight ? "bg-emerald-500/15" : "bg-slate-300/20 dark:bg-slate-700/25"
                }`}
              />

              <div className="relative flex items-center justify-between gap-3">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                <span
                  className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                    plan.highlight
                      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-400"
                      : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                  }`}
                >
                  {plan.subtitle}
                </span>
              </div>

              {plan.highlight && (
                <div className="relative mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-700/10 px-2.5 py-1 text-xs font-medium text-emerald-800 dark:text-emerald-400">
                  <Sparkles className="h-3.5 w-3.5" />
                  Recommended
                </div>
              )}

              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{plan.description}</p>

              <ul className="mt-6 space-y-3">
                {plan.limits.map((limit) => (
                  <li key={limit.text} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <limit.icon className="h-4 w-4 text-emerald-700 dark:text-emerald-500" />
                    <span>{limit.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-2 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                <Check className="h-4 w-4" />
                Enforced directly in product limits.
              </div>

              <a
                href={plan.ctaHref}
                className={`relative mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold no-underline transition-all duration-300 ${
                  plan.highlight
                    ? "bg-linear-to-r from-emerald-700 to-teal-700 text-white shadow-lg shadow-teal-600/25 hover:brightness-110"
                    : "border border-slate-300 bg-white text-slate-700 hover:border-slate-400 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-500"
                }`}
              >
                {plan.ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Questions about plans, billing, or migrations?{" "}
            <a className="font-semibold text-emerald-700 no-underline hover:text-emerald-500 dark:text-emerald-500" href={SUPPORT_MAILTO}>
              {SUPPORT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
