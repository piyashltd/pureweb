// File: src/components/Layout.jsx
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    // ⚠️ পরিবর্তন: আগে এখানে 'bg-[#0a0a0a]' ছিল, যা এনিমেশন ঢেকে রাখছিল।
    // এখন 'bg-transparent' দেওয়া হয়েছে, ফলে পেছনের এনিমেশন দেখা যাবে।
    <div className="min-h-screen bg-transparent flex flex-col">
      
      <Header 
        onMenuClick={() => setIsSidebarOpen(true)} 
        onSearch={(q) => console.log(q)} 
      />
      
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* মেইন কন্টেন্ট এরিয়া */}
      <main className="flex-grow"> 
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
