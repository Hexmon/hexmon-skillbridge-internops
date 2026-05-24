import { FileText } from "lucide-react";
import { PageHeader } from "../components/PageHeader";

const repoBase = "https://github.com/Hexmon/hexmon-skillbridge-internops/blob/main";

const docs = [
  { title: "Setup", href: `${repoBase}/docs/setup.md` },
  { title: "Architecture", href: `${repoBase}/docs/architecture.md` },
  { title: "API Contract", href: `${repoBase}/docs/api.md` },
  { title: "Database", href: `${repoBase}/docs/database.md` },
  { title: "Testing", href: `${repoBase}/docs/testing.md` },
  { title: "Deployment", href: `${repoBase}/docs/deployment.md` },
];

export function DocsHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="F9"
        title="Documentation Hub"
        description="Repository documents that keep setup, contracts, QA, and delivery expectations visible."
      />

      <section className="card-grid">
        {docs.map((doc) => (
          <article className="info-card" key={doc.title}>
            <div className="card-icon-line">
              <FileText size={18} aria-hidden="true" />
              <h3>{doc.title}</h3>
            </div>
            <a href={doc.href} target="_blank" rel="noreferrer">
              Open document
            </a>
          </article>
        ))}
      </section>
    </>
  );
}
