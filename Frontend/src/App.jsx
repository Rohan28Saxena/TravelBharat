import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import StateDestinations from './pages/StateDestinations';
import DestinationDetails from './pages/DestinationDetails';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* 1. FOOLPROOF BACKGROUND IMAGE */}
      {/* This creates a real image locked to the background (-z-10) */}
      <img 
        src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop" 
        alt="Background" 
        className="fixed inset-0 w-full h-full object-cover -z-10"
      />

      {/* 2. THE OVERLAY (Reduced to 60% opacity so you can actually see the image) */}
      <div className="min-h-screen bg-[#fff9f2]/30
      0">
        <Router>
          <Navbar />
          <div className="pb-12"> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/state/:stateName" element={<StateDestinations />} />
              <Route path="/destination/:id" element={<DestinationDetails />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;