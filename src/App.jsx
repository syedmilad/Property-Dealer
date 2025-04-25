import { Route, Routes } from "react-router-dom";
import "./App.css";
import BaseComponent from "./components/ProtectedRoute";
import routes from "./config/routesConfig";
import { Suspense } from "react";
function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<BaseComponent />}>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
