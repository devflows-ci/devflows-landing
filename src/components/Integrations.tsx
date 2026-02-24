import { useState } from "react";
import { Terminal } from "lucide-react";

const tabs = [
  {
    name: "GitHub Actions",
    file: ".github/workflows/deploy.yml",
    lines: [
      { type: "comment", text: "# Add to your workflow" },
      { type: "key", text: "- name", value: ": Notify DevFlows" },
      { type: "key", text: "  uses", value: ": devflows/deployment-action@v1" },
      { type: "key", text: "  with", value: ":" },
      { type: "key", text: "    webhook_url", value: ": ${{ secrets.DEVFLOWS_WEBHOOK_URL }}" },
      { type: "key", text: "    api_key", value: ": ${{ secrets.DEVFLOWS_API_KEY }}" },
      { type: "key", text: "    environment", value: ": production" },
      { type: "key", text: "    release_version", value: ": ${{ github.sha }}" },
    ],
  },
  {
    name: "GitLab CI",
    file: ".gitlab-ci.yml",
    lines: [
      { type: "key", text: "notify_devflows", value: ":" },
      { type: "key", text: "  stage", value: ": deploy" },
      { type: "key", text: "  script", value: ":" },
      { type: "key", text: "    - curl -X POST", value: "" },
      { type: "value", text: '        "$DEVFLOWS_WEBHOOK_URL"', value: "" },
      { type: "key", text: "        -H", value: ' "X-API-Key: $DEVFLOWS_API_KEY"' },
      { type: "key", text: "        -H", value: ' "X-Project-ID: $PROJECT_ID"' },
      { type: "key", text: "        -d", value: ' \'{"environment":"production"}\'' },
    ],
  },
  {
    name: "cURL",
    file: "Terminal",
    lines: [
      { type: "key", text: "curl", value: " -X POST \\" },
      { type: "value", text: '  "https://api.devflows.dev/api/deployments/webhook"', value: " \\" },
      { type: "key", text: "  -H", value: ' "X-API-Key: YOUR_API_KEY" \\' },
      { type: "key", text: "  -H", value: ' "X-Project-ID: YOUR_PROJECT_ID" \\' },
      { type: "key", text: "  -H", value: ' "Content-Type: application/json" \\' },
      { type: "key", text: "  -d", value: " '{" },
      { type: "value", text: '    "environment": "production",', value: "" },
      { type: "value", text: '    "release_version": "v1.2.3",', value: "" },
      { type: "value", text: '    "status": "success"', value: "" },
      { type: "key", text: "  }", value: "'" },
    ],
  },
];

export default function Integrations() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section
      id="integrations"
      className="relative scroll-mt-20 overflow-hidden bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 py-24 lg:py-32"
    >
      {/* Decorative */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/8 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-purple-500/8 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-violet-400 uppercase">
            Integrations
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Works with your stack
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            A single webhook is all it takes. Native support for the tools you
            already use.
          </p>
        </div>

        {/* Code snippet */}
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-800/80 shadow-2xl shadow-black/20 backdrop-blur-sm">
            {/* Tab bar */}
            <div className="flex items-center border-b border-slate-700/60 overflow-x-auto">
              {tabs.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setActive(i)}
                  className={`shrink-0 px-5 py-3 text-sm font-medium transition-colors ${
                    i === active
                      ? "border-b-2 border-violet-500 text-violet-400 bg-slate-700/20"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>

            {/* Code */}
            <div className="p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-2">
                <Terminal className="h-4 w-4 text-slate-500" />
                <span className="text-xs text-slate-500 font-mono">{tab.file}</span>
              </div>
              <pre className="overflow-x-auto text-[13px] leading-relaxed font-mono">
                <code>
                  {tab.lines.map((line, i) => (
                    <span key={i}>
                      {line.type === "comment" ? (
                        <span className="text-slate-500">{line.text}</span>
                      ) : line.type === "key" ? (
                        <>
                          <span className="text-purple-400">{line.text}</span>
                          <span className="text-slate-300">{line.value}</span>
                        </>
                      ) : (
                        <span className="text-emerald-400">{line.text}</span>
                      )}
                      {"\n"}
                    </span>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
          {["GitHub Actions", "GitLab CI", "Bitbucket Pipelines", "Jenkins", "Any CI/CD"].map((name) => (
            <div
              key={name}
              className="rounded-xl border border-slate-700/40 bg-slate-800/50 px-5 py-2.5 text-sm font-medium text-slate-400 backdrop-blur-sm transition hover:border-violet-500/30 hover:text-slate-300"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
