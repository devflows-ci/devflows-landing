import { useState } from "react";
import { Terminal } from "lucide-react";
import { useInView } from "../hooks/useInView";

const tabs = [
  {
    name: "GitHub Action",
    file: ".github/workflows/deploy.yml",
    code: `- name: Notify DevFlows Deploy
  uses: devflows/deployment-action@v1
  with:
    webhook_url: \${{ secrets.DEVFLOWS_WEBHOOK_URL }}
    api_key: \${{ secrets.DEVFLOWS_API_KEY }}
    project_id: \${{ secrets.DEVFLOWS_PROJECT_ID }}
    environment: production
    release_version: \${{ github.sha }}`,
  },
  {
    name: "GitLab CI",
    file: ".gitlab-ci.yml",
    code: `notify_devflows:
  stage: deploy
  script:
    - curl -X POST "$DEVFLOWS_WEBHOOK_URL" \\
        -H "X-API-Key: $DEVFLOWS_API_KEY" \\
        -H "X-Project-ID: $PROJECT_ID" \\
        -H "Content-Type: application/json" \\
        -d '{"environment":"production","status":"success"}'`,
  },
  {
    name: "cURL",
    file: "Terminal",
    code: `curl -X POST \\
  "https://api.devflows.dev/api/deployments/webhook" \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -H "X-Project-ID: YOUR_PROJECT_ID" \\
  -H "Content-Type: application/json" \\
  -d '{
    "environment": "production",
    "release_version": "v1.2.3",
    "status": "success"
  }'`,
  },
];

export default function Integrations() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: codeRef, inView: codeVisible } = useInView({ threshold: 0.1 });

  return (
    <section
      id="integrations"
      className="relative scroll-mt-20 overflow-hidden bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] animate-float rounded-full bg-emerald-500/8 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] animate-float rounded-full bg-teal-600/8 blur-[120px] [animation-delay:3s]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div
          ref={headerRef}
          className={`mx-auto mb-16 max-w-3xl text-center transition-all duration-700 ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            Deploy Integrations
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Track releases from any pipeline
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Send deployment events from GitHub, GitLab, or any CI/CD runner using a single webhook endpoint.
          </p>
        </div>

        <div
          ref={codeRef}
          className={`mx-auto max-w-4xl transition-all duration-700 ${
            codeVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: codeVisible ? "200ms" : "0ms" }}
        >
          <div className="overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-800/80 shadow-2xl shadow-black/20 backdrop-blur-sm">
            <div className="flex items-center overflow-x-auto border-b border-slate-700/60">
              {tabs.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setActive(i)}
                  className={`shrink-0 px-5 py-3 text-sm font-medium transition-all duration-200 ${
                    i === active
                      ? "border-b-2 border-emerald-500 bg-slate-700/20 text-emerald-500"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>

            <div className="p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-2">
                <Terminal className="h-4 w-4 text-slate-500" />
                <span className="font-mono text-xs text-slate-500">{tab.file}</span>
              </div>
              <pre className="overflow-x-auto whitespace-pre text-[13px] leading-relaxed text-slate-300">
                <code>{tab.code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
