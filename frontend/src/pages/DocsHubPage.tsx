import { FileText, Search } from "lucide-react";
import { useMemo, useState } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");

  const visibleDocs = useMemo(
    () =>
      docs.filter((doc) =>
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [searchTerm],
  );

  return (
    <>
      <PageHeader
        eyebrow="F9"
        title="Documentation Hub"
        description="Repository documents that keep setup, contracts, QA, and delivery expectations visible."
      />

      <section className="toolbar">
        <input
          type="text"
          placeholder="Search documents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </section>

      <p>
        Showing {visibleDocs.length} of {docs.length} documents
      </p>

      <section className="card-grid">
        {visibleDocs.length === 0 && (
          <article className="info-card">
            <h3>No documents found</h3>
            <p>Try a different search term.</p>
          </article>
        )}
        {visibleDocs.map((doc) => (
          <article className="info-card" key={doc.title}>
            <div className="card-icon-line">
              <FileText size={18} aria-hidden="true" />
              <h3>{doc.title}</h3>
            </div>
            <a
              className="resource-link"
              href={doc.href}
              target="_blank"
              rel="noreferrer"
            >
              Open document
            </a>
          </article>
        ))}
      </section>
    </>
  );
}
