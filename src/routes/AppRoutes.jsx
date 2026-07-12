import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home/Home";
import DisasterMap from "../pages/DisasterMap/DisasterMap";
import Shelters from "../pages/Shelters/Shelters";
import BloodDonors from "../pages/BloodDonors/BloodDonors";
import MissingPersons from "../pages/MissingPersons/MissingPersons";
import News from "../pages/News/News";
import Settings from "../pages/Settings/Settings";
import About from "../pages/About/About";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="map" element={<DisasterMap />} />
          <Route path="shelters" element={<Shelters />} />
          <Route path="blood-donors" element={<BloodDonors />} />
          <Route path="missing-persons" element={<MissingPersons />} />
          <Route path="news" element={<News />} />
          <Route path="settings" element={<Settings />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;