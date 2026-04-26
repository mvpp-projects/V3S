import React from "react";
import { ThemeProvider } from "./theme/ThemeProvider";
import { isAuthenticated } from "./lib/auth";
import LoginPage from "./pages/LoginPage";
import ScenesPage from "./pages/ScenesPage";
import InvitePage from "./pages/InvitePage";
import EditorPage from "./pages/EditorPage";

type Route =
  | { name: "login" }
  | { name: "scenes" }
  | { name: "invite"; token: string }
  | { name: "editor"; sceneId: string };

function parseRoute(location: Location): Route {
  const path = location.pathname.replace(/\/+$/, "") || "/";
  const segments = path.split("/").filter(Boolean);

  if (segments[0] === "invite" && segments[1]) {
    return { name: "invite", token: segments[1] };
  }

  if (segments[0] === "editor" && segments[1]) {
    return { name: "editor", sceneId: segments[1] };
  }

  if (segments[0] === "scenes") {
    return { name: "scenes" };
  }

  if (segments[0] === "login") {
    return { name: "login" };
  }

  const params = new URLSearchParams(location.search);
  const inviteToken = params.get("invite")?.trim();
  if (inviteToken) {
    return { name: "invite", token: inviteToken };
  }

  return isAuthenticated() ? { name: "scenes" } : { name: "login" };
}

function useAppRoute() {
  const [route, setRoute] = React.useState<Route>(() => parseRoute(window.location));

  React.useEffect(() => {
    const onPop = () => setRoute(parseRoute(window.location));
    window.addEventListener("popstate", onPop);
    return () => {
      window.removeEventListener("popstate", onPop);
    };
  }, []);

  const navigate = React.useCallback((path: string, replace = false) => {
    if (replace) {
      window.history.replaceState({}, "", path);
    } else {
      window.history.pushState({}, "", path);
    }
    setRoute(parseRoute(window.location));
  }, []);

  return { route, navigate };
}

export default function App() {
  const { route, navigate } = useAppRoute();

  return (
    <ThemeProvider>
      {route.name === "login" && <LoginPage navigate={navigate} />}
      {route.name === "scenes" && <ScenesPage navigate={navigate} />}
      {route.name === "invite" && <InvitePage token={route.token} navigate={navigate} />}
      {route.name === "editor" && <EditorPage sceneId={route.sceneId} navigate={navigate} />}
    </ThemeProvider>
  );
}
