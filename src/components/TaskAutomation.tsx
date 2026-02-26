import { useState } from "react";
import { ArrowRightLeft, Terminal } from "lucide-react";
import { useInView } from "../hooks/useInView";

const tabs = [
  {
    name: "GitHub Action",
    file: ".github/workflows/move-task.yml",
    code: `- name: Move task to Review
  uses: raffaele/devflows-move-task-action@v1
  with:
    webhook_url: \${{ secrets.DEVFLOWS_TASK_WEBHOOK_URL }}
    api_key: \${{ secrets.DEVFLOWS_API_KEY }}
    project_id: \${{ secrets.DEVFLOWS_PROJECT_ID }}
    column_id: \${{ vars.DEVFLOWS_REVIEW_COLUMN_ID }}`,
  },
  {
    name: "GitLab CI",
    file: ".gitlab-ci.yml",
    code: `move_task:
  stage: deploy
  script:
    - TASK_KEY=$(echo "$CI_COMMIT_REF_NAME" | grep -o -E "[A-Z]+-[0-9]+") || true
    - |
      [ -z "$TASK_KEY" ] && echo "No task key found" && exit 0
      curl -X POST "$DEVFLOWS_TASK_WEBHOOK_URL/$TASK_KEY" \\
        -H "X-Project-ID: $DEVFLOWS_PROJECT_ID" \\
        -H "X-API-Key: $DEVFLOWS_API_KEY" \\
        -H "Content-Type: application/json" \\
        -d '{"targetColumnId":"REVIEW_COLUMN_ID_OR_UUID"}'`,
  },
  {
    name: "cURL",
    file: "Terminal",
    code: `curl -X POST \\
  "https://api.devflows.dev/api/tasks/webhook/move/PROJ-123" \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -H "X-Project-ID: YOUR_PROJECT_ID" \\
  -H "Content-Type: application/json" \\
  -d '{
    "targetColumnId": "COLUMN_UUID_OR_ID"
  }'`,
  },
];

export default function TaskAutomation() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: codeRef, inView: codeVisible } = useInView({ threshold: 0.1 });

  return (
    <section id="task-automation" className="relative scroll-mt-20 bg-slate-50 py-24 lg:py-32 dark:bg-slate-900/50">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 -left-24 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl dark:bg-emerald-500/10" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl dark:bg-cyan-500/10" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={headerRef}
          className={`mx-auto mb-16 max-w-3xl text-center transition-all duration-700 ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
            Task Automation
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Move tasks column-to-column from your pipeline
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Trigger Kanban transitions automatically using the task key in branch names or PR titles.
          </p>
        </div>

        <div
          ref={codeRef}
          className={`mx-auto max-w-4xl transition-all duration-700 ${
            codeVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center overflow-x-auto border-b border-slate-200 dark:border-slate-700">
              {tabs.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setActive(i)}
                  className={`shrink-0 px-5 py-3 text-sm font-medium transition-all duration-200 ${
                    i === active
                      ? "border-b-2 border-emerald-500 bg-emerald-50/60 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
                      : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>

            <div className="p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-2">
                <Terminal className="h-4 w-4 text-slate-400" />
                <span className="font-mono text-xs text-slate-500">{tab.file}</span>
              </div>
              <pre className="overflow-x-auto whitespace-pre text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
                <code>{tab.code}</code>
              </pre>

              <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200">
                <div className="flex items-center gap-2 font-semibold">
                  <ArrowRightLeft className="h-4 w-4" />
                  Endpoint
                </div>
                <p className="mt-1 font-mono text-xs">POST /api/tasks/webhook/move/:taskKey</p>
                <p className="mt-1 text-xs">Body: {"{"}"targetColumnId":"COLUMN_UUID_OR_ID"{"}"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
