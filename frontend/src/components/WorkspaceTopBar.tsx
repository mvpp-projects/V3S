import React from "react";
import "./WorkspaceTopBar.css";
import { Button } from "./ui";

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
        <Button variant="ghost" size="md" onClick={onBack}>Scenes</Button>
        <strong>v3s</strong>
        <span className="v3s-topbar__divider" />
        <span className="scene-chip">{sceneId}</span>
      </div>
      <div className="v3s-workspace-topbar__right">
        <span className="user-chip">{userName}</span>
        <Button variant="accent" size="md" onClick={onShare} disabled={sharing}>
          {sharing ? "Sharing..." : "Share Invite"}
        </Button>
        <Button variant="ghost" size="md" onClick={onLogout}>Logout</Button>
      </div>
    </header>
  );
}
