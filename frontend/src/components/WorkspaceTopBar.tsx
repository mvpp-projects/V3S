import React from "react";
import "./WorkspaceTopBar.css";

type Props = {
  sceneId: string;
  userName: string;
  sharing: boolean;
  onBack: () => void;
  onShare: () => void;
  onLogout: () => void;
};

export default function WorkspaceTopBar({ sceneId, userName, sharing, onBack, onShare, onLogout }: Props) {
  return (
    <header className="v3s-workspace-topbar">
      <div className="v3s-workspace-topbar__left">
        <button className="v3s-btn v3s-btn--ghost" onClick={onBack} type="button">Scenes</button>
        <strong>v3s</strong>
        <span className="v3s-topbar__divider" />
        <span className="scene-chip">{sceneId}</span>
      </div>
      <div className="v3s-workspace-topbar__right">
        <span className="user-chip">{userName}</span>
        <button className="v3s-btn v3s-btn--accent" onClick={onShare} type="button" disabled={sharing}>
          {sharing ? "Sharing..." : "Share Invite"}
        </button>
        <button className="v3s-btn v3s-btn--ghost" onClick={onLogout} type="button">Logout</button>
      </div>
    </header>
  );
}
