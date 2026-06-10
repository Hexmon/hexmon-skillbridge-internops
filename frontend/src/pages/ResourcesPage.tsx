import { BookOpen, ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";
import { resources } from "../services/mockData";

export function ResourcesPage() {
  const [roleFilter, setRoleFilter] = useState("All roles");
  const [searchTerm, setSearchTerm] = useState("");

  const roles = useMemo(
    () => [
      "All roles",
      ...Array.from(
        new Set(resources.map((resource) => resource.role)),
      ),
    ],
    [],
  );

  const visibleResources = resources.filter((resource) => {
    const matchesRole =
      roleFilter === "All roles" || resource.role === roleFilter;

    const matchesSearch =
      resource.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      resource.topic
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return matchesRole && matchesSearch;
  });

  return (
    <>
      <PageHeader
        eyebrow="F2"
        title="Learning Resource Library"
        description="Starter resources show how the team can filter by role, topic, week, and format."
      />

      <section className="toolbar" aria-label="Resource filters">
        <label htmlFor="role-filter">Role</label>

        <select
          id="role-filter"
          onChange={(event) => setRoleFilter(event.target.value)}
          value={roleFilter}
        >
          {roles.map((role) => (
            <option key={role}>{role}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search resources..."
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
        />
      </section>

      <p>
        Showing {visibleResources.length} of {resources.length} resources
      </p>

      <section className="card-grid">
        {visibleResources.length === 0 && (
          <article className="info-card">
            <h3>No resources found</h3>
            <p>
              Try changing the role filter or search term.
            </p>
          </article>
        )}

        {visibleResources.map((resource) => (
          <article
            className="info-card"
            key={resource.id}
          >
            <div className="card-icon-line">
              <BookOpen size={18} aria-hidden="true" />

              <StatusBadge
                label={`Week ${resource.week}`}
                tone="green"
              />
            </div>

            <h3>{resource.title}</h3>

            <p>{resource.role}</p>

            <div className="meta-line">
              <StatusBadge
                label={resource.topic}
                tone="blue"
              />

              <StatusBadge
                label={resource.type}
                tone="neutral"
              />
            </div>

            <a
              className="resource-link"
              href={resource.url}
              target="_blank"
              rel="noreferrer"
            >
              Open resource
              <ExternalLink
                size={16}
                aria-hidden="true"
              />
            </a>
          </article>
        ))}
      </section>
    </>
  );
}