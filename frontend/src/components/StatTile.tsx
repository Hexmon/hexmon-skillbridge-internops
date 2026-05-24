import type { LucideIcon } from "lucide-react";

type StatTileProps = {
  label: string;
  value: string | number;
  icon: LucideIcon;
  tone?: "red" | "blue" | "green" | "amber";
};

export function StatTile({ label, value, icon: Icon, tone = "blue" }: StatTileProps) {
  return (
    <article className="stat-tile" data-tone={tone}>
      <Icon size={20} aria-hidden="true" />
      <div>
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    </article>
  );
}
