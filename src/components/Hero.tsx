import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pb-20 lg:pb-32" style={{ paddingTop: "clamp(10rem, 15vw, 14rem)" }}>
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[100px] dark:bg-violet-500/5" />
        <div className="absolute top-20 -left-40 h-[400px] w-[400px] rounded-full bg-purple-500/8 blur-[100px] dark:bg-purple-500/5" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-violet-400/5 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 dark:border-violet-500/20 dark:bg-violet-500/10">
          <Sparkles className="h-4 w-4 text-violet-600 dark:text-violet-400" />
          <span className="text-sm font-medium text-violet-700 dark:text-violet-300">
            Developer Workflow Platform
          </span>
        </div>

        {/* Motto */}
        <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
          Little teams,{" "}
          <span className="bg-linear-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-purple-400">
            big projects
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-400">
          Connect your tasks, deployments, and metrics in one place.
          DevFlows gives small teams the visibility and control they need
          to ship with confidence.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="group inline-flex h-12 items-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-purple-600 px-8 text-base font-semibold text-white no-underline shadow-xl shadow-purple-500/25 transition-all hover:shadow-purple-500/40 hover:brightness-110"
          >
            Start for free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#features"
            className="inline-flex h-12 items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 text-base font-semibold text-slate-700 no-underline shadow-sm transition-all hover:border-slate-400 hover:shadow-md dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-500"
          >
            See how it works
          </a>
        </div>

        {/* Hero visual — Kanban board mockup */}
        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="absolute -inset-4 rounded-2xl bg-linear-to-r from-violet-500/20 via-purple-500/20 to-violet-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-2xl shadow-slate-900/10 dark:border-slate-600 dark:bg-slate-900 dark:shadow-black/30">
            {/* Window chrome */}
            <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <div className="ml-4 flex-1 rounded-md bg-slate-200/60 py-1 text-center text-xs text-slate-400 dark:bg-slate-700 dark:text-slate-500">
                app.devflows.dev
              </div>
            </div>

            {/* Board mockup */}
            <div className="p-4 sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-linear-to-br from-violet-500 to-purple-600" />
                  <div className="text-left">
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Project Alpha
                    </div>
                    <div className="text-xs font-mono text-slate-400 dark:text-slate-500">
                      ALPHA-12
                    </div>
                  </div>
                </div>
                <div className="hidden gap-2 sm:flex">
                  <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:bg-green-500/15 dark:text-green-400">
                    Production
                  </span>
                  <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-500/15 dark:text-blue-400">
                    Staging
                  </span>
                </div>
              </div>

              {/* Columns */}
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {[
                  {
                    title: "Backlog",
                    cards: [
                      { key: "ALPHA-8", text: "Refactor auth module", tag: "enhancement", tagColor: "violet" as const },
                      { key: "ALPHA-9", text: "Add rate limiting", tag: "security", tagColor: "red" as const },
                    ],
                  },
                  {
                    title: "In Progress",
                    cards: [
                      { key: "ALPHA-10", text: "CI/CD webhook integration", tag: "feature", tagColor: "blue" as const },
                    ],
                  },
                  {
                    title: "Review",
                    cards: [
                      { key: "ALPHA-11", text: "DORA metrics dashboard", tag: "feature", tagColor: "blue" as const },
                    ],
                  },
                  {
                    title: "Done",
                    cards: [
                      { key: "ALPHA-6", text: "OAuth2 social login", tag: "feature", tagColor: "blue" as const },
                      { key: "ALPHA-7", text: "Email notifications", tag: "feature", tagColor: "blue" as const },
                    ],
                  },
                ].map((col) => (
                  <div key={col.title} className="rounded-xl bg-slate-100 p-2.5 dark:bg-slate-800 sm:p-3">
                    <div className="mb-2.5 flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 sm:text-xs">
                        {col.title}
                      </span>
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-[10px] font-bold text-slate-500 dark:bg-slate-700 dark:text-slate-400">
                        {col.cards.length}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {col.cards.map((card) => {
                        const tagStyles = {
                          violet: "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-400",
                          red: "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400",
                          blue: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",
                        };
                        return (
                          <div key={card.key} className="rounded-lg border border-slate-200 bg-white p-2.5 shadow-sm dark:border-slate-600 dark:bg-slate-900 sm:p-3">
                            <div className="mb-1 font-mono text-[10px] text-slate-400 dark:text-slate-500 sm:text-[11px]">
                              {card.key}
                            </div>
                            <div className="text-xs font-medium text-slate-700 dark:text-slate-300 sm:text-sm">
                              {card.text}
                            </div>
                            <div className="mt-1.5">
                              <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${tagStyles[card.tagColor]}`}>
                                {card.tag}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
