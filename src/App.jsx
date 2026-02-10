// File: src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ShowDetails from './pages/ShowDetails';
import WatchPage from './pages/WatchPage';
import ChannelDetails from './pages/ChannelDetails'; // নতুন ইম্পোর্ট

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/channel/:id" element={<ChannelDetails />} /> {/* এই লাইনটি যোগ করুন */}
          <Route path="/show/:id" element={<ShowDetails />} />
          <Route path="/watch/:episodeId" element={<WatchPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
