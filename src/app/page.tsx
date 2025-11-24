// 'use client'

// import CreatePost from "@/components/CreatePost/CreatePost";
// import LeftSidebar from "@/components/left_sidebar/left_sidebar";
// import Navbar from "@/components/navbar/navbar";
// import RightSidebar from "@/components/right_sidebar/right_sidebar";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />

//       <div className="pt-16 h-[calc(100vh-4rem)]">
//         <div className="container mx-auto px-4 h-full">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 h-full mt-6">
//             {/* Left Sidebar - Hidden on small screens, visible on lg screens */}
//             <div className="hidden lg:block lg:col-span-3 h-full overflow-y-auto hide-scrollbar">
//               <LeftSidebar />
//             </div>

//             {/* Main Content - Full width on small screens, 6 columns on lg screens */}
//             <div className="col-span-1 lg:col-span-6 h-full overflow-y-auto hide-scrollbar">
//               <CreatePost />
//               {/* Additional content can go here */}
//             </div>

//             {/* Right Sidebar - Hidden on small screens, visible on lg screens */}
//             <div className="hidden lg:block lg:col-span-3 h-full overflow-y-auto hide-scrollbar">
//               <RightSidebar />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Hide scrollbar styles */}
//       <style jsx global>{`
//         .hide-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .hide-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// }

















// import React, { useEffect, useState } from "react";

//  const [isDarkMode , setIsDarkMode] = useState(() => {
//     return localStorage.getItem("theme") === "dark";
//   });

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme" , isDarkMode ? "dark" : "light");
//     localStorage.setItem("theme", isDarkMode ? "dark" : "light");
//   } , [isDarkMode]);

//   const handleThemeToggle = () => {
//     setIsDarkMode(prev => !prev);
//   };








// 'use client'

// import CreatePost from "@/components/CreatePost/CreatePost";
// import LeftSidebar from "@/components/left_sidebar/left_sidebar";
// import Navbar from "@/components/navbar/navbar";
// import RightSidebar from "@/components/right_sidebar/right_sidebar";



// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />

//       <div className="pt-16 h-[calc(100vh-4rem)]">
//         <div className="container mx-auto px-4 h-full">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 h-full mt-6">
//             {/* Left Sidebar - Hidden on small screens, visible on lg screens */}
//             <div className="hidden lg:block lg:col-span-3 h-full overflow-y-auto hide-scrollbar">
//               <LeftSidebar />
//             </div>

//             {/* Main Content - Full width on small screens, 6 columns on lg screens */}
//             <div className="col-span-1 lg:col-span-6 h-full overflow-y-auto hide-scrollbar">
//               <CreatePost />
//               {/* Additional content can go here */}
//             </div>

//             {/* Right Sidebar - Hidden on small screens, visible on lg screens */}
//             <div className="hidden lg:block lg:col-span-3 h-full overflow-y-auto hide-scrollbar">
//               <RightSidebar />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Double Button - Positioned absolutely in the middle */}
//       {/* <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
//         <div className="flex flex-col space-y-2">
//           <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors">
//             <span className="text-lg">+</span>
//           </button>
//           <button className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition-colors">
//             <span className="text-lg">⚡</span>
//           </button>
//         </div>
//       </div> */}

//       {/* Hide scrollbar styles */}
//       <style jsx global>{`
//         .hide-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .hide-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// }
















'use client'

import { useState, useEffect } from 'react';
import CreatePost from "@/components/CreatePost/CreatePost";
import LeftSidebar from "@/components/left_sidebar/left_sidebar";
import Navbar from "@/components/navbar/navbar";
import RightSidebar from "@/components/right_sidebar/right_sidebar";
import { Sun, Moon } from 'lucide-react';
import PrivateRoute from './route/PrivateRoute';

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check system preference or saved theme
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' || 'system';
    setTheme(savedTheme);
    // eslint-disable-next-line react-hooks/immutability
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: 'light' | 'dark' | 'system') => {
    const root = document.documentElement;
    
    if (newTheme === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (systemPrefersDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    } else if (newTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem('theme', newTheme);
  };

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <PrivateRoute>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />

      <div className="pt-16 h-[calc(100vh-4rem)]">
        <div className="container mx-auto px-4 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 h-full mt-6">
            {/* Left Sidebar - Hidden on small screens, visible on lg screens */}
            <div className="hidden lg:block lg:col-span-3 h-full overflow-y-auto hide-scrollbar">
              <LeftSidebar />
            </div>

            {/* Main Content - Full width on small screens, 6 columns on lg screens */}
            <div className="col-span-1 lg:col-span-6 h-full overflow-y-auto hide-scrollbar">
              <CreatePost />
              {/* Additional content can go here */}
            </div>

            {/* Right Sidebar - Hidden on small screens, visible on lg screens */}
            <div className="hidden lg:block lg:col-span-3 h-full overflow-y-auto hide-scrollbar">
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Theme Controller */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col space-y-3 bg-white dark:bg-card rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-border">
          <button
            onClick={() => handleThemeChange('light')}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              theme === 'light' 
                ? 'bg-primary text-primary-foreground shadow-md' 
                : 'bg-gray-100 dark:bg-background-secondary text-gray-600 dark:text-foreground-secondary hover:bg-gray-200 dark:hover:bg-background-tertiary'
            }`}
            title="Light Mode"
          >
            <Sun size={18} />
          </button>
          
          <button
            onClick={() => handleThemeChange('dark')}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-primary text-primary-foreground shadow-md' 
                : 'bg-gray-100 dark:bg-background-secondary text-gray-600 dark:text-foreground-secondary hover:bg-gray-200 dark:hover:bg-background-tertiary'
            }`}
            title="Dark Mode"
          >
            <Moon size={18} />
          </button>
          
          {/* <button
            onClick={() => handleThemeChange('system')}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              theme === 'system' 
                ? 'bg-primary text-primary-foreground shadow-md' 
                : 'bg-gray-100 dark:bg-background-secondary text-gray-600 dark:text-foreground-secondary hover:bg-gray-200 dark:hover:bg-background-tertiary'
            }`}
            title="System Preference"
          >
            <Monitor size={18} />
          </button> */}
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
    </PrivateRoute>
  );
}