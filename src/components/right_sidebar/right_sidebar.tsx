// 'use client'
// import React, { useState } from 'react';
// import Image from 'next/image';
// import avater from '../../../public/Avatar.png'
// import pic1 from '../../../public/chat1_img.png'
// import pic2 from '../../../public/chat2_img.png'
// import pic3 from '../../../public/chat3_img.png'
// import pic4 from '../../../public/chat4_img.png'
// import pic5 from '../../../public/chat5_img.png'
// import pic6 from '../../../public/chat6_img.png'
// import pic7 from '../../../public/chat7_img.png'
// import pic8 from '../../../public/mobile_story_img.png'

// const RightSidebar: React.FC = () => {
//     const [searchQuery, setSearchQuery] = useState('');

//     const suggestedPeople = [
//         {
//             name: 'Radovan SkillArena',
//             role: 'Founder & CEO at Trophy',
//             avatar: avater,
//             online: false
//         },
//         // Add more people as needed
//     ];

//     const friends = [
//         {
//             name: 'Steve Jobs',
//             role: 'CEO of Apple',
//             avatar: pic1,
//             online: false,
//             lastSeen: '5m ago'
//         },
//         {
//             name: 'Ryan Roslansky',
//             role: 'CEO of Linkedin',
//             avatar: pic2,
//             online: true,
//             lastSeen: ''
//         },
//         {
//             name: 'Dylan Field',
//             role: 'CEO of Figma',
//             avatar: pic3,
//             online: true,
//             lastSeen: ''
//         },
//         {
//             name: 'Mark Zuckerberg',
//             role: 'CEO of Meta',
//             avatar: pic4,
//             online: false,
//             lastSeen: '5m ago'
//         },
//         {
//             name: 'Sundar Pichai',
//             role: 'CEO of Google',
//             avatar: pic5,
//             online: true,
//             lastSeen: ''
//         },
//         {
//             name: 'Satya Nadella',
//             role: 'CEO of Microsoft',
//             avatar: pic6,
//             online: true,
//             lastSeen: ''
//         },
//         {
//             name: 'Elon Musk',
//             role: 'CEO of Tesla',
//             avatar: pic7,
//             online: true,
//             lastSeen: ''
//         },
//         {
//             name: 'Tim Cook',
//             role: 'CEO of Apple',
//             avatar: pic8,
//             online: false,
//             lastSeen: '5m ago'
//         },
//     ];

//     const filteredFriends = friends.filter(friend =>
//         friend.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         friend.role.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     return (
//         <div className="space-y-4">
//             {/* You Might Like Section */}
//             <div className="bg-white rounded-lg p-4 shadow-sm">
//                 <div className="flex justify-between items-center mb-4">
//                     <h3 className="font-semibold text-gray-900 text-lg">You Might Like</h3>
//                     <a href="#" className="text-[#1890ff] text-sm hover:cursor">See All</a>
//                 </div>

//                 <div className="space-y-4">
//                     {suggestedPeople.map((person, index) => (
//                         <div key={index} className="p-3 rounded-lg transition-colors">
//                             <div className="flex items-center space-x-3">
//                                 <Image
//                                     src={person.avatar}
//                                     alt={person.name}
//                                     width={40}
//                                     height={40}
//                                     className="rounded-full"
//                                 />
//                                 <div>
//                                     <h4 className="font-medium text-gray-900 text-sm">{person.name}</h4>
//                                     <p className="text-gray-600 text-xs">{person.role}</p>
//                                 </div>
//                             </div>
//                             <div className="flex justify-evenly mt-4">
//                                 <button className="bg-gray-100 text-gray-700 px-8 py-1 rounded text-md transition-colors">
//                                     Ignore
//                                 </button>
//                                 <button className="bg-[#1890ff] text-white px-8 py-1 rounded text-md hover:bg-[#188fffdd] transition-colors">
//                                     Follow
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Friends Section */}
//             <div className="bg-white rounded-lg p-4 shadow-sm">
//                 <div className="flex justify-between items-center mb-4">
//                     <h3 className="font-semibold text-gray-900 text-lg">Your Friends</h3>
//                     <a href="/find-friends" className="text-[#1890ff] text-sm hover:cursor">See All</a>
//                 </div>

//                 {/* Search Bar */}
//                 <div className="relative mb-4">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
//                             <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" d="m21 21-4.35-4.35" />
//                         </svg>
//                     </div>
//                     <input
//                         type="text"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         placeholder="Search friends..."
//                         className="w-full bg-gray-100 border border-gray-100 rounded-full px-4 pl-10 py-2 text-sm transition-all duration-200 focus:border-blue-500 focus:outline-none"
//                     />
//                 </div>

//                 {/* Friends List with invisible scrollbar */}
//                 <div className="space-y-3 max-h-full overflow-y-auto 
//                     [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
//                     {filteredFriends.map((friend, index) => (
//                         <div
//                             key={index}
//                             className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors group"
//                         >
//                             <div className="flex items-center space-x-3">
//                                 <div className="relative">
//                                     <Image
//                                         src={friend.avatar}
//                                         alt={friend.name}
//                                         width={40}
//                                         height={40}
//                                         className="rounded-full"
//                                     />
//                                 </div>
//                                 <div>
//                                     <h4 className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
//                                         {friend.name}
//                                     </h4>
//                                     <p className="text-gray-600 text-xs">{friend.role}</p>
//                                 </div>
//                             </div>
//                             <div className="text-right">
//                                 {friend.online ? (
//                                     <div className="flex items-center space-x-1">
//                                         <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                                     </div>
//                                 ) : (
//                                     <span className="text-gray-500 text-xs">{friend.lastSeen}</span>
//                                 )}
//                             </div>
//                         </div>
//                     ))}

//                     {filteredFriends.length === 0 && (
//                         <div className="text-center py-4">
//                             <p className="text-gray-500 text-sm">No friends found</p>
//                         </div>
//                     )}
//                 </div>
//             </div>


//         </div>
//     );
// };

// export default RightSidebar;


















'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import avater from '../../../public/Avatar.png'
import pic1 from '../../../public/chat1_img.png'
import pic2 from '../../../public/chat2_img.png'
import pic3 from '../../../public/chat3_img.png'
import pic4 from '../../../public/chat4_img.png'
import pic5 from '../../../public/chat5_img.png'
import pic6 from '../../../public/chat6_img.png'
import pic7 from '../../../public/chat7_img.png'
import pic8 from '../../../public/mobile_story_img.png'

const RightSidebar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const suggestedPeople = [
        {
            name: 'Radovan SkillArena',
            role: 'Founder & CEO at Trophy',
            avatar: avater,
            online: false
        },
        // Add more people as needed
    ];

    const friends = [
        {
            name: 'Steve Jobs',
            role: 'CEO of Apple',
            avatar: pic1,
            online: false,
            lastSeen: '5m ago'
        },
        {
            name: 'Ryan Roslansky',
            role: 'CEO of Linkedin',
            avatar: pic2,
            online: true,
            lastSeen: ''
        },
        {
            name: 'Dylan Field',
            role: 'CEO of Figma',
            avatar: pic3,
            online: true,
            lastSeen: ''
        },
        {
            name: 'Mark Zuckerberg',
            role: 'CEO of Meta',
            avatar: pic4,
            online: false,
            lastSeen: '5m ago'
        },
        {
            name: 'Sundar Pichai',
            role: 'CEO of Google',
            avatar: pic5,
            online: true,
            lastSeen: ''
        },
        {
            name: 'Satya Nadella',
            role: 'CEO of Microsoft',
            avatar: pic6,
            online: true,
            lastSeen: ''
        },
        {
            name: 'Elon Musk',
            role: 'CEO of Tesla',
            avatar: pic7,
            online: true,
            lastSeen: ''
        },
        {
            name: 'Tim Cook',
            role: 'CEO of Apple',
            avatar: pic8,
            online: false,
            lastSeen: '5m ago'
        },
    ];

    const filteredFriends = friends.filter(friend =>
        friend.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        friend.role.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-4">
            {/* You Might Like Section */}
            <div className="bg-card rounded-sm p-4 shadow-sm">
                <div className='border-b-1 border-b-white dark:border-b-gray-700 mb-3'>
                    <div className="flex justify-between items-center mb-6">
                    <h3 className="font-semibold text-foreground text-lg">You Might Like</h3>
                    <a href="#" className="text-primary text-sm">See All</a>
                </div>
                </div>

                <div className="space-y-4">
                    {suggestedPeople.map((person, index) => (
                        <div key={index} className="p-3 rounded-lg transition-colors">
                            <div className="flex items-center space-x-3">
                                <Image
                                    src={person.avatar}
                                    alt={person.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <div>
                                    <h4 className="font-medium text-foreground text-sm">{person.name}</h4>
                                    <p className="text-foreground-muted text-xs">{person.role}</p>
                                </div>
                            </div>
                            <div className="flex justify-evenly mt-4">
                                <button className="text-foreground-secondary px-8 py-1 rounded text-md transition-colors border border-light-mode">
                                    Ignore
                                </button>
                                <button className="bg-primary text-primary-foreground px-8 py-1 rounded text-md hover:bg-primary-dark transition-colors">
                                    Follow
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Friends Section */}
            <div className="bg-card rounded-sm p-4 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-foreground text-lg">Your Friends</h3>
                    <a href="/find-friends" className="text-primary text-sm">See All</a>
                </div>

                {/* Search Bar */}
                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-foreground-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
                            <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" d="m21 21-4.35-4.35" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search friends..."
                        className="w-full bg-input border rounded-full px-4 pl-10 py-2 text-sm transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-foreground-muted"
                    />
                </div>

                {/* Friends List with invisible scrollbar */}
                <div className="space-y-3 max-h-full overflow-y-auto hide-scrollbar">
                    {filteredFriends.map((friend, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-2 rounded-lg hover:bg-background-secondary transition-colors group"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="relative">
                                    <Image
                                        src={friend.avatar}
                                        alt={friend.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                
                                </div>
                                <div>
                                    <h4 className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                                        {friend.name}
                                    </h4>
                                    <p className="text-foreground-muted text-xs">{friend.role}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                {friend.online ? (
                                    <div className="flex items-center space-x-1">
                                        <div className="w-2 h-2 bg-success rounded-full"></div>
                                       
                                    </div>
                                ) : (
                                    <span className="text-foreground-muted text-xs">{friend.lastSeen}</span>
                                )}
                            </div>
                        </div>
                    ))}

                    {filteredFriends.length === 0 && (
                        <div className="text-center py-4">
                            <p className="text-foreground-muted text-sm">No friends found</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;