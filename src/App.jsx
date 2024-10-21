import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages//Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import Team from "./pages/Team";
import PageNotFound from "./pages/PageNotFound";
import ManufacturingOfAi from "./pages/ManufacturingOfAi";
import ProgrammingOfDronesAircraft from "./pages/ProgrammingOfDronesAircraft";
import BuildingWebApps from "./pages/BuildingWebApps";
import ManufacturingOfSatellites from "./pages/ManufacturingOfSatellites";
import ProgrammingOfRobots from "./pages/ProgrammingOfRobots";
import ProgrammingOfVehicles from "./pages/ProgrammingOfVehicles";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="solutions" element={<Solutions />} />

          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
          <Route
            path="building-of-websites-and-apps-for-businesses"
            element={<BuildingWebApps />}
          />
          <Route path="manufacturing-of-ai" element={<ManufacturingOfAi />} />
          <Route
            path="programming-of-drones-and-aircraft"
            element={<ProgrammingOfDronesAircraft />}
          />
          <Route
            path="manufacturing-of-satellites"
            element={<ManufacturingOfSatellites />}
          />
          <Route
            path="programming-of-robots"
            element={<ProgrammingOfRobots />}
          />
          <Route
            path="programming-of-vehicles"
            element={<ProgrammingOfVehicles />}
          />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
