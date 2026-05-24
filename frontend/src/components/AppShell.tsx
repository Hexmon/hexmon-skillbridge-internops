import { GraduationCap } from "lucide-react";
import type { NavItem, PageId } from "../types";

type AppShellProps = {
  activePage: PageId;
  navItems: NavItem[];
  onNavigate: (page: PageId) => void;
  children: React.ReactNode;
};

export function AppShell({
  activePage,
  navItems,
  onNavigate,
  children,
}: AppShellProps) {
  return (
    <div className="app-shell">
      <aside className="sidebar" aria-label="Primary navigation">
        <div className="brand">
          <span className="brand__mark" aria-hidden="true">
            <GraduationCap size={22} />
          </span>
          <div>
            <strong>Hexmon</strong>
            <span>SkillBridge</span>
          </div>
        </div>

        <nav className="nav-list">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;

            return (
              <button
                className="nav-button"
                data-active={isActive}
                key={item.id}
                onClick={() => onNavigate(item.id)}
                type="button"
              >
                <Icon size={18} aria-hidden="true" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      <div className="main-area">
        <header className="topbar">
          <span>InternOps starter scaffold</span>
          <a href="http://localhost:8000/docs" target="_blank" rel="noreferrer">
            API docs
          </a>
        </header>
        <main className="page-content">{children}</main>
      </div>
    </div>
  );
}
