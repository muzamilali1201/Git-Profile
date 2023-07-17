import './App.css'
import LeftSection from "./Components/LeftSection.jsx";
import RightSection from "./Components/RightSection.jsx";
import Footer from "./components/Footer.jsx"
function App() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
        <LeftSection />
        <RightSection/>
        <Footer />
    </div>
  )
}

export default App
