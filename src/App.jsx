import EndPointManagement from "./components/endpoint/EndPointManagement"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Services from "./components/services/Services"
import Testimonials from "./components/testimonials/Testimonials"
import WhyHexNode from "./components/whyhexnode/WhyHexNode"

function App() {
  return (
    <main className="min-h-[100vh[">
      <Header/>
      <Hero/>
      <WhyHexNode/>
      <Services/>
      <EndPointManagement/>
      <Testimonials/>
      <Footer/>
    </main>
  )
}

export default App
