import React from "react";
import { createScene, listScenes, type SceneSummary } from "../lib/api";
import { getCurrentUser, logoutRemote } from "../lib/auth";

type Props = {
  navigate: (path: string, replace?: boolean) => void;
};

export default function ScenesPage({ navigate }: Props) {
  const [scenes, setScenes] = React.useState<SceneSummary[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [busy, setBusy] = React.useState(false);
  const [name, setName] = React.useState("New Scene");
  const [error, setError] = React.useState<string | null>(null);
  const user = getCurrentUser();

  const refresh = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const nextScenes = await listScenes();
      setScenes(nextScenes);
    } catch (nextError) {
      const message = nextError instanceof Error ? nextError.message : "Failed to load scenes";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    void refresh();
  }, [refresh]);

  const onCreateScene = React.useCallback(async () => {
    setBusy(true);
    setError(null);
    try {
      const created = await createScene(name.trim() || "Untitled Scene");
      navigate(`/editor/${created.id}`);
    } catch (nextError) {
      const message = nextError instanceof Error ? nextError.message : "Failed to create scene";
      setError(message);
    } finally {
      setBusy(false);
    }
  }, [name, navigate]);

  const onLogout = React.useCallback(async () => {
    await logoutRemote();
    navigate("/login", true);
  }, [navigate]);

  return (
    <div className="scenes-page">
      <header className="scenes-header">
        <div>
          <h1>Your Scenes</h1>
          <p>{user ? `Signed in as ${user.displayName}` : "Signed in"}</p>
        </div>
        <div className="scenes-header__actions">
          <button type="button" className="ghost" onClick={() => void refresh()} disabled={loading}>
            Refresh
          </button>
          <button type="button" className="ghost" onClick={() => void onLogout()}>
            Logout
          </button>
        </div>
      </header>

      <section className="create-scene">
        <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Scene name" maxLength={120} />
        <button type="button" onClick={() => void onCreateScene()} disabled={busy}>
          {busy ? "Creating..." : "Create Scene"}
        </button>
      </section>

      {error && <p className="auth-error">{error}</p>}

      <section className="scene-grid">
        {loading && <p>Loading scenes...</p>}
        {!loading && scenes.length === 0 && <p>No scenes yet. Create your first one.</p>}
        {!loading && scenes.map((scene) => (
          <article key={scene.id} className="scene-card">
            <h2>{scene.name}</h2>
            <p>Role: {scene.role}</p>
            <p>Created: {new Date(scene.createdAt).toLocaleString()}</p>
            <button type="button" onClick={() => navigate(`/editor/${scene.id}`)}>
              Open Scene
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}
