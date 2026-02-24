import { useState } from "react";
import {
  Rocket,
  LayoutDashboard,
  GitPullRequest,
  BarChart3,
  Users,
  Shield,
  Key,
  Terminal,
  ChevronRight,
  BookOpen,
} from "lucide-react";

interface Section {
  id: string;
  icon: React.ElementType;
  title: string;
  content: React.ReactNode;
}

const sections: Section[] = [
  {
    id: "overview",
    icon: BookOpen,
    title: "Overview",
    content: (
      <div className="space-y-4">
        <p>
          <strong>DevFlows</strong> is a developer workflow platform that combines Kanban task
          management with deployment visibility and engineering metrics — all in one place.
        </p>
        <p>
          The core idea is simple: solve the <em>"what version is where"</em> problem by
          connecting tasks, environments, and deployment history in a unified dashboard.
        </p>
        <div className="rounded-xl border border-violet-200 bg-violet-50 p-4 dark:border-violet-500/20 dark:bg-violet-500/10">
          <p className="text-sm font-medium text-violet-800 dark:text-violet-300">
            DevFlows is built for small teams that ship fast and need visibility
            without the overhead of enterprise tools.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "kanban",
    icon: LayoutDashboard,
    title: "Kanban Board",
    content: (
      <div className="space-y-4">
        <p>
          Every project in DevFlows comes with a fully customizable Kanban board.
        </p>
        <h4 className="text-base font-semibold text-slate-900 dark:text-white">Features</h4>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Drag-and-drop tasks between columns</li>
          <li>Custom columns — rename, reorder, add or remove as needed</li>
          <li>Task assignment to team members</li>
          <li>Project key prefixes (e.g. <code>ALPHA-42</code>) for quick reference</li>
          <li>Filters to focus on what matters</li>
          <li>Optimistic UI updates for instant feedback</li>
        </ul>
        <h4 className="text-base font-semibold text-slate-900 dark:text-white">Task Fields</h4>
        <p>Each task supports:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li><strong>Title</strong> and <strong>description</strong></li>
          <li><strong>Assignee</strong> — any project member</li>
          <li><strong>Column position</strong> — ordered within the column</li>
          <li><strong>Project key</strong> — auto-generated unique identifier</li>
        </ul>
      </div>
    ),
  },
  {
    id: "deployments",
    icon: GitPullRequest,
    title: "Deployments",
    content: (
      <div className="space-y-4">
        <p>
          DevFlows tracks every deployment across all your environments. You can push
          deployment data via webhook from your CI/CD pipeline or create entries manually.
        </p>
        <h4 className="text-base font-semibold text-slate-900 dark:text-white">Deployment Data</h4>
        <ul className="list-disc space-y-1.5 pl-5">
          <li><strong>Environment</strong> — production, staging, dev, or any custom name</li>
          <li><strong>Release version</strong> — commit SHA, tag, or semantic version</li>
          <li><strong>Status</strong> — success, failure, pending, or cancelled</li>
          <li><strong>Release notes</strong> — optional changelog or description</li>
          <li><strong>Metadata</strong> — arbitrary JSON for additional context</li>
        </ul>
        <h4 className="text-base font-semibold text-slate-900 dark:text-white">Webhook Endpoint</h4>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 font-mono text-sm dark:border-slate-700 dark:bg-slate-800">
          POST /api/deployments/webhook
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Requires <code>X-API-Key</code> and <code>X-Project-ID</code> headers. Both numeric IDs and
          project UUIDs (<code>public_id</code>) are accepted.
        </p>
        <h4 className="text-base font-semibold text-slate-900 dark:text-white">Timeline View</h4>
        <p>
          The deployment timeline groups releases by environment, showing a chronological
          history. You can edit, delete individual releases, or remove entire environments.
        </p>
      </div>
    ),
  },
  {
    id: "dora",
    icon: BarChart3,
    title: "DORA Metrics",
    content: (
      <div className="space-y-4">
        <p>
          DevFlows calculates the four DORA metrics automatically from your deployment data:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              name: "Deployment Frequency",
              desc: "How often you deploy to production (or any environment).",
            },
            {
              name: "Lead Time for Changes",
              desc: "Time from first commit to deployment — based on deployment timestamps.",
            },
            {
              name: "Change Failure Rate",
              desc: "Percentage of deployments that result in a failure status.",
            },
            {
              name: "Mean Time to Recovery",
              desc: "Average time to recover from a failed deployment.",
            },
          ].map((m) => (
            <div
              key={m.name}
              className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800"
            >
              <p className="mb-1 text-sm font-semibold text-violet-600 dark:text-violet-400">{m.name}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">{m.desc}</p>
            </div>
          ))}
        </div>
        <p>
          Metrics can be filtered by environment (e.g. production only, or all environments).
        </p>
      </div>
    ),
  },
  {
    id: "teams",
    icon: Users,
    title: "Teams & Projects",
    content: (
      <div className="space-y-4">
        <p>
          DevFlows organizes work around <strong>projects</strong>. Each project has its own
          board, deployment timeline, metrics, and member list.
        </p>
        <h4 className="text-base font-semibold text-slate-900 dark:text-white">Member Roles</h4>
        <p>
          Project members are added with specific roles. When membership changes, everyone
          gets notified via email automatically:
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Member added to project</li>
          <li>Member role updated</li>
          <li>Member removed from project</li>
        </ul>
        <h4 className="text-base font-semibold text-slate-900 dark:text-white">Project Settings</h4>
        <ul className="list-disc space-y-1.5 pl-5">
          <li><strong>Project key</strong> — prefix for task IDs</li>
          <li><strong>Environment order</strong> — customize deployment timeline layout</li>
          <li><strong>API keys</strong> — scoped keys for CI/CD webhook auth</li>
          <li><strong>Workflow columns</strong> — manage Kanban board structure</li>
        </ul>
      </div>
    ),
  },
  {
    id: "auth",
    icon: Shield,
    title: "Authentication",
    content: (
      <div className="space-y-4">
        <p>DevFlows supports multiple authentication methods:</p>
        <h4 className="text-base font-semibold text-slate-900 dark:text-white">Email & Password</h4>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Sign up with email and password</li>
          <li>Email verification required before first login</li>
          <li>Forgot password / reset password flow with expiring tokens</li>
          <li>Passwords hashed with bcrypt</li>
        </ul>
        <h4 className="text-base font-semibold text-slate-900 dark:text-white">Social Login (OAuth2)</h4>
        <ul className="list-disc space-y-1.5 pl-5">
          <li><strong>Google</strong> and <strong>Microsoft</strong> accounts supported</li>
          <li>Authorization Code flow with PKCE for maximum security</li>
          <li>Account linking: same email across providers merges into one DevFlows account</li>
          <li>Social accounts are automatically verified</li>
        </ul>
        <h4 className="text-base font-semibold text-slate-900 dark:text-white">Session Management</h4>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>JWT access tokens (HS256)</li>
          <li>Rotational refresh tokens for seamless session renewal</li>
        </ul>
      </div>
    ),
  },
  {
    id: "api-keys",
    icon: Key,
    title: "API Keys",
    content: (
      <div className="space-y-4">
        <p>
          Each project can have one or more <strong>API keys</strong> for authenticating
          webhook requests from CI/CD pipelines.
        </p>
        <h4 className="text-base font-semibold text-slate-900 dark:text-white">How It Works</h4>
        <ol className="list-decimal space-y-1.5 pl-5">
          <li>Go to Project Settings &rarr; API Keys</li>
          <li>Create a new key with a descriptive name</li>
          <li>Copy the key — it's shown only once</li>
          <li>Use it in your CI/CD pipeline as the <code>X-API-Key</code> header</li>
        </ol>
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-500/20 dark:bg-amber-500/10">
          <p className="text-sm font-medium text-amber-800 dark:text-amber-300">
            Keep your API keys secret. Store them as CI/CD secrets (e.g. GitHub Secrets,
            GitLab CI Variables) and never commit them to your repository.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "cicd",
    icon: Terminal,
    title: "CI/CD Integration",
    content: (
      <div className="space-y-4">
        <p>
          DevFlows integrates with any CI/CD platform through a simple webhook.
          We also provide a dedicated GitHub Action for even easier setup.
        </p>

        <h4 className="text-base font-semibold text-slate-900 dark:text-white">GitHub Actions</h4>
        <div className="overflow-x-auto rounded-lg border border-slate-200 bg-slate-900 p-4 dark:border-slate-700">
          <pre className="text-sm leading-relaxed font-mono">
            <code className="text-slate-300">{`- name: Notify DevFlows
  uses: devflows/deployment-action@v1
  with:
    webhook_url: \${{ secrets.DEVFLOWS_WEBHOOK_URL }}
    api_key: \${{ secrets.DEVFLOWS_API_KEY }}
    environment: production
    release_version: \${{ github.sha }}`}</code>
          </pre>
        </div>

        <h4 className="text-base font-semibold text-slate-900 dark:text-white">GitLab CI</h4>
        <div className="overflow-x-auto rounded-lg border border-slate-200 bg-slate-900 p-4 dark:border-slate-700">
          <pre className="text-sm leading-relaxed font-mono">
            <code className="text-slate-300">{`notify_devflows:
  stage: deploy
  script:
    - curl -X POST "$DEVFLOWS_WEBHOOK_URL"
        -H "X-API-Key: $DEVFLOWS_API_KEY"
        -H "X-Project-ID: $PROJECT_ID"
        -H "Content-Type: application/json"
        -d '{"environment":"production","status":"success"}'`}</code>
          </pre>
        </div>

        <h4 className="text-base font-semibold text-slate-900 dark:text-white">Webhook Payload</h4>
        <div className="overflow-x-auto rounded-lg border border-slate-200 bg-slate-900 p-4 dark:border-slate-700">
          <pre className="text-sm leading-relaxed font-mono">
            <code className="text-slate-300">{`{
  "environment": "production",
  "release_version": "v1.2.3",
  "status": "success",
  "release_notes": "Fixed login bug",
  "metadata_json": { "actor": "ci-bot" }
}`}</code>
          </pre>
        </div>

        <h4 className="text-base font-semibold text-slate-900 dark:text-white">Required Headers</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="py-2 pr-4 text-left font-semibold text-slate-900 dark:text-white">Header</th>
                <th className="py-2 pr-4 text-left font-semibold text-slate-900 dark:text-white">Required</th>
                <th className="py-2 text-left font-semibold text-slate-900 dark:text-white">Description</th>
              </tr>
            </thead>
            <tbody className="text-slate-600 dark:text-slate-400">
              <tr className="border-b border-slate-100 dark:border-slate-800">
                <td className="py-2 pr-4 font-mono text-xs">X-API-Key</td>
                <td className="py-2 pr-4">Yes</td>
                <td className="py-2">Your project API key</td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-800">
                <td className="py-2 pr-4 font-mono text-xs">X-Project-ID</td>
                <td className="py-2 pr-4">Yes</td>
                <td className="py-2">Project numeric ID or UUID</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">Content-Type</td>
                <td className="py-2 pr-4">Yes</td>
                <td className="py-2">application/json</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "github-action",
    icon: Rocket,
    title: "GitHub Action",
    content: (
      <div className="space-y-4">
        <p>
          The <strong>devflows/deployment-action</strong> is a composite GitHub Action that
          simplifies integration with DevFlows.
        </p>
        <h4 className="text-base font-semibold text-slate-900 dark:text-white">Inputs</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="py-2 pr-4 text-left font-semibold text-slate-900 dark:text-white">Input</th>
                <th className="py-2 pr-4 text-left font-semibold text-slate-900 dark:text-white">Required</th>
                <th className="py-2 text-left font-semibold text-slate-900 dark:text-white">Description</th>
              </tr>
            </thead>
            <tbody className="text-slate-600 dark:text-slate-400">
              {[
                ["webhook_url", "Yes", "Your DevFlows webhook endpoint"],
                ["api_key", "Yes", "Project API key"],
                ["project_id", "Yes", "Project ID or UUID"],
                ["environment", "Yes", "Target environment name"],
                ["release_version", "No", "Version or commit SHA"],
                ["release_notes", "No", "Release description"],
                ["status", "No", "success | failure | pending | cancelled"],
                ["metadata_json", "No", "Arbitrary JSON metadata"],
                ["fail_on_error", "No", "Fail workflow step on error (default: false)"],
              ].map(([input, req, desc]) => (
                <tr key={input} className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-2 pr-4 font-mono text-xs">{input}</td>
                  <td className="py-2 pr-4">{req}</td>
                  <td className="py-2">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
];

export default function Docs() {
  const [activeSection, setActiveSection] = useState("overview");

  const current = sections.find((s) => s.id === activeSection) ?? sections[0];

  return (
    <div className="pt-20 pb-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Page header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Documentation
          </h1>
          <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
            Everything you need to know about DevFlows.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar nav */}
          <nav className="shrink-0 lg:w-64">
            <div className="sticky top-20 space-y-1">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveSection(s.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                    activeSection === s.id
                      ? "bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-400"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-300"
                  }`}
                >
                  <s.icon className="h-4 w-4 shrink-0" />
                  {s.title}
                  {activeSection === s.id && (
                    <ChevronRight className="ml-auto h-4 w-4" />
                  )}
                </button>
              ))}
            </div>
          </nav>

          {/* Content */}
          <main className="min-w-0 flex-1">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-violet-500 to-purple-600 shadow-lg shadow-purple-500/20">
                  <current.icon className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {current.title}
                </h2>
              </div>
              <div className="prose-sm max-w-none text-slate-700 dark:text-slate-300 [&_code]:rounded [&_code]:bg-slate-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-xs [&_code]:font-mono [&_code]:text-violet-600 dark:[&_code]:bg-slate-800 dark:[&_code]:text-violet-400 [&_h4]:mt-6 [&_h4]:mb-2 [&_li]:text-slate-600 dark:[&_li]:text-slate-400 [&_p]:leading-relaxed">
                {current.content}
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
