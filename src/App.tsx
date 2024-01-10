import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./routes/Home"
import Destination from "./routes/destination/Destination"
import DestinationPlace from "./routes/destination/DestinationPlace"
import { moon, mars, europa, titan } from "./data"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Space-Tourism-website/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />}>
            <Route index element={<DestinationPlace place={moon} />} />
            <Route path="mars" element={<DestinationPlace place={mars} />} />
            <Route path="europa" element={<DestinationPlace place={europa} />} />
            <Route path="titan" element={<DestinationPlace place={titan} />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
