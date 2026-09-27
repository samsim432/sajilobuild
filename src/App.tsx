import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./auth/AuthProvider";
import ProtectedRoute from "./auth/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Templates from "./pages/Templates";
import NewBuild from "./pages/NewBuild";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* =========================
              PUBLIC ROUTES
          ========================== */}

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/templates" element={<Templates />} />

          {/* =========================
              PROTECTED ROUTES
          ========================== */}

          <Route element={<ProtectedRoute />}>
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/dashboard/projects"
              element={<Projects />}
            />

            <Route
              path="/dashboard/settings"
              element={<Settings />}
            />

            <Route
              path="/new"
              element={<NewBuild />}
            />
          </Route>

          {/* =========================
              FALLBACK
          ========================== */}

          <Route
            path="*"
            element={<Home />}
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;