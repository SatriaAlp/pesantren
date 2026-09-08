import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { WhatsAppButton } from './components/common/WhatsAppButton';

// Pages
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Education } from './pages/Education';
import { Programs } from './pages/Programs';
import { Facilities } from './pages/Facilities';
import { Activities } from './pages/Activities';
import { News } from './pages/News';
import { NewsDetail } from './pages/NewsDetail';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-[#1F2933] font-sans antialiased">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/pendidikan" element={<Education />} />
            <Route path="/program" element={<Programs />} />
            <Route path="/fasilitas" element={<Facilities />} />
            <Route path="/kegiatan" element={<Activities />} />
            <Route path="/berita" element={<News />} />
            <Route path="/berita/:slug" element={<NewsDetail />} />
            <Route path="/galeri" element={<Gallery />} />
            <Route path="/kontak" element={<Contact />} />
            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppButton variant="floating" />
      </div>
    </Router>
  );
}
