// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import VendorDashboard from './pages/VendorDashboard';
import ConsumerShop from './pages/ConsumerShop';
import MyShop from './pages/MyShop';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/vendor" element={<VendorDashboard />} />
            <Route path="/consumer" element={<ConsumerShop />} />
            <Route path="/myshop" element={<MyShop />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;