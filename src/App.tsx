import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./routes/Home"
import Destination from "./routes/destination/Destination"
import DestinationPlace from "./routes/destination/DestinationPlace"
import Crew from "./routes/crew/Crew"
import CrewMember from "./routes/crew/CrewMember"
import Technology from "./routes/technology/Technology"
import { moon, mars, europa, titan, douglas, mark, victor, anousheh } from "./data"

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
          <Route path="crew" element={<Crew />}>
            <Route index element={<CrewMember member={douglas} />} />
            <Route path="mark" element={<CrewMember member={mark} />} />
            <Route path="victor" element={<CrewMember member={victor} />} />
            <Route path="anousheh" element={<CrewMember member={anousheh} />} />
          </Route>
          <Route path="technology" element={<Technology />}>
            <Route index element={<h1>Launch vehicle</h1>}/>
            <Route path="spaceport" element={<h1>Spaceport</h1>}/>
            <Route path="space" element={<h1>Space capsule</h1>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
