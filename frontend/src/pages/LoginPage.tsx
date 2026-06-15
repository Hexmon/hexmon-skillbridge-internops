import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";

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
      <div className="login-card">

        <h1>Hexmon SkillBridge</h1>

        <p>
          Welcome Back 
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

            <span>
              Forgot Password?
            </span>
          </div>

          <button
            className="login-button"
            type="submit"
          >
            Sign In
          </button>
        </form>

        <small>
          Demo Login:
          admin@hexmon.com
        </small>

      </div>
    </div>
  );
}