import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { interns, resources, tasks } from "../services/mockData";

export function GlobalSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const search = query.toLowerCase();

    const internResults = interns
      .filter(
        (intern) =>
          intern.name.toLowerCase().includes(search) ||
          intern.primaryRole.toLowerCase().includes(search)
      )
      .map((intern) => ({
        type: "Intern",
        title: intern.name,
      }));

    const taskResults = tasks
      .filter(
        (task) =>
          task.title.toLowerCase().includes(search) ||
          task.ownerName.toLowerCase().includes(search)
      )
      .map((task) => ({
        type: "Task",
        title: task.title,
      }));

    const resourceResults = resources
      .filter(
        (resource) =>
          resource.title.toLowerCase().includes(search) ||
          resource.topic.toLowerCase().includes(search)
      )
      .map((resource) => ({
        type: "Resource",
        title: resource.title,
      }));

    return [
      ...internResults,
      ...taskResults,
      ...resourceResults,
    ].slice(0, 8);
  }, [query]);

  return (
    <div className="global-search">
      <div className="search-input-wrapper">
        <Search size={16} />
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {query && (
        <div className="search-dropdown">
          {results.length > 0 ? (
            results.map((result, index) => (
              <div
                key={index}
                className="search-result"
              >
                <strong>{result.type}</strong>
                <span>{result.title}</span>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </div>
  );
}