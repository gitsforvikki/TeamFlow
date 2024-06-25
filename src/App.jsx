import Dashboard from "./components/header-section/Dashboard";
import Navbar from "./components/header-section/Navbar";
import rectangle from "../src/assets/rectangle.png";
import Features from "./components/body-section/Features";
import MainBody from "./components/body-section/MainBody";
import Footer from "./components/footer/Footer";
import Caurosel from "./components/caurosel/Caurosel";
function App() {
  return (
    <div>
      <div
        id="background"
        className="bg-hero-pattern bg-no-repeat max-w-[1840px] w-full h-screen mx-auto relative"
      >
        <Navbar />
        <Dashboard />
        <Features/>
        <MainBody/>
        <Caurosel/>
        <Footer/>
        <div className="mt-32">text</div>
      </div>
    </div>
  );
}

export default App;
