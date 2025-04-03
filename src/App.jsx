import { Suspense, lazy } from "react";

const EndPointManagement = lazy(() =>
  import("./components/endpoint/EndPointManagement")
);
const Footer = lazy(() => import("./components/footer/Footer"));
const Header = lazy(() => import("./components/header/Header"));
const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Testimonials = lazy(() =>
  import("./components/testimonials/Testimonials")
);
const WhyHexNode = lazy(() => import("./components/whyhexnode/WhyHexNode"));

function App() {
  return (
    <main className="min-h-[100vh[">
      <Suspense fallback={<center className="h-[100vh] flex justify-center items-center">Loading</center>}>
        <Header />
        <Hero />
        <WhyHexNode />
        <Services />
        <EndPointManagement />
        <Testimonials />
        <Footer />
      </Suspense>
    </main>
  );
}

export default App;
