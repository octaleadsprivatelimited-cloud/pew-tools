import { Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import routes from "./routes/pageRoutes.jsx";

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
