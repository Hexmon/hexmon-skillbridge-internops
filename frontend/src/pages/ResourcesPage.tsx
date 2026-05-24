import { BookOpen, ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";
import { resources } from "../services/mockData";

export function ResourcesPage() {
  const [roleFilter, setRoleFilter] = useState("All roles");
  const roles = useMemo(
    () => ["All roles", ...Array.from(new Set(resources.map((resource) => resource.role)))],
    [],
  );

  const visibleResources = resources.filter(
    (resource) => roleFilter === "All roles" || resource.role === roleFilter,
  );

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
      </section>

      <section className="card-grid">
        {visibleResources.map((resource) => (
          <article className="info-card" key={resource.id}>
            <div className="card-icon-line">
              <BookOpen size={18} aria-hidden="true" />
              <StatusBadge label={`Week ${resource.week}`} tone="green" />
            </div>
            <h3>{resource.title}</h3>
            <p>{resource.role}</p>
            <div className="meta-line">
              <StatusBadge label={resource.topic} tone="blue" />
              <StatusBadge label={resource.type} tone="neutral" />
            </div>
            <a href={resource.url} target="_blank" rel="noreferrer">
              Open resource
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </article>
        ))}
      </section>
    </>
  );
}
