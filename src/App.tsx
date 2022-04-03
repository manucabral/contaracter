import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Tool from "./sections/Tool";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
        <Navbar />
        <Home />
        <Tool />
        <Footer />
    </div>
  )
}
