import React from "react";
import { loginAsGuest, loginWithPassword } from "../lib/auth";

type Props = {
  navigate: (path: string, replace?: boolean) => void;
};

export default function LoginPage({ navigate }: Props) {
  const [email, setEmail] = React.useState(import.meta.env.VITE_LOGIN_EMAIL || "demo@v3s.local");
  const [password, setPassword] = React.useState(import.meta.env.VITE_LOGIN_PASSWORD || "demo1234");
  const [guestName, setGuestName] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const run = React.useCallback(async (task: () => Promise<void>) => {
    setBusy(true);
    setError(null);
    try {
      await task();
      navigate("/scenes", true);
    } catch (nextError) {
      const message = nextError instanceof Error ? nextError.message : "Login failed";
      setError(message);
    } finally {
      setBusy(false);
    }
  }, [navigate]);

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Collaborative Workspace</h1>
        <p>Sign in to manage scenes and collaborate live.</p>

        <form
          className="auth-form"
          onSubmit={(event) => {
            event.preventDefault();
            void run(async () => {
              await loginWithPassword(email.trim(), password);
            });
          }}
        >
          <label>
            Email
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          </label>
          <label>
            Password
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
          </label>
          <button disabled={busy} type="submit">{busy ? "Signing in..." : "Sign In"}</button>
        </form>

        <div className="auth-divider">or</div>

        <form
          className="auth-form"
          onSubmit={(event) => {
            event.preventDefault();
            void run(async () => {
              await loginAsGuest(guestName.trim() || undefined);
            });
          }}
        >
          <label>
            Guest Name
            <input
              type="text"
              value={guestName}
              placeholder="Guest"
              onChange={(event) => setGuestName(event.target.value)}
            />
          </label>
          <button disabled={busy} type="submit">{busy ? "Joining..." : "Continue as Guest"}</button>
        </form>

        {error && <p className="auth-error">{error}</p>}
      </div>
    </div>
  );
}
