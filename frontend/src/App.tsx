import { useEffect, useMemo, useState } from "react";
import {
  Bot,
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  FileText,
  Home,
  LayoutDashboard,
  ListChecks,
  MessagesSquare,
  Users,
} from "lucide-react";

import { AppShell } from "./components/AppShell";
import { AiCoachPage } from "./pages/AiCoachPage";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";
import { DailyUpdatesPage } from "./pages/DailyUpdatesPage";
import { DocsHubPage } from "./pages/DocsHubPage";
import { HomePage } from "./pages/HomePage";
import { MentorDashboardPage } from "./pages/MentorDashboardPage";
import { QaCenterPage } from "./pages/QaCenterPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { TasksPage } from "./pages/TasksPage";
import { MeetingSchedulerPage } from "./pages/MeetingSchedulerPage";
import { ProfilePage } from "./pages/ProfilePage";

import type { NavItem } from "./types";

const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "dashboard", label: "Intern Dashboard", icon: LayoutDashboard },
  { id: "resources", label: "Resources", icon: BookOpen },
  { id: "tasks", label: "Tasks", icon: ListChecks },
  { id: "updates", label: "Daily Updates", icon: MessagesSquare },
  { id: "ai", label: "AI Coach", icon: Bot },
  { id: "qa", label: "QA Center", icon: ClipboardCheck },
  { id: "mentor", label: "Mentor Dashboard", icon: Users },
  { id: "docs", label: "Docs Hub", icon: FileText },
  { id: "meetings", label: "Meeting Scheduler", icon: CalendarDays },
];

export default function App() {
  const [activePage, setActivePage] =
    useState<NavItem["id"]>("home");

  const [isLoggedIn, setIsLoggedIn] =
    useState(
      localStorage.getItem("isLoggedIn") === "true"
    );

  useEffect(() => {
    if (!isLoggedIn) return;
    const now = new Date();
    const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    const key = "skillbridge-profile-visits";
    const visits = JSON.parse(localStorage.getItem(key) ?? "[]") as string[];
    localStorage.setItem(key, JSON.stringify(Array.from(new Set([...visits, today]))));
  }, [isLoggedIn]);

  const page = useMemo(() => {
    switch (activePage) {
      case "dashboard":
        return <DashboardPage />;

      case "resources":
        return <ResourcesPage />;

      case "tasks":
        return <TasksPage />;

      case "updates":
        return <DailyUpdatesPage />;

      case "ai":
        return <AiCoachPage />;

      case "qa":
        return <QaCenterPage />;

      case "mentor":
        return <MentorDashboardPage />;

      case "docs":
        return <DocsHubPage />;

      case "meetings":
        return <MeetingSchedulerPage />;

      case "profile":
        return <ProfilePage />;

      case "home":
      default:
        return (
          <HomePage
            onOpenDashboard={() =>
              setActivePage("dashboard")
            }
          />
        );
    }
  }, [activePage]);

  if (!isLoggedIn) {
    return (
      <LoginPage
        onLogin={() => {
          localStorage.setItem(
            "isLoggedIn",
            "true"
          );

          setIsLoggedIn(true);
        }}
      />
    );
  }

  return (
    <AppShell
      activePage={activePage}
      navItems={navItems}
      onNavigate={setActivePage}
      onLogout={() => {
        localStorage.removeItem(
          "isLoggedIn"
        );

        const savedTheme =
          localStorage.getItem("theme") ||
          "light";

        document.documentElement.setAttribute(
          "data-theme",
          savedTheme
        );

        setIsLoggedIn(false);
      }}
      onOpenProfile={() => setActivePage("profile")}
    >
      {page}
    </AppShell>
  );
}
