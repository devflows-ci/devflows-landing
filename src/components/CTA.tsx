import { ArrowRight } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { APP_URL, SUPPORT_EMAIL, SUPPORT_MAILTO } from "../config";

export default function CTA() {
  const { ref, inView } = useInView();

  return (
    <section className="relative bg-white py-24 lg:py-32 dark:bg-slate-950">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-125 w-200 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow rounded-full bg-emerald-500/5 blur-[120px]" />
      </div>

      <div
        ref={ref}
        className={`mx-auto max-w-4xl px-6 text-center transition-all duration-700 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
          Ready to streamline your{" "}
          <span className="bg-linear-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent dark:from-emerald-500 dark:to-teal-500">
            workflow
          </span>
          ?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-400">
          Start with Free, grow on Premium, or switch to Business when you need
          unlimited workspace capacity.
        </p>
        <div className="mt-10">
          <a
            href={APP_URL}
            className="group inline-flex h-12 items-center gap-2 rounded-xl bg-linear-to-r from-emerald-700 to-teal-700 px-8 text-base font-semibold text-white no-underline shadow-xl shadow-teal-600/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-teal-600/40 hover:brightness-110"
          >
            Start Free Workspace
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            Need help choosing a plan?{" "}
            <a
              href={SUPPORT_MAILTO}
              className="font-medium text-emerald-700 no-underline hover:text-emerald-500 dark:text-emerald-500"
            >
              {SUPPORT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
