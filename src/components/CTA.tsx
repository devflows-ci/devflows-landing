import { ArrowRight } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { APP_URL } from "../config";

export default function CTA() {
  const { ref, inView } = useInView();

  return (
    <section className="relative bg-white py-24 lg:py-32 dark:bg-slate-950">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-125 w-200 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow rounded-full bg-violet-500/5 blur-[120px]" />
      </div>

      <div
        ref={ref}
        className={`mx-auto max-w-4xl px-6 text-center transition-all duration-700 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
          Ready to streamline your{" "}
          <span className="bg-linear-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-purple-400">
            workflow
          </span>
          ?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-400">
          Join the teams that already ship faster with DevFlows. Free to start,
          no credit card required.
        </p>
        <div className="mt-10">
          <a
            href={APP_URL}
            className="group inline-flex h-12 items-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-purple-600 px-8 text-base font-semibold text-white no-underline shadow-xl shadow-purple-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/40 hover:brightness-110"
          >
            Get started for free
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
