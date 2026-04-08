import { createBrowserRouter } from "react-router";
import Landing from "./pages/Landing";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";
import Incidents from "./pages/Incidents";
import AIFix from "./pages/AIFix";
import Testing from "./pages/Testing";
import Deployment from "./pages/Deployment";
import AILearning from "./pages/AILearning";
import CodeInput from "./pages/CodeInput";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "applications", Component: Applications },
      { path: "add-code", Component: CodeInput },
      { path: "incidents", Component: Incidents },
      { path: "ai-fix", Component: AIFix },
      { path: "testing", Component: Testing },
      { path: "deployment", Component: Deployment },
      { path: "ai-learning", Component: AILearning },
    ],
  },
]);