// File: src/components/Layout.jsx
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer'; // ১. এখানে ইম্পোর্ট করুন

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col"> {/* flex-col এবং min-h-screen দেওয়া হয়েছে */}
      
      <Header 
        onMenuClick={() => setIsSidebarOpen(true)} 
        onSearch={(q) => console.log(q)} 
      />
      
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* মেইন কন্টেন্ট এরিয়া */}
      <main className="flex-grow"> 
        {children}
      </main>

      {/* ২. এখানে ফুটার বসান */}
      <Footer />
    </div>
  );
};

export default Layout;
