import React from "react";
import { resolveInvite } from "../lib/api";
import { acceptInvite, getCurrentUser, isAuthenticated, loginAsGuest } from "../lib/auth";

type Props = {
  token: string;
  navigate: (path: string, replace?: boolean) => void;
};

export default function InvitePage({ token, navigate }: Props) {
  const [details, setDetails] = React.useState<Awaited<ReturnType<typeof resolveInvite>> | null>(null);
  const [guestName, setGuestName] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const user = getCurrentUser();

  React.useEffect(() => {
    let cancelled = false;
    const run = async () => {
      setLoading(true);
      setError(null);
      try {
        const invite = await resolveInvite(token);
        if (!cancelled) {
          setDetails(invite);
        }
      } catch (nextError) {
        if (!cancelled) {
          const message = nextError instanceof Error ? nextError.message : "Invalid invite";
          setError(message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, [token]);

  const onAccept = React.useCallback(async () => {
    setBusy(true);
    setError(null);
    try {
      if (!isAuthenticated()) {
        await loginAsGuest(guestName.trim() || undefined);
      }
      const accepted = await acceptInvite(token, guestName.trim() || undefined);
      navigate(`/editor/${accepted.sceneId}`, true);
    } catch (nextError) {
      const message = nextError instanceof Error ? nextError.message : "Failed to join with invite";
      setError(message);
    } finally {
      setBusy(false);
    }
  }, [guestName, navigate, token]);

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Invite</h1>
        {loading && <p>Loading invite details...</p>}
        {!loading && details && (
          <>
            <p>You were invited to <strong>{details.scene.name}</strong> as <strong>{details.role}</strong>.</p>
            <p>
              Uses: {details.uses}/{details.maxUses} | Expires: {new Date(details.expiresAt).toLocaleString()}
            </p>
            {!user && (
              <label>
                Display Name
                <input
                  type="text"
                  value={guestName}
                  placeholder="Guest"
                  onChange={(event) => setGuestName(event.target.value)}
                />
              </label>
            )}
            <button type="button" onClick={() => void onAccept()} disabled={busy}>
              {busy ? "Joining..." : "Join Scene"}
            </button>
          </>
        )}
        {error && <p className="auth-error">{error}</p>}
        <button type="button" className="ghost" onClick={() => navigate("/login")}>Back to Login</button>
      </div>
    </div>
  );
}
