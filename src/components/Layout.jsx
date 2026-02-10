// File: src/components/Layout.jsx
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    // ✅ পরিবর্তন: এখানে 'bg-[#0a0a0a]' বা 'bg-transparent' এর বদলে 
    // আমাদের বানানো 'animated-bg' ক্লাসটি দিন।
    <div className="animated-bg flex flex-col min-h-screen">
      
      <Header 
        onMenuClick={() => setIsSidebarOpen(true)} 
        onSearch={(q) => console.log(q)} 
      />
      
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* মেইন কন্টেন্ট */}
      <main className="flex-grow"> 
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
