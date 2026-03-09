import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

// Service Pages (we'll create these next)
import ITInfrastructure from './pages/ITInfrastructure';
import SystemsIntegration from './pages/SystemsIntegration';
import NetworkSolutions from './pages/NetworkSolutions';
import Cybersecurity from './pages/Cybersecurity';
import CloudServices from './pages/CloudServices';
import Support247 from './pages/Support247';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
            <Route path="/services/systems-integration" element={<SystemsIntegration />} />
            <Route path="/services/network-solutions" element={<NetworkSolutions />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/cloud-services" element={<CloudServices />} />
            <Route path="/services/support-247" element={<Support247 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;