import {
  GraduationCap,
  Moon,
  Sun,
  Bell,
} from "lucide-react";
import { useEffect, useState } from "react";
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
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const [showNotifications, setShowNotifications] =
    useState(false);

  const notifications = [
    "New task assigned",
    "QA report created",
    "Resource library updated",
  ];

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

          <div className="topbar-actions">
            <a
              href="http://localhost:8000/docs"
              target="_blank"
              rel="noreferrer"
            >
              API docs
            </a>

            <div className="notification-wrapper">
              <button
                className="notification-button"
                type="button"
                onClick={() =>
                  setShowNotifications(
                    !showNotifications
                  )
                }
              >
                <Bell size={18} />
                <span className="notification-count">
                  {notifications.length}
                </span>
              </button>

              {showNotifications && (
                <div className="notification-dropdown">
                  <h4>Notifications</h4>

                  {notifications.map(
                    (notification, index) => (
                      <p key={index}>
                        • {notification}
                      </p>
                    )
                  )}
                </div>
              )}
            </div>

            <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              type="button"
            >
              {darkMode ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>
          </div>
        </header>
        <main className="page-content">{children}</main>
      </div>
    </div>
  );
}
