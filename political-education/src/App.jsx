import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ElectedOfficials from "./pages/Electedofficials";
import PartyStances from "./pages/PartyStances";
import InterestGroups from "./pages/InterestGroups";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/elected-officials" element={<ElectedOfficials />} />
        <Route path="party-stances" element={<PartyStances />} />
        <Route path="interest-groups" element={<InterestGroups />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App;