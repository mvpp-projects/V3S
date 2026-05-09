import React from "react";
import { PropertiesPanel, ToolShelf } from "../components";
import SceneCanvas from "../scene/SceneCanvas";
import { createInvite } from "../lib/api";
import { getCurrentUser, logoutRemote } from "../lib/auth";
import { initSceneSyncForScene, teardownSceneSync } from "../lib/sceneSync";
import WorkspaceTopBar from "../components/WorkspaceTopBar";

type Props = {
  sceneId: string;
  navigate: (path: string, replace?: boolean) => void;
};

export default function EditorPage({ sceneId, navigate }: Props) {
  const [ready, setReady] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [shareLink, setShareLink] = React.useState<string>("");
  const [sharing, setSharing] = React.useState(false);
  const user = getCurrentUser();

  React.useEffect(() => {
    let cancelled = false;
    const run = async () => {
      setReady(false);
      setError(null);
      try {
        await initSceneSyncForScene(sceneId);
        if (!cancelled) {
          setReady(true);
        }
      } catch (nextError) {
        if (!cancelled) {
          const message = nextError instanceof Error ? nextError.message : "Failed to open scene";
          setError(message);
        }
      }
    };

    void run();

    return () => {
      cancelled = true;
      teardownSceneSync();
    };
  }, [sceneId]);

  const onShare = React.useCallback(async () => {
    setSharing(true);
    setError(null);
    try {
      const invite = await createInvite(sceneId, "editor", 60 * 24, 20);
      const link = `${window.location.origin}/invite/${invite.token}`;
      setShareLink(link);
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(link);
      }
    } catch (nextError) {
      const message = nextError instanceof Error ? nextError.message : "Failed to create invite";
      setError(message);
    } finally {
      setSharing(false);
    }
  }, [sceneId]);

  const onLogout = React.useCallback(async () => {
    await logoutRemote();
    navigate("/login", true);
  }, [navigate]);

  return (
    <div className="app-shell editor-shell">
      <WorkspaceTopBar
        sceneId={sceneId}
        userName={user?.displayName || "User"}
        onBack={() => navigate("/scenes")}
        onShare={() => void onShare()}
        onLogout={() => void onLogout()}
        sharing={sharing}
      />
      {shareLink && <div className="share-banner">Invite link copied: <a href={shareLink}>{shareLink}</a></div>}
      {error && <div className="share-banner error">{error}</div>}
      <div className="editor-workspace">
        <ToolShelf />
        <main className="editor-canvas">
          {ready ? <SceneCanvas /> : <div className="editor-loading">Connecting to scene...</div>}
        </main>
        <PropertiesPanel />
      </div>
    </div>
  );
}
