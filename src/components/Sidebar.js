import React, { useState, useEffect } from 'react';
import { Home, ScrollText, Box, User, LogOut } from 'lucide-react';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const pathname = window.location.pathname;
    setActiveLink(pathname);
    console.log("pathname",pathname);
  }, []);

  return (
    <div className="bg-white items-center justify-center p-12 h-screen">
      <img className="mb-20 px-14" src="/logo.png" alt="Description" />
      <ul className="flex flex-col gap-12">
        <li
          className={`flex text-lg font-semibold gap-12 items-center ${
            activeLink === '/' ? 'text-purple-500' : 'hover:text-purple-500'
          }`}
          onClick={() => setActiveLink('/')}
        >
          <Home size={36} />
          Home
        </li>
        <li
          className={`flex text-lg font-semibold gap-12 items-center ${
            activeLink === '/admin' ? 'text-purple-500' : 'hover:text-purple-500'
          }`}
          onClick={() => setActiveLink('/admin')}
        >
          <ScrollText size={36} />
          Admin
        </li>
        <li
          className={`flex text-lg font-semibold gap-12 items-center ${
            activeLink === '/membership' ? 'text-purple-500' : 'hover:text-purple-500'
          }`}
          onClick={() => setActiveLink('/membership')}
        >
          <Box size={36} />
          Membership
        </li>
        <li
          className={`flex text-lg font-semibold gap-12 mb-16 items-center ${
            activeLink === '/advocate' ? 'text-purple-500' : 'hover:text-purple-500'
          }`}
          onClick={() => setActiveLink('/advocate')}
        >
          <User size={36} />
          Advocate
        </li>
        <li
          className="flex text-lg font-semibold gap-12 items-center hover:text-purple-500"
          onClick={() => setActiveLink('/logout')}
        >
          <LogOut size={36} />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
