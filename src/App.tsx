import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import ScrollToTop from "./components/layout/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <ScrollToTop />

        <main className="flex-grow page-animate">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
