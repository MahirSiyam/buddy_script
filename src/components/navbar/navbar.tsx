// 'use client'
// import React, { useState } from 'react';
// import Image from 'next/image';
// import logo from '../../../public/logo.svg'
// import { FiHome } from 'react-icons/fi';

// import profile from '../../../public/card_ppl1.png'

// const Navbar: React.FC = () => {
//     const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//     const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [activeNav, setActiveNav] = useState('home');

//     const navItems = [
//         { id: 'home', icon: <FiHome className='h-6 w-6' />, href: '/home', label: 'Home' },
//         {
//             id: 'friends',
//             icon: (
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 26 20">
//                     <path fill="currentColor" fillRule="evenodd" d="M12.79 12.15h.429c2.268.015 7.45.243 7.45 3.732 0 3.466-5.002 3.692-7.415 3.707h-.894c-2.268-.015-7.452-.243-7.452-3.727 0-3.47 5.184-3.697 7.452-3.711l.297-.001h.132zm0 1.75c-2.792 0-6.12.34-6.12 1.962 0 1.585 3.13 1.955 5.864 1.976l.255.002c2.792 0 6.118-.34 6.118-1.958 0-1.638-3.326-1.982-6.118-1.982zm9.343-2.224c2.846.424 3.444 1.751 3.444 2.79 0 .636-.251 1.794-1.931 2.43a.882.882 0 01-1.137-.506.873.873 0 01.51-1.13c.796-.3.796-.633.796-.793 0-.511-.654-.868-1.944-1.06a.878.878 0 01-.741-.996.886.886 0 011.003-.735zm-17.685.735a.878.878 0 01-.742.997c-1.29.19-1.944.548-1.944 1.059 0 .16 0 .491.798.793a.873.873 0 01-.314 1.693.897.897 0 01-.313-.057C.25 16.259 0 15.1 0 14.466c0-1.037.598-2.366 3.446-2.79.485-.06.929.257 1.002.735zM12.789 0c2.96 0 5.368 2.392 5.368 5.33 0 2.94-2.407 5.331-5.368 5.331h-.031a5.329 5.329 0 01-3.782-1.57 5.253 5.253 0 01-1.553-3.764C7.423 2.392 9.83 0 12.789 0zm0 1.75c-1.987 0-3.604 1.607-3.604 3.58a3.526 3.526 0 001.04 2.527 3.58 3.58 0 002.535 1.054l.03.875v-.875c1.987 0 3.605-1.605 3.605-3.58S14.777 1.75 12.789 1.75z" clipRule="evenodd" />
//                 </svg>
//             ),
//             href: '/friends',
//             label: 'Friends'
//         },
//         {
//             id: 'notifications',
//             icon: (
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 22">
//                     <path fill="currentColor" fillRule="evenodd" d="M7.547 19.55c.533.59 1.218.915 1.93.915.714 0 1.403-.324 1.938-.916a.777.777 0 011.09-.056c.318.284.344.77.058 1.084-.832.917-1.927 1.423-3.086 1.423h-.002c-1.155-.001-2.248-.506-3.077-1.424a.762.762 0 01.057-1.083.774.774 0 011.092.057zM9.527 0c4.58 0 7.657 3.543 7.657 6.85 0 1.702.436 2.424.899 3.19.457.754.976 1.612.976 3.233-.36 4.14-4.713 4.478-9.531 4.478-4.818 0-9.172-.337-9.528-4.413-.003-1.686.515-2.544.973-3.299l.161-.27c.398-.679.737-1.417.737-2.918C1.871 3.543 4.948 0 9.528 0zm0 1.535c-3.6 0-6.11 2.802-6.11 5.316 0 2.127-.595 3.11-1.12 3.978-.422.697-.755 1.247-.755 2.444.173 1.93 1.455 2.944 7.986 2.944 6.494 0 7.817-1.06 7.988-3.01-.003-1.13-.336-1.681-.757-2.378-.526-.868-1.12-1.851-1.12-3.978 0-2.514-2.51-5.316-6.111-5.316z" clipRule="evenodd" />
//                 </svg>
//             ),
//             href: '/notifications',
//             label: 'Notifications'
//         },
//         {
//             id: 'messages',
//             icon: (
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 23 22">
//                     <path fill="currentColor" fillRule="evenodd" d="M11.43 0c2.96 0 5.743 1.143 7.833 3.22 4.32 4.29 4.32 11.271 0 15.562C17.145 20.886 14.293 22 11.405 22c-1.575 0-3.16-.33-4.643-1.012-.437-.174-.847-.338-1.14-.338-.338.002-.793.158-1.232.308-.9.307-2.022.69-2.852-.131-.826-.822-.445-1.932-.138-2.826.152-.44.307-.895.307-1.239 0-.282-.137-.642-.347-1.161C-.57 11.46.322 6.47 3.596 3.22A11.04 11.04 0 0111.43 0zm0 1.535A9.5 9.5 0 004.69 4.307a9.463 9.463 0 00-1.91 10.686c.241.592.474 1.17.474 1.77 0 .598-.207 1.201-.39 1.733-.15.439-.378 1.1-.231 1.245.143.147.813-.085 1.255-.235.53-.18 1.133-.387 1.73-.391.597 0 1.161.225 1.758.463 3.655 1.679 7.98.915 10.796-1.881 3.716-3.693 3.716-9.7 0-13.391a9.5 9.5 0 00-6.74-2.77z" clipRule="evenodd" />
//                 </svg>
//             ),
//             href: '/messages',
//             label: 'Messages'
//         },
//     ];

//     const handleNavClick = (navId: string) => {
//         setActiveNav(navId);
//     };

//     const isActive = (navId: string) => activeNav === navId;

//     const hasBadge = (itemId: string) => {
//         return itemId === 'notifications' || itemId === 'messages';
//     };

//     const getBadgeCount = (itemId: string) => {
//         if (itemId === 'notifications') return '6';
//         if (itemId === 'messages') return '2';
//         return '';
//     };

//     return (
//         <>
//             {/* Top Navbar for Mobile */}
//             <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 py-3 md:hidden">
//                 <div className="container mx-auto px-4">
//                     <div className="flex items-center justify-between">
//                         {/* Logo */}
//                         <div className="flex items-center">
//                             <a href="/feed" className="flex items-center">
//                                 <Image
//                                     src={logo}
//                                     alt="Logo"
//                                     className="h-8"
//                                 />
//                             </a>
//                         </div>

//                         {/* Search Icon for Mobile */}
//                         <button className="text-gray-600 p-2 hover:text-[#1890ff] transition-colors">
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <circle cx="11" cy="11" r="8" stroke="currentColor" />
//                                 <path stroke="currentColor" strokeLinecap="round" d="m21 21-4.35-4.35" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </nav>

//             {/* Desktop Navbar */}
//             <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 py-3 hidden md:block">
//                 <div className="container mx-auto px-4">
//                     <div className="flex items-center justify-between">
//                         {/* Logo */}
//                         <div className="flex items-center">
//                             <a href="/feed" className="flex items-center">
//                                 <Image
//                                     src={logo}
//                                     alt="Logo"
//                                     className="h-10"
//                                 />
//                             </a>
//                         </div>

//                         {/* Search Bar - Desktop */}
//                         <div className="flex flex-1 max-w-md mx-8">
//                             <div className="relative w-full">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <circle cx="11" cy="11" r="8" stroke="#666" />
//                                         <path stroke="#666" strokeLinecap="round" d="m21 21-4.35-4.35" />
//                                     </svg>
//                                 </div>
//                                 <input
//                                     type="search"
//                                     className="bg-gray-100 border border-gray-100 rounded-full px-10 py-2 w-full transition-all duration-200 focus:border-[#1890ff] focus:outline-none"
//                                     placeholder="Search..."
//                                 />
//                             </div>
//                         </div>

//                         {/* Navigation Icons */}
//                         <div className="flex items-center space-x-2 md:space-x-6">
//                             {navItems.map((item) => (
//                                 <div key={item.id} className="relative">
//                                     {item.id === 'notifications' ? (
//                                         <button
//                                             onClick={() => {
//                                                 setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
//                                                 handleNavClick(item.id);
//                                             }}
//                                             className={`flex flex-col items-center p-2 transition-all duration-200 ${isActive(item.id)
//                                                 ? 'text-[#1890ff]'
//                                                 : 'text-gray-600 hover:text-[#1890ff]'
//                                                 }`}
//                                         >
//                                             <div className="relative">
//                                                 {item.icon}
//                                                 {hasBadge(item.id) && (
//                                                     <span className="absolute -top-2 -right-2 bg-[#1890ff] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                                                         {getBadgeCount(item.id)}
//                                                     </span>
//                                                 )}
//                                             </div>
//                                         </button>
//                                     ) : (
//                                         <a
//                                             href={item.href}
//                                             onClick={() => handleNavClick(item.id)}
//                                             className={`flex flex-col items-center p-2 transition-all duration-200 ${isActive(item.id)
//                                                 ? 'text-[#1890ff]'
//                                                 : 'text-gray-600 hover:text-[#1890ff]'
//                                                 }`}
//                                         >
//                                             <div className="relative">
//                                                 {item.icon}
//                                                 {hasBadge(item.id) && (
//                                                     <span className="absolute -top-2 -right-2 bg-[#1890ff] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                                                         {getBadgeCount(item.id)}
//                                                     </span>
//                                                 )}
//                                             </div>
//                                         </a>
//                                     )}
//                                 </div>
//                             ))}

//                             {/* Profile Dropdown */}
//                             <div className="relative">
//                                 <button
//                                     onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
//                                     className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100"
//                                 >
//                                     <Image
//                                         src={profile}
//                                         alt="Profile"
//                                         className="w-8 h-8 rounded-full"
//                                     />
//                                     <span className="text-gray-700 hidden md:block text-sm font-medium">Dylan Field</span>
//                                     <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
//                                         <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                                     </svg>
//                                 </button>

//                                 {/* Profile Dropdown Menu */}
//                                 {isProfileDropdownOpen && (
//                                     <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50">
//                                         <div className="p-4">
//                                             <div className="flex items-center space-x-3">
//                                                 <Image
//                                                     src={profile}
//                                                     alt="Profile"
//                                                     className="w-12 h-12 rounded-full"
//                                                 />
//                                                 <div>
//                                                     <h4 className="font-semibold text-gray-900">Dylan Field</h4>
//                                                     <a href="/profile" className="text-[#1890ff] text-sm hover:underline">View Profile</a>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         <div className="p-2">
//                                             <a href="/settings" className="flex items-center justify-between px-3 py-2 text-gray-700 hover:text-[#1890ff] hover:bg-gray-50 rounded-lg transition-colors">
//                                                 <div className="flex items-center space-x-3">
//                                                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                                                     </svg>
//                                                     <span className="text-sm">Settings</span>
//                                                 </div>
//                                                 <span className="text-gray-400">›</span>
//                                             </a>

//                                             <a href="/help" className="flex items-center justify-between px-3 py-2 text-gray-700 hover:text-[#1890ff] hover:bg-gray-50 rounded-lg transition-colors">
//                                                 <div className="flex items-center space-x-3">
//                                                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                                     </svg>
//                                                     <span className="text-sm">Help & Support</span>
//                                                 </div>
//                                                 <span className="text-gray-400">›</span>
//                                             </a>

//                                             <a href="/login" className="flex items-center justify-between px-3 py-2 text-gray-700 hover:text-[#1890ff] hover:bg-gray-50 rounded-lg transition-colors">
//                                                 <div className="flex items-center space-x-3">
//                                                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
//                                                     </svg>
//                                                     <span className="text-sm">Log Out</span>
//                                                 </div>
//                                                 <span className="text-gray-400">›</span>
//                                             </a>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             {/* Bottom Navigation for Mobile */}
//             <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 md:hidden">
//                 <div className="flex items-center justify-around py-3">
//                     {navItems.map((item) => (
//                         <div key={item.id} className="relative">
//                             {item.id === 'notifications' ? (
//                                 <button
//                                     onClick={() => {
//                                         setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
//                                         handleNavClick(item.id);
//                                     }}
//                                     className={`flex flex-col items-center p-2 transition-all duration-200 ${isActive(item.id)
//                                         ? 'text-[#1890ff]'
//                                         : 'text-gray-600 hover:text-[#1890ff]'
//                                         }`}
//                                 >
//                                     <div className="relative">
//                                         {item.icon}
//                                         {hasBadge(item.id) && (
//                                             <span className="absolute -top-2 -right-2 bg-[#1890ff] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                                                 {getBadgeCount(item.id)}
//                                             </span>
//                                         )}
//                                     </div>
//                                 </button>
//                             ) : (
//                                 <a
//                                     href={item.href}
//                                     onClick={() => handleNavClick(item.id)}
//                                     className={`flex flex-col items-center p-2 transition-all duration-200 ${isActive(item.id)
//                                         ? 'text-[#1890ff]'
//                                         : 'text-gray-600 hover:text-[#1890ff]'
//                                         }`}
//                                 >
//                                     <div className="relative">
//                                         {item.icon}
//                                         {hasBadge(item.id) && (
//                                             <span className="absolute -top-2 -right-2 bg-[#1890ff] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                                                 {getBadgeCount(item.id)}
//                                             </span>
//                                         )}
//                                     </div>
//                                 </a>
//                             )}
//                         </div>
//                     ))}

//                     {/* Hamburger Menu */}
//                     <button
//                         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                         className={`flex flex-col items-center p-2 transition-all duration-200 ${isMobileMenuOpen
//                             ? 'text-[#1890ff]'
//                             : 'text-gray-600 hover:text-[#1890ff]'
//                             }`}
//                     >
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu Dropdown */}
//             {isMobileMenuOpen && (
//                 <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 z-40 md:hidden">
//                     <div className="p-4 space-y-3">
//                         <a href="/profile" className="flex items-center space-x-3 p-2 text-gray-700 hover:text-[#1890ff] hover:bg-gray-50 rounded-lg transition-colors">
//                             <Image
//                                 src={profile}
//                                 alt="Profile"
//                                 className="w-8 h-8 rounded-full"
//                             />
//                             <span>My Profile</span>
//                         </a>
//                         <a href="/settings" className="flex items-center space-x-3 p-2 text-gray-700 hover:text-[#1890ff] hover:bg-gray-50 rounded-lg transition-colors">
//                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                             </svg>
//                             <span>Settings</span>
//                         </a>
//                         <a href="/help" className="flex items-center space-x-3 p-2 text-gray-700 hover:text-[#1890ff] hover:bg-gray-50 rounded-lg transition-colors">
//                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                             </svg>
//                             <span>Help & Support</span>
//                         </a>
//                         <a href="/login" className="flex items-center space-x-3 p-2 text-gray-700 hover:text-[#1890ff] hover:bg-gray-50 rounded-lg transition-colors">
//                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
//                             </svg>
//                             <span>Log Out</span>
//                         </a>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Navbar;






















// 'use client'
// import React, { useState } from 'react';
// import Image from 'next/image';
// import logo from '../../../public/logo.svg'
// import { FiHome } from 'react-icons/fi';

// import profile from '../../../public/card_ppl1.png'
// import { useAuth } from '@/utils/AuthProvider';

// const Navbar: React.FC = () => {
//     const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//     const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [activeNav, setActiveNav] = useState('home');

//     const { user } = useAuth();

//     const navItems = [
//         { id: 'home', icon: <FiHome className='h-6 w-6' />, href: '/home', label: 'Home' },
//         {
//             id: 'friends',
//             icon: (
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 26 20">
//                     <path fill="currentColor" fillRule="evenodd" d="M12.79 12.15h.429c2.268.015 7.45.243 7.45 3.732 0 3.466-5.002 3.692-7.415 3.707h-.894c-2.268-.015-7.452-.243-7.452-3.727 0-3.47 5.184-3.697 7.452-3.711l.297-.001h.132zm0 1.75c-2.792 0-6.12.34-6.12 1.962 0 1.585 3.13 1.955 5.864 1.976l.255.002c2.792 0 6.118-.34 6.118-1.958 0-1.638-3.326-1.982-6.118-1.982zm9.343-2.224c2.846.424 3.444 1.751 3.444 2.79 0 .636-.251 1.794-1.931 2.43a.882.882 0 01-1.137-.506.873.873 0 01.51-1.13c.796-.3.796-.633.796-.793 0-.511-.654-.868-1.944-1.06a.878.878 0 01-.741-.996.886.886 0 011.003-.735zm-17.685.735a.878.878 0 01-.742.997c-1.29.19-1.944.548-1.944 1.059 0 .16 0 .491.798.793a.873.873 0 01-.314 1.693.897.897 0 01-.313-.057C.25 16.259 0 15.1 0 14.466c0-1.037.598-2.366 3.446-2.79.485-.06.929.257 1.002.735zM12.789 0c2.96 0 5.368 2.392 5.368 5.33 0 2.94-2.407 5.331-5.368 5.331h-.031a5.329 5.329 0 01-3.782-1.57 5.253 5.253 0 01-1.553-3.764C7.423 2.392 9.83 0 12.789 0zm0 1.75c-1.987 0-3.604 1.607-3.604 3.58a3.526 3.526 0 001.04 2.527 3.58 3.58 0 002.535 1.054l.03.875v-.875c1.987 0 3.605-1.605 3.605-3.58S14.777 1.75 12.789 1.75z" clipRule="evenodd" />
//                 </svg>
//             ),
//             href: '/friends',
//             label: 'Friends'
//         },
//         {
//             id: 'notifications',
//             icon: (
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 22">
//                     <path fill="currentColor" fillRule="evenodd" d="M7.547 19.55c.533.59 1.218.915 1.93.915.714 0 1.403-.324 1.938-.916a.777.777 0 011.09-.056c.318.284.344.77.058 1.084-.832.917-1.927 1.423-3.086 1.423h-.002c-1.155-.001-2.248-.506-3.077-1.424a.762.762 0 01.057-1.083.774.774 0 011.092.057zM9.527 0c4.58 0 7.657 3.543 7.657 6.85 0 1.702.436 2.424.899 3.19.457.754.976 1.612.976 3.233-.36 4.14-4.713 4.478-9.531 4.478-4.818 0-9.172-.337-9.528-4.413-.003-1.686.515-2.544.973-3.299l.161-.27c.398-.679.737-1.417.737-2.918C1.871 3.543 4.948 0 9.528 0zm0 1.535c-3.6 0-6.11 2.802-6.11 5.316 0 2.127-.595 3.11-1.12 3.978-.422.697-.755 1.247-.755 2.444.173 1.93 1.455 2.944 7.986 2.944 6.494 0 7.817-1.06 7.988-3.01-.003-1.13-.336-1.681-.757-2.378-.526-.868-1.12-1.851-1.12-3.978 0-2.514-2.51-5.316-6.111-5.316z" clipRule="evenodd" />
//                 </svg>
//             ),
//             href: '/notifications',
//             label: 'Notifications'
//         },
//         {
//             id: 'messages',
//             icon: (
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 23 22">
//                     <path fill="currentColor" fillRule="evenodd" d="M11.43 0c2.96 0 5.743 1.143 7.833 3.22 4.32 4.29 4.32 11.271 0 15.562C17.145 20.886 14.293 22 11.405 22c-1.575 0-3.16-.33-4.643-1.012-.437-.174-.847-.338-1.14-.338-.338.002-.793.158-1.232.308-.9.307-2.022.69-2.852-.131-.826-.822-.445-1.932-.138-2.826.152-.44.307-.895.307-1.239 0-.282-.137-.642-.347-1.161C-.57 11.46.322 6.47 3.596 3.22A11.04 11.04 0 0111.43 0zm0 1.535A9.5 9.5 0 004.69 4.307a9.463 9.463 0 00-1.91 10.686c.241.592.474 1.17.474 1.77 0 .598-.207 1.201-.39 1.733-.15.439-.378 1.1-.231 1.245.143.147.813-.085 1.255-.235.53-.18 1.133-.387 1.73-.391.597 0 1.161.225 1.758.463 3.655 1.679 7.98.915 10.796-1.881 3.716-3.693 3.716-9.7 0-13.391a9.5 9.5 0 00-6.74-2.77z" clipRule="evenodd" />
//                 </svg>
//             ),
//             href: '/messages',
//             label: 'Messages'
//         },
//     ];

//     const handleNavClick = (navId: string) => {
//         setActiveNav(navId);
//     };

//     const isActive = (navId: string) => activeNav === navId;

//     const hasBadge = (itemId: string) => {
//         return itemId === 'notifications' || itemId === 'messages';
//     };

//     const getBadgeCount = (itemId: string) => {
//         if (itemId === 'notifications') return '6';
//         if (itemId === 'messages') return '2';
//         return '';
//     };

//     return (
//         <>
//             {/* Top Navbar for Mobile */}
//             <nav className="bg-card shadow-sm fixed top-0 left-0 right-0 z-50 py-3 md:hidden border-b border-border">
//                 <div className="container mx-auto px-4">
//                     <div className="flex items-center justify-between">
//                         {/* Logo */}
//                         <div className="flex items-center">
//                             <a href="/feed" className="flex items-center">
//                                 <Image
//                                     src={logo}
//                                     alt="Logo"
//                                     className="h-8"
//                                 />
//                             </a>
//                         </div>

//                         {/* Search Icon for Mobile */}
//                         <button className="text-foreground-muted p-2 hover:text-primary transition-colors">
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <circle cx="11" cy="11" r="8" stroke="currentColor" />
//                                 <path stroke="currentColor" strokeLinecap="round" d="m21 21-4.35-4.35" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </nav>

//             {/* Desktop Navbar */}
//             <nav className="bg-card shadow-sm fixed top-0 left-0 right-0 z-50 py-3 hidden md:block border-b border-border">
//                 <div className="container mx-auto px-4">
//                     <div className="flex items-center justify-between">
//                         {/* Logo */}
//                         <div className="flex items-center">
//                             <a href="/feed" className="flex items-center">
//                                 <Image
//                                     src={logo}
//                                     alt="Logo"
//                                     className="h-10"
//                                 />
//                             </a>
//                         </div>

//                         {/* Search Bar - Desktop */}
//                         <div className="flex flex-1 max-w-md mx-8">
//                             <div className="relative w-full">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <svg className="w-5 h-5 text-foreground-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <circle cx="11" cy="11" r="8" stroke="currentColor" />
//                                         <path stroke="currentColor" strokeLinecap="round" d="m21 21-4.35-4.35" />
//                                     </svg>
//                                 </div>
//                                 <input
//                                     type="search"
//                                     className="bg-background-secondary border border-border rounded-full px-10 py-2 w-full transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-foreground-muted"
//                                     placeholder="Search..."
//                                 />
//                             </div>
//                         </div>

//                         {/* Navigation Icons */}
//                         <div className="flex items-center space-x-2 md:space-x-6">
//                             {navItems.map((item) => (
//                                 <div key={item.id} className="relative">
//                                     {item.id === 'notifications' ? (
//                                         <button
//                                             onClick={() => {
//                                                 setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
//                                                 handleNavClick(item.id);
//                                             }}
//                                             className={`flex flex-col items-center p-2 transition-all duration-200 ${isActive(item.id)
//                                                 ? 'text-primary'
//                                                 : 'text-foreground-muted hover:text-primary'
//                                                 }`}
//                                         >
//                                             <div className="relative">
//                                                 {item.icon}
//                                                 {hasBadge(item.id) && (
//                                                     <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                                                         {getBadgeCount(item.id)}
//                                                     </span>
//                                                 )}
//                                             </div>
//                                         </button>
//                                     ) : (
//                                         <a
//                                             href={item.href}
//                                             onClick={() => handleNavClick(item.id)}
//                                             className={`flex flex-col items-center p-2 transition-all duration-200 ${isActive(item.id)
//                                                 ? 'text-primary'
//                                                 : 'text-foreground-muted hover:text-primary'
//                                                 }`}
//                                         >
//                                             <div className="relative">
//                                                 {item.icon}
//                                                 {hasBadge(item.id) && (
//                                                     <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                                                         {getBadgeCount(item.id)}
//                                                     </span>
//                                                 )}
//                                             </div>
//                                         </a>
//                                     )}
//                                 </div>
//                             ))}

//                             {/* Profile Dropdown */}
//                             <div className="relative">
//                                 <button
//                                     onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
//                                     className="flex items-center space-x-2 p-2 rounded-lg hover:bg-background-secondary transition-colors"
//                                 >
//                                     <img
//                                         src={user?.image}
//                                         alt="Profile"
//                                         className="w-8 h-8 rounded-full"
//                                     />
//                                     <span className="text-foreground hidden md:block text-sm font-medium">Dylan Field</span>
//                                     <svg className="w-4 h-4 text-foreground-muted" fill="currentColor" viewBox="0 0 20 20">
//                                         <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                                     </svg>
//                                 </button>

//                                 {/* Profile Dropdown Menu */}
//                                 {isProfileDropdownOpen && (
//                                     <div className="absolute right-0 mt-2 w-64 bg-card rounded-lg shadow-xl z-50 border border-border">
//                                         <div className="p-4">
//                                             <div className="flex items-center space-x-3">
//                                                 <img
//                                                     src={user?.image}
//                                                     alt="Profile"
//                                                     className="w-12 h-12 rounded-full"
//                                                 />
//                                                 <div>
//                                                     <h4 className="font-semibold text-foreground">{user?.firstName}</h4>
//                                                     <a href="/profile" className="text-primary text-sm hover:underline">View Profile</a>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         <div className="p-2">
//                                             <a href="/settings" className="flex items-center justify-between px-3 py-2 text-foreground hover:text-primary hover:bg-background-secondary rounded-lg transition-colors">
//                                                 <div className="flex items-center space-x-3">
//                                                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                                                     </svg>
//                                                     <span className="text-sm">Settings</span>
//                                                 </div>
//                                                 <span className="text-foreground-muted">›</span>
//                                             </a>

//                                             <a href="/help" className="flex items-center justify-between px-3 py-2 text-foreground hover:text-primary hover:bg-background-secondary rounded-lg transition-colors">
//                                                 <div className="flex items-center space-x-3">
//                                                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                                     </svg>
//                                                     <span className="text-sm">Help & Support</span>
//                                                 </div>
//                                                 <span className="text-foreground-muted">›</span>
//                                             </a>

//                                             <a href="/login" className="flex items-center justify-between px-3 py-2 text-foreground hover:text-primary hover:bg-background-secondary rounded-lg transition-colors">
//                                                 <div className="flex items-center space-x-3">
//                                                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
//                                                     </svg>
//                                                     <span className="text-sm">Log Out</span>
//                                                 </div>
//                                                 <span className="text-foreground-muted">›</span>
//                                             </a>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             {/* Bottom Navigation for Mobile */}
//             <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-40 md:hidden">
//                 <div className="flex items-center justify-around py-3">
//                     {navItems.map((item) => (
//                         <div key={item.id} className="relative">
//                             {item.id === 'notifications' ? (
//                                 <button
//                                     onClick={() => {
//                                         setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
//                                         handleNavClick(item.id);
//                                     }}
//                                     className={`flex flex-col items-center p-2 transition-all duration-200 ${isActive(item.id)
//                                         ? 'text-primary'
//                                         : 'text-foreground-muted hover:text-primary'
//                                         }`}
//                                 >
//                                     <div className="relative">
//                                         {item.icon}
//                                         {hasBadge(item.id) && (
//                                             <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                                                 {getBadgeCount(item.id)}
//                                             </span>
//                                         )}
//                                     </div>
//                                 </button>
//                             ) : (
//                                 <a
//                                     href={item.href}
//                                     onClick={() => handleNavClick(item.id)}
//                                     className={`flex flex-col items-center p-2 transition-all duration-200 ${isActive(item.id)
//                                         ? 'text-primary'
//                                         : 'text-foreground-muted hover:text-primary'
//                                         }`}
//                                 >
//                                     <div className="relative">
//                                         {item.icon}
//                                         {hasBadge(item.id) && (
//                                             <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                                                 {getBadgeCount(item.id)}
//                                             </span>
//                                         )}
//                                     </div>
//                                 </a>
//                             )}
//                         </div>
//                     ))}

//                     {/* Hamburger Menu */}
//                     <button
//                         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                         className={`flex flex-col items-center p-2 transition-all duration-200 ${isMobileMenuOpen
//                             ? 'text-primary'
//                             : 'text-foreground-muted hover:text-primary'
//                             }`}
//                     >
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu Dropdown */}
//             {isMobileMenuOpen && (
//                 <div className="fixed bottom-16 left-0 right-0 bg-card border-t border-border z-40 md:hidden">
//                     <div className="p-4 space-y-3">
//                         <a href="/profile" className="flex items-center space-x-3 p-2 text-foreground hover:text-primary hover:bg-background-secondary rounded-lg transition-colors">
//                             <Image
//                                 src={profile}
//                                 alt="Profile"
//                                 className="w-8 h-8 rounded-full"
//                             />
//                             <span>My Profile</span>
//                         </a>
//                         <a href="/settings" className="flex items-center space-x-3 p-2 text-foreground hover:text-primary hover:bg-background-secondary rounded-lg transition-colors">
//                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                             </svg>
//                             <span>Settings</span>
//                         </a>
//                         <a href="/help" className="flex items-center space-x-3 p-2 text-foreground hover:text-primary hover:bg-background-secondary rounded-lg transition-colors">
//                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                             </svg>
//                             <span>Help & Support</span>
//                         </a>
//                         <a href="/login" className="flex items-center space-x-3 p-2 text-foreground hover:text-primary hover:bg-background-secondary rounded-lg transition-colors">
//                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
//                             </svg>
//                             <span>Log Out</span>
//                         </a>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Navbar;



















'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/logo.svg'
import { FiHome } from 'react-icons/fi';

import profile from '../../../public/card_ppl1.png'
import { useAuth } from '@/utils/AuthProvider';

const Navbar: React.FC = () => {
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeNav, setActiveNav] = useState('home');

    const { user } = useAuth();

    const navItems = [
        { id: 'home', icon: <FiHome className='h-6 w-6' />, href: '/home', label: 'Home' },
        {
            id: 'friends',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 26 20">
                    <path fill="currentColor" fillRule="evenodd" d="M12.79 12.15h.429c2.268.015 7.45.243 7.45 3.732 0 3.466-5.002 3.692-7.415 3.707h-.894c-2.268-.015-7.452-.243-7.452-3.727 0-3.47 5.184-3.697 7.452-3.711l.297-.001h.132zm0 1.75c-2.792 0-6.12.34-6.12 1.962 0 1.585 3.13 1.955 5.864 1.976l.255.002c2.792 0 6.118-.34 6.118-1.958 0-1.638-3.326-1.982-6.118-1.982zm9.343-2.224c2.846.424 3.444 1.751 3.444 2.79 0 .636-.251 1.794-1.931 2.43a.882.882 0 01-1.137-.506.873.873 0 01.51-1.13c.796-.3.796-.633.796-.793 0-.511-.654-.868-1.944-1.06a.878.878 0 01-.741-.996.886.886 0 011.003-.735zm-17.685.735a.878.878 0 01-.742.997c-1.29.19-1.944.548-1.944 1.059 0 .16 0 .491.798.793a.873.873 0 01-.314 1.693.897.897 0 01-.313-.057C.25 16.259 0 15.1 0 14.466c0-1.037.598-2.366 3.446-2.79.485-.06.929.257 1.002.735zM12.789 0c2.96 0 5.368 2.392 5.368 5.33 0 2.94-2.407 5.331-5.368 5.331h-.031a5.329 5.329 0 01-3.782-1.57 5.253 5.253 0 01-1.553-3.764C7.423 2.392 9.83 0 12.789 0zm0 1.75c-1.987 0-3.604 1.607-3.604 3.58a3.526 3.526 0 001.04 2.527 3.58 3.58 0 002.535 1.054l.03.875v-.875c1.987 0 3.605-1.605 3.605-3.58S14.777 1.75 12.789 1.75z" clipRule="evenodd" />
                </svg>
            ),
            href: '/friends',
            label: 'Friends'
        },
        {
            id: 'notifications',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 22">
                    <path fill="currentColor" fillRule="evenodd" d="M7.547 19.55c.533.59 1.218.915 1.93.915.714 0 1.403-.324 1.938-.916a.777.777 0 011.09-.056c.318.284.344.77.058 1.084-.832.917-1.927 1.423-3.086 1.423h-.002c-1.155-.001-2.248-.506-3.077-1.424a.762.762 0 01.057-1.083.774.774 0 011.092.057zM9.527 0c4.58 0 7.657 3.543 7.657 6.85 0 1.702.436 2.424.899 3.19.457.754.976 1.612.976 3.233-.36 4.14-4.713 4.478-9.531 4.478-4.818 0-9.172-.337-9.528-4.413-.003-1.686.515-2.544.973-3.299l.161-.27c.398-.679.737-1.417.737-2.918C1.871 3.543 4.948 0 9.528 0zm0 1.535c-3.6 0-6.11 2.802-6.11 5.316 0 2.127-.595 3.11-1.12 3.978-.422.697-.755 1.247-.755 2.444.173 1.93 1.455 2.944 7.986 2.944 6.494 0 7.817-1.06 7.988-3.01-.003-1.13-.336-1.681-.757-2.378-.526-.868-1.12-1.851-1.12-3.978 0-2.514-2.51-5.316-6.111-5.316z" clipRule="evenodd" />
                </svg>
            ),
            href: '/notifications',
            label: 'Notifications'
        },
        {
            id: 'messages',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 23 22">
                    <path fill="currentColor" fillRule="evenodd" d="M11.43 0c2.96 0 5.743 1.143 7.833 3.22 4.32 4.29 4.32 11.271 0 15.562C17.145 20.886 14.293 22 11.405 22c-1.575 0-3.16-.33-4.643-1.012-.437-.174-.847-.338-1.14-.338-.338.002-.793.158-1.232.308-.9.307-2.022.69-2.852-.131-.826-.822-.445-1.932-.138-2.826.152-.44.307-.895.307-1.239 0-.282-.137-.642-.347-1.161C-.57 11.46.322 6.47 3.596 3.22A11.04 11.04 0 0111.43 0zm0 1.535A9.5 9.5 0 004.69 4.307a9.463 9.463 0 00-1.91 10.686c.241.592.474 1.17.474 1.77 0 .598-.207 1.201-.39 1.733-.15.439-.378 1.1-.231 1.245.143.147.813-.085 1.255-.235.53-.18 1.133-.387 1.73-.391.597 0 1.161.225 1.758.463 3.655 1.679 7.98.915 10.796-1.881 3.716-3.693 3.716-9.7 0-13.391a9.5 9.5 0 00-6.74-2.77z" clipRule="evenodd" />
                </svg>
            ),
            href: '/messages',
            label: 'Messages'
        },
    ];

    const handleNavClick = (navId: string) => {
        setActiveNav(navId);
    };

    const isActive = (navId: string) => activeNav === navId;

    const hasBadge = (itemId: string) => {
        return itemId === 'notifications' || itemId === 'messages';
    };

    const getBadgeCount = (itemId: string) => {
        if (itemId === 'notifications') return '6';
        if (itemId === 'messages') return '2';
        return '';
    };

    // Helper function to get user display name
    const getUserDisplayName = () => {
        if (!user) return 'Guest';
        
        if (user.firstName && user.lastName) {
            return `${user.firstName} ${user.lastName}`;
        }
        if (user.name) {
            return user.name;
        }
        if (user.firstName) {
            return user.firstName;
        }
        return user.email?.split('@')[0] || 'User';
    };

    // Helper function to get user image source - always returns a valid image source
    const getUserImageSrc = () => {
        // If user has an image and it's a string, use it
        if (user?.image && typeof user.image === 'string') {
            return user.image;
        }
        // Otherwise use the default profile image
        return profile;
    };

    return (
        <>
            {/* Top Navbar for Mobile */}
            <nav className="bg-card shadow-sm fixed top-0 left-0 right-0 z-50 py-3 md:hidden">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center">
                            <a href="/feed" className="flex items-center">
                                <Image
                                    src={logo}
                                    alt="Logo"
                                    className="h-8"
                                />
                            </a>
                        </div>

                        {/* Search Icon for Mobile */}
                        <button className="text-foreground-muted p-2 hover:text-primary transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <circle cx="11" cy="11" r="8" stroke="currentColor" />
                                <path stroke="currentColor" strokeLinecap="round" d="m21 21-4.35-4.35" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Desktop Navbar */}
            <nav className="bg-card shadow-sm fixed top-0 left-0 right-0 z-50 py-3 hidden md:block">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center">
                            <a href="/feed" className="flex items-center">
                                <Image
                                    src={logo}
                                    alt="Logo"
                                    className="h-10"
                                />
                            </a>
                        </div>

                        {/* Search Bar - Desktop */}
                        <div className="flex flex-1 max-w-md mx-8">
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-foreground-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <circle cx="11" cy="11" r="8" stroke="currentColor" />
                                        <path stroke="currentColor" strokeLinecap="round" d="m21 21-4.35-4.35" />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    className="bg-input border rounded-full px-10 py-2 w-full transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-foreground-muted"
                                    placeholder="Search..."
                                />
                            </div>
                        </div>

                        {/* Navigation Icons */}
                        <div className="flex items-center space-x-2 md:space-x-6">
                            {navItems.map((item) => (
                                <div key={item.id} className="relative">
                                    {item.id === 'notifications' ? (
                                        <button
                                            onClick={() => {
                                                setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
                                                handleNavClick(item.id);
                                            }}
                                            className={`flex flex-col items-center p-2 transition-all duration-200 ${isActive(item.id)
                                                ? 'text-primary'
                                                : 'text-foreground-muted hover:text-primary'
                                                }`}
                                        >
                                            <div className="relative">
                                                {item.icon}
                                                {hasBadge(item.id) && (
                                                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                                        {getBadgeCount(item.id)}
                                                    </span>
                                                )}
                                            </div>
                                        </button>
                                    ) : (
                                        <a
                                            href={item.href}
                                            onClick={() => handleNavClick(item.id)}
                                            className={`flex flex-col items-center p-2 transition-all duration-200 ${isActive(item.id)
                                                ? 'text-primary'
                                                : 'text-foreground-muted hover:text-primary'
                                                }`}
                                        >
                                            <div className="relative">
                                                {item.icon}
                                                {hasBadge(item.id) && (
                                                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                                        {getBadgeCount(item.id)}
                                                    </span>
                                                )}
                                            </div>
                                        </a>
                                    )}
                                </div>
                            ))}

                            {/* Profile Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-background-secondary transition-colors"
                                >
                                    <Image
                                        src={getUserImageSrc()}
                                        alt="Profile"
                                        width={32}
                                        height={32}
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <span className="text-foreground hidden md:block text-sm font-medium">
                                        {getUserDisplayName()}
                                    </span>
                                    <svg className="w-4 h-4 text-foreground-muted" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>

                                {/* Profile Dropdown Menu */}
                                {isProfileDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-input rounded-lg shadow-xl z-50 border">
                                        <div className="p-4">
                                            <div className="flex items-center space-x-3">
                                                <Image
                                                    src={getUserImageSrc()}
                                                    alt="Profile"
                                                    width={48}
                                                    height={48}
                                                    className="w-12 h-12 rounded-full"
                                                />
                                                <div>
                                                    <h4 className="font-semibold text-foreground">{getUserDisplayName()}</h4>
                                                    <a href="/profile" className="text-primary text-sm hover:underline">View Profile</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-2">
                                            <a href="/settings" className="flex items-center justify-between px-3 py-2 text-foreground hover:text-primary hover:bg-background-secondary rounded-lg transition-colors">
                                                <div className="flex items-center space-x-3">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <span className="text-sm">Settings</span>
                                                </div>
                                                <span className="text-foreground-muted">›</span>
                                            </a>

                                            <a href="/help" className="flex items-center justify-between px-3 py-2 text-foreground hover:text-primary hover:bg-background-secondary rounded-lg transition-colors">
                                                <div className="flex items-center space-x-3">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="text-sm">Help & Support</span>
                                                </div>
                                                <span className="text-foreground-muted">›</span>
                                            </a>

                                            <a href="/login" className="flex items-center justify-between px-3 py-2 text-foreground hover:text-primary hover:bg-background-secondary rounded-lg transition-colors">
                                                <div className="flex items-center space-x-3">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                    </svg>
                                                    <span className="text-sm">Log Out</span>
                                                </div>
                                                <span className="text-foreground-muted">›</span>
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Bottom Navigation for Mobile */}
            <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-40 md:hidden">
                <div className="flex items-center justify-around py-3">
                    {navItems.map((item) => (
                        <div key={item.id} className="relative">
                            {item.id === 'notifications' ? (
                                <button
                                    onClick={() => {
                                        setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
                                        handleNavClick(item.id);
                                    }}
                                    className={`flex flex-col items-center p-2 transition-all duration-200 ${isActive(item.id)
                                        ? 'text-primary'
                                        : 'text-foreground-muted hover:text-primary'
                                        }`}
                                >
                                    <div className="relative">
                                        {item.icon}
                                        {hasBadge(item.id) && (
                                            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                                {getBadgeCount(item.id)}
                                            </span>
                                        )}
                                    </div>
                                </button>
                            ) : (
                                <a
                                    href={item.href}
                                    onClick={() => handleNavClick(item.id)}
                                    className={`flex flex-col items-center p-2 transition-all duration-200 ${isActive(item.id)
                                        ? 'text-primary'
                                        : 'text-foreground-muted hover:text-primary'
                                        }`}
                                >
                                    <div className="relative">
                                        {item.icon}
                                        {hasBadge(item.id) && (
                                            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                                {getBadgeCount(item.id)}
                                            </span>
                                        )}
                                    </div>
                                </a>
                            )}
                        </div>
                    ))}

                    {/* Hamburger Menu */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`flex flex-col items-center p-2 transition-all duration-200 ${isMobileMenuOpen
                            ? 'text-primary'
                            : 'text-foreground-muted hover:text-primary'
                            }`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="fixed bottom-16 left-0 right-0 bg-card border-t border-border z-40 md:hidden">
                    <div className="p-4 space-y-3">
                        <a href="/profile" className="flex items-center space-x-3 p-2 text-foreground hover:text-primary hover:bg-background-secondary rounded-lg transition-colors">
                            <Image
                                src={getUserImageSrc()}
                                alt="Profile"
                                width={32}
                                height={32}
                                className="w-8 h-8 rounded-full"
                            />
                            <span>My Profile</span>
                        </a>
                        <a href="/settings" className="flex items-center space-x-3 p-2 text-foreground hover:text-primary hover:bg-background-secondary rounded-lg transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>Settings</span>
                        </a>
                        <a href="/help" className="flex items-center space-x-3 p-2 text-foreground hover:text-primary hover:bg-background-secondary rounded-lg transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Help & Support</span>
                        </a>
                        <a href="/login" className="flex items-center space-x-3 p-2 text-foreground hover:text-primary hover:bg-background-secondary rounded-lg transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            <span>Log Out</span>
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;