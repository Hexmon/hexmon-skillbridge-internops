type StatusBadgeProps = {
  label: string;
  tone?: "neutral" | "blue" | "green" | "amber" | "red";
};

export function StatusBadge({ label, tone = "neutral" }: StatusBadgeProps) {
  return (
    <span className="status-badge" data-tone={tone}>
      {label}
    </span>
  );
}
