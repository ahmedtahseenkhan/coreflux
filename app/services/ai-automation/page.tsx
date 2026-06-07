import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import CapabilityGrid from "@/components/CapabilityGrid";
import FAQ from "@/components/FAQ";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "AI Business Automation",
  description:
    "AI chatbots, workflow tools, internal knowledge assistants, customer support automation, document processing and reporting automation.",
};

const CAPABILITIES = [
  {
    icon: <span className="font-mono text-sm">CB</span>,
    title: "AI chatbots",
    body:
      "Customer-facing or internal — trained on your docs, your tone, your product. With escalation rules that respect users.",
    bullets: ["RAG over your docs", "Tone-of-voice tuning", "Hand-off rules", "Multi-language"],
  },
  {
    icon: <span className="font-mono text-sm">WF</span>,
    title: "Workflow automation",
    body:
      "AI inside the workflow, not bolted onto it. Triage, summarise, classify, route — humans approve consequential calls.",
    bullets: ["Triage / routing", "Summarisation", "Classification", "Approval gates"],
  },
  {
    icon: <span className="font-mono text-sm">KA</span>,
    title: "Knowledge assistants",
    body:
      "RAG over docs, runbooks, Slack and tickets. Your new hire's first colleague is the org's institutional memory.",
    bullets: ["Doc + Slack + tickets", "Source citations", "Permission-aware", "Continuous reindex"],
  },
  {
    icon: <span className="font-mono text-sm">SA</span>,
    title: "Support automation",
    body:
      "Suggested replies in your agent UI, auto-classification, and clean hand-off when confidence drops below threshold.",
    bullets: ["Suggested replies", "Auto-tagging", "Confidence gating", "Feedback loop"],
  },
  {
    icon: <span className="font-mono text-sm">DP</span>,
    title: "Document processing",
    body:
      "Extract structured data from invoices, contracts, forms or PDFs. With confidence scores and review queues.",
    bullets: ["OCR + LLM extract", "Schema-validated output", "Review queue", "Audit log"],
  },
  {
    icon: <span className="font-mono text-sm">RA</span>,
    title: "Reporting automation",
    body:
      "Weekly business summaries, anomaly alerts and natural-language Q&A over your real data — not stitched dashboards.",
    bullets: ["Weekly briefs", "Anomaly alerts", "NL → SQL", "Trust scores"],
  },
];

const TRUST = [
  {
    k: "Privacy",
    t: "Your data, your infrastructure",
    b: "We deploy to your cloud or ours-on-your-account. No model provider sees what they shouldn't.",
  },
  {
    k: "Evals",
    t: "We run them. We share them.",
    b: "Every release ships with a real eval suite — accuracy, hallucination rate, refusal rate — and you see the numbers.",
  },
  {
    k: "Human-in-loop",
    t: "Default for consequential calls",
    b: "AI proposes. Humans approve when stakes are real. Confidence gates are explicit, not hidden.",
  },
  {
    k: "Auditability",
    t: "Every decision, traceable",
    b: "Input, prompt version, model, output, latency, cost — all logged. You can reconstruct any answer.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Which models do you use?",
    a: (
      <>
        Model-agnostic by default — we pick what fits the workload. Claude
        (Sonnet / Opus / Haiku), GPT family, Gemini, and open-weights (Llama,
        Mistral, Qwen) when privacy or cost demands it. We don&rsquo;t lock you
        in to one provider.
      </>
    ),
  },
  {
    q: "Will this hallucinate and embarrass us?",
    a: (
      <>
        Honest answer: any unguarded LLM can. That&rsquo;s why we ship with
        evals, confidence gating, source citations and human hand-off on
        ambiguity. We measure the failure modes and report them, not hide them.
      </>
    ),
  },
  {
    q: "Do you train on our data?",
    a: (
      <>
        We don&rsquo;t train base models. We do build retrieval indexes and
        fine-tunes that live in your environment, on your data. Nothing leaves
        your perimeter without explicit configuration.
      </>
    ),
  },
  {
    q: "How long to a first usable release?",
    a: (
      <>
        2–5 weeks for a focused use case (a single workflow, a single
        assistant). Production hardening with evals, monitoring and human-in-loop
        adds another 2–3 weeks.
      </>
    ),
  },
  {
    q: "What does it cost to run?",
    a: (
      <>
        Inference cost depends on traffic and model choice. We design for cost
        from day one — routing cheap models for triage, expensive models only
        when needed. Monthly cost is part of the blueprint, not a surprise.
      </>
    ),
  },
  {
    q: "Can we own the system without you?",
    a: (
      <>
        Yes. Source code, prompts, eval suite, infra — all in your name.
        Optional retainer if you&rsquo;d rather we keep an eye on drift and
        regressions.
      </>
    ),
  },
];

export default function AIAutomationPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/#services", label: "Services" },
          { href: "/services/ai-automation", label: "AI Automation" },
        ]}
        eyebrow="Service · 04 / 06 · Intelligence"
        title={<>AI that does <em>real</em> work. Not demos.</>}
        lede={
          <>
            Chatbots, workflow tools, internal knowledge assistants, support
            automation, document processing and reporting automation. We build
            for the workflow your team runs Tuesday morning &mdash; not the
            keynote stage.
          </>
        }
        ctas={[
          { href: "/#contact", label: "Talk to an AI engineer", primary: true },
          { href: "#workflow", label: "See the workflow" },
        ]}
        meta={[
          { label: "First release", value: "2–5 wks" },
          { label: "Models", value: "Claude · GPT · open" },
          { label: "Human-in-loop", value: "By default" },
          { label: "Hosting", value: "Your infra" },
        ]}
      />

      {/* Workflow visual — Input → AI → Human gate → Action */}
      <section id="workflow" className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="How it runs"
            title={<>AI proposes. Humans approve. <em>Work</em> gets done.</>}
            blurb={
              <>
                Every workflow we ship has the same shape — input, model step,
                confidence gate, human review when stakes are real, action.
                Visible, traceable, debuggable.
              </>
            }
          />

          <div
            className="reveal mt-10 overflow-hidden rounded-3xl border bg-[color:var(--card)]"
            style={{ borderColor: "var(--line)" }}
          >
            <div className="grid gap-0 md:grid-cols-4">
              <Stage
                tag="01 · Input"
                title="Trigger"
                lines={["New support ticket", "Webhook · email · doc upload"]}
              />
              <Stage
                tag="02 · AI"
                title="Model step"
                lines={["Claude / GPT / open", "Classify · summarise · draft"]}
                accent
              />
              <Stage
                tag="03 · Gate"
                title="Confidence check"
                lines={["≥ 0.82 → auto", "< 0.82 → human review"]}
              />
              <Stage
                tag="04 · Action"
                title="Outcome"
                lines={["Reply sent · ticket routed", "All steps logged"]}
                right
              />
            </div>

            <div
              className="border-t px-7 py-5 grid gap-4 md:grid-cols-2 items-center"
              style={{ borderColor: "var(--line)" }}
            >
              <p className="text-[13.5px] text-[color:var(--ink-2)]">
                Every step is logged: input, prompt version, model, output,
                latency, cost. Reproducible answers, debuggable failures.
              </p>
              <div className="flex flex-wrap gap-2 md:justify-end">
                {["Claude Sonnet 4.6", "GPT-4o", "Llama 3.1", "Mistral", "Open-weights"].map((m) => (
                  <span
                    key={m}
                    className="rounded-full border px-2.5 py-1 text-[11px] font-mono text-[color:var(--ink-2)]"
                    style={{
                      borderColor: "var(--line)",
                      background: "color-mix(in oklab, var(--c1) 4%, var(--bg))",
                    }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="Capabilities"
            title={<>Six places AI <em>earns</em> its keep.</>}
          />
          <CapabilityGrid items={CAPABILITIES} />
        </div>
      </section>

      {/* Trust pillars */}
      <section className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="Trust by default"
            title={<>The bits that make this <em>safe</em> to ship.</>}
            blurb={
              <>
                AI that ships to real users needs more than a clever prompt.
                These are the four properties we build in from day one &mdash;
                not after the first incident.
              </>
            }
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {TRUST.map((t, i) => (
              <article
                key={t.k}
                className="reveal rounded-3xl border bg-[color:var(--card)] p-7"
                style={{ borderColor: "var(--line)", transitionDelay: `${i * 60}ms` }}
              >
                <span
                  className="rounded-full border px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.08em] text-[color:var(--c1)]"
                  style={{ borderColor: "color-mix(in oklab, var(--c1) 30%, var(--line))" }}
                >
                  {t.k}
                </span>
                <h3 className="mt-4 font-serif text-[28px] leading-tight text-[color:var(--ink)]">
                  {t.t}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-[color:var(--ink-2)]">
                  {t.b}
                </p>
              </article>
            ))}
          </div>

          <div
            className="reveal mt-8 rounded-3xl border p-7"
            style={{
              borderColor: "var(--line)",
              background: "color-mix(in oklab, var(--c1) 5%, var(--bg))",
            }}
          >
            <p className="text-[15px] leading-relaxed text-[color:var(--ink-2)]">
              <strong className="text-[color:var(--ink)]">
                Already running an AI feature that&rsquo;s drifting?
              </strong>{" "}
              We also do focused eval-and-harden engagements &mdash; bring us a
              system, we&rsquo;ll bring you a real failure-mode report and a
              plan to fix it.{" "}
              <Link
                href="/#contact"
                className="text-[color:var(--ink)] underline decoration-[color:var(--c1)] underline-offset-4"
              >
                Start there
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />
      <CTA />
    </>
  );
}

function Stage({
  tag,
  title,
  lines,
  accent,
  right,
}: {
  tag: string;
  title: string;
  lines: string[];
  accent?: boolean;
  right?: boolean;
}) {
  return (
    <div
      className="relative p-7"
      style={{
        background: accent ? "color-mix(in oklab, var(--c1) 7%, var(--bg))" : "transparent",
        borderRight: right ? "none" : "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--c1)]">
        {tag}
      </div>
      <h4 className="mt-3 font-serif text-[24px] leading-tight text-[color:var(--ink)]">
        {title}
      </h4>
      <ul className="mt-4 space-y-1.5">
        {lines.map((l) => (
          <li key={l} className="text-[13.5px] text-[color:var(--ink-2)]">
            {l}
          </li>
        ))}
      </ul>
      {!right && (
        <span
          aria-hidden
          className="absolute right-[-9px] top-1/2 hidden h-[18px] w-[18px] -translate-y-1/2 items-center justify-center rounded-full bg-[color:var(--bg)] font-mono text-[10px] text-[color:var(--c1)] md:flex"
          style={{ border: "1px solid var(--line)" }}
        >
          →
        </span>
      )}
    </div>
  );
}
