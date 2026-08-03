import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShieldCheck,
  Bot,
  CalendarDays,
  LayoutDashboard,
  KeyRound,
  MailCheck,
} from "lucide-react";
import { useState } from "react";
import logo from "../assets/hexmon-logo.jpeg";

type LoginPageProps = {
  onLogin: () => void;
};

export function LoginPage({
  onLogin,
}: LoginPageProps) {
  const [showPassword, setShowPassword] =
    useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    localStorage.setItem(
      "isLoggedIn",
      "true"
    );

    onLogin();
  };

  return (
    <div className="login-page">

      <div className="login-left">

        <div className="brand-section">
          <img
            src={logo}
            alt="Hexmon Logo"
            className="brand-logo"
          />

          <h1>Hexmon SkillBridge</h1>

          <h3>InternOps Management Platform</h3>

          <p>
            Manage internship tasks, meetings, AI coaching,
            resources and project collaboration from one place.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-box">
            <ShieldCheck size={28} className="feature-icon" />
            <div>
              <strong>Secure Login</strong>
              <small>Protected authentication</small>
            </div>
          </div>

          <div className="feature-box">
            <Bot size={28} className="feature-icon" />
            <div>
              <strong>AI Coach</strong>
              <small>Smart learning assistant</small>
            </div>
          </div>

          <div className="feature-box">
            <CalendarDays size={28} className="feature-icon" />
            <div>
              <strong>Meeting Scheduler</strong>
              <small>Track &amp; organize meetings</small>
            </div>
          </div>

          <div className="feature-box">
            <LayoutDashboard size={28} className="feature-icon" />
            <div>
              <strong>Intern Dashboard</strong>
              <small>Monitor internship progress</small>
            </div>
          </div>

        </div>

      </div>

      <div className="login-card">

        <p className="login-subtitle">
          Welcome to InternOps
          <br />
          Sign in to continue to your InternOps workspace.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <Mail size={18} />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="input-group">
            <Lock size={18} />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              required
            />

            <button
              type="button"
              className="eye-button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>

          <div className="login-options">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <a
  href="#"
  className="forgot-password"
  onClick={(e) => {
    e.preventDefault();
    alert("Password reset feature will be available in a future update.");
  }}
>
  Forgot Password?
</a>
          </div>

          <button
            className="login-button"
            type="submit"
          >
            Sign In
          </button>
        </form>

        <div className="login-divider"></div>

        <div className="demo-box">
          <strong>Demo Credentials</strong>

          <div className="demo-item">
            <MailCheck size={18} />
            <span>admin@hexmon.com</span>
          </div>

          <div className="demo-item">
            <KeyRound size={18} />
            <span>admin123</span>
          </div>
        </div>

      </div>
    </div>
  );
}