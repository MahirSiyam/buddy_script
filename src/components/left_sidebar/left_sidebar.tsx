// // components/layout/LeftSidebar.tsx
// import React from 'react';
// import { AiOutlinePlayCircle } from 'react-icons/ai';
// import { BiGroup } from 'react-icons/bi';
// import { CiBookmarkMinus } from 'react-icons/ci';
// import { FiSave } from 'react-icons/fi';
// import { IoSettingsOutline } from 'react-icons/io5';
// import { MdOutlineInsertChartOutlined, MdOutlinePersonAddAlt1 } from 'react-icons/md';
// import { VscGame } from 'react-icons/vsc';

// import Image from 'next/image';
// import people1 from '../../../public/people1.png'
// import people2 from '../../../public/people2.png'
// import people3 from '../../../public/people3.png'
// import feed_event1 from '../../../public/feed_event1.png'

// const LeftSidebar: React.FC = () => {
//   const exploreItems = [
//     { name: 'Learning', icon: <AiOutlinePlayCircle />, hasNew: true },
//     { name: 'Insights', icon: <MdOutlineInsertChartOutlined />, hasNew: false },
//     { name: 'Find friends', icon: <MdOutlinePersonAddAlt1 />, hasNew: false },
//     { name: 'Bookmarks', icon: <CiBookmarkMinus />, hasNew: false },
//     { name: 'Group', icon: <BiGroup />, hasNew: false },
//     { name: 'Gaming', icon: <VscGame />, hasNew: true },
//     { name: 'Settings', icon: <IoSettingsOutline />, hasNew: false },
//     { name: 'Save post', icon: <FiSave />, hasNew: false },
//   ];

//   const suggestedPeople = [
//     { name: 'Steve Jobs', role: 'CEO of Apple', avatar: people1 },
//     { name: 'Ryan Roslansky', role: 'CEO of Linkedin', avatar: people2 },
//     { name: 'Dylan Field', role: 'CEO of Figma', avatar: people3 },
//   ];

//   const events = [
//     { date: '10 Jul', title: 'No more terrorism no more cry', attendees: 17 },
//     { date: '15 Jul', title: 'Tech Innovation Summit', attendees: 45 },
//   ];

//   return (
//     <div className="space-y-4">
//       {/* Explore Section */}

//       <div className="bg-white rounded-lg p-6 shadow-sm">
//         <h3 className="font-semibold text-gray-900 text-lg mb-4">Explore</h3>
//         <div className="space-y-3">
//           {exploreItems.map((item, index) => (
//             <a
//               key={index}
//               href="#"
//               className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors group"
//             >
//               <div className="flex items-center space-x-3">
//                 <span className="text-xl text-gray-500">{item.icon}</span>
//                 <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
//                   {item.name}
//                 </span>
//               </div>
//               {item.hasNew && (
//                 <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-lg">
//                   New
//                 </span>
//               )}
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* Suggested People */}
//       <div className="bg-white rounded-lg p-6 shadow-sm">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="font-semibold text-gray-900 text-lg">Suggested People</h3>
//           <a href="#" className="text-[#1890ff] text-sm hover:cursor">See All</a>
//         </div>
//         <div className="space-y-4">
//           {suggestedPeople.map((person, index) => (
//             <div key={index} className="flex items-center justify-between">
//               <div className="flex items-center space-x-3">
        
//                 <Image
//                     src={person.avatar}
//                     alt={person.name}
//                     width={35}
//                     height={35}
//                     className="rounded-full"
//                 />
//                 <div>
//                   <h4 className="font-medium text-gray-900 text-sm">{person.name}</h4>
//                   <p className="text-gray-600 text-xs">{person.role}</p>
//                 </div>
//               </div>
//               <button className=" border-gray-200 text-gray-400 border-1 font-medium px-3 py-2 rounded text-xs hover:bg-[#1890ff] hover:text-white transition-colors">
//                 Connect
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Events Section */}
//       <div className="bg-white rounded-lg p-6 shadow-sm">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="font-semibold text-gray-900 text-lg">Events</h3>
//           <a href="/events" className="text-[#1890ff] text-sm hover:cursor">See All</a>
//         </div>
//         <div className="space-y-4">
//           {events.map((event, index) => (
//             <a key={index} href="/event-single" className="block group">
//               <div className="bg-gray-50 rounded-lg overflow-hidden group-hover:shadow-md transition-shadow">
//                 {/* <img
//                   src="/assets/images/feed_event1.png"
//                   alt={event.title}
//                   className="w-full h-32 object-cover"
//                 /> */}

//                     <Image
//                     src={feed_event1}
//                     alt={event.title}
//                     width={0}
//                     height={0}
//                     className="object-cover w-full h-32"
//                 />

//                 <div className="p-3">
//                   <div className="flex items-start space-x-3">
//                     <div className="bg-[#0acf83] text-white font-medium rounded-lg p-2 text-center min-w-12">
//                       <div className="font-bold text-sm">{event.date.split(' ')[0]}</div>
//                       <div className="text-xs">{event.date.split(' ')[1]}</div>
//                     </div>
//                     <div className="flex-1">
//                       <h4 className="font-medium text-gray-900 text-sm line-clamp-2">
//                         {event.title}
//                       </h4>
//                     </div>
//                   </div>
//                   <div className="flex justify-between items-center mt-3">
//                     <span className="text-gray-600 text-xs">
//                       {event.attendees} People Going
//                     </span>
//                     <button className="border-1 border-blue-600 text-blue-600 px-3 py-1 rounded text-xs hover:bg-blue-100 transition-colors">
//                       Going
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeftSidebar;












// components/layout/LeftSidebar.tsx
import React from 'react';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { BiGroup } from 'react-icons/bi';
import { CiBookmarkMinus } from 'react-icons/ci';
import { FiSave } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineInsertChartOutlined, MdOutlinePersonAddAlt1 } from 'react-icons/md';
import { VscGame } from 'react-icons/vsc';

import Image from 'next/image';
import people1 from '../../../public/people1.png'
import people2 from '../../../public/people2.png'
import people3 from '../../../public/people3.png'
import feed_event1 from '../../../public/feed_event1.png'

const LeftSidebar: React.FC = () => {
  const exploreItems = [
    { name: 'Learning', icon: <AiOutlinePlayCircle />, hasNew: true },
    { name: 'Insights', icon: <MdOutlineInsertChartOutlined />, hasNew: false },
    { name: 'Find friends', icon: <MdOutlinePersonAddAlt1 />, hasNew: false },
    { name: 'Bookmarks', icon: <CiBookmarkMinus />, hasNew: false },
    { name: 'Group', icon: <BiGroup />, hasNew: false },
    { name: 'Gaming', icon: <VscGame />, hasNew: true },
    { name: 'Settings', icon: <IoSettingsOutline />, hasNew: false },
    { name: 'Save post', icon: <FiSave />, hasNew: false },
  ];

  const suggestedPeople = [
    { name: 'Steve Jobs', role: 'CEO of Apple', avatar: people1 },
    { name: 'Ryan Roslansky', role: 'CEO of Linkedin', avatar: people2 },
    { name: 'Dylan Field', role: 'CEO of Figma', avatar: people3 },
  ];

  const events = [
    { date: '10 Jul', title: 'No more terrorism no more cry', attendees: 17 },
    { date: '15 Jul', title: 'Tech Innovation Summit', attendees: 45 },
  ];

  return (
    <div className="space-y-4">
      {/* Explore Section */}
      <div className="bg-card rounded-md p-6 shadow-sm">
        <h3 className="font-semibold text-foreground text-lg mb-4">Explore</h3>
        <div className="space-y-3">
          {exploreItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center justify-between p-2 rounded-lg hover:bg-background-secondary transition-colors group"
            >
              <div className="flex items-center space-x-3">
                <span className="text-xl text-foreground-muted group-hover:text-primary transition-colors">
                  {item.icon}
                </span>
                <span className="text-foreground group-hover:text-primary transition-colors">
                  {item.name}
                </span>
              </div>
              {item.hasNew && (
                <span className="bg-success text-primary-foreground text-xs px-2 py-1 rounded-lg">
                  New
                </span>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Suggested People */}
      <div className="bg-card rounded-md p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-foreground text-lg">Suggested People</h3>
          <a href="#" className="text-primary text-sm">See All</a>
        </div>
        <div className="space-y-4">
          {suggestedPeople.map((person, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Image
                  src={person.avatar}
                  alt={person.name}
                  width={35}
                  height={35}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-medium text-foreground text-sm">{person.name}</h4>
                  <p className="text-foreground-muted text-xs">{person.role}</p>
                </div>
              </div>
              <button className="border border-border text-foreground-muted font-medium px-3 py-2 rounded text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Events Section */}
      <div className="bg-card rounded-sm p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-foreground text-lg">Events</h3>
          <a href="/events" className="text-primary text-sm">See All</a>
        </div>
        <div className="space-y-4">
          {events.map((event, index) => (
            <a key={index} href="/event-single" className="block group">
              <div className="bg-background-secondary rounded-sm overflow-hidden group-hover:shadow-md transition-shadow">
                <Image
                  src={feed_event1}
                  alt={event.title}
                  width={0}
                  height={0}
                  className="object-cover w-full h-32"
                />
                <div className="p-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-success text-primary-foreground font-medium rounded-lg p-2 text-center min-w-12">
                      <div className="font-bold text-sm">{event.date.split(' ')[0]}</div>
                      <div className="text-xs">{event.date.split(' ')[1]}</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground text-sm line-clamp-2">
                        {event.title}
                      </h4>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-foreground-muted text-xs">
                      {event.attendees} People Going
                    </span>
                    <button className="border border-primary text-primary px-3 py-1 rounded text-xs hover:bg-primary/10 transition-colors">
                      Going
                    </button>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;