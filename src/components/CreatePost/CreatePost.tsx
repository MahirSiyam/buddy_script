// 'use client';

// import React, { useState, useRef, JSX } from 'react';
// import Image from 'next/image';

// import pic1 from '../../../public/recommend1.png';
// import pic2 from '../../../public/recommend2.png';
// import pic3 from '../../../public/recommend3.png';
// import pic4 from '../../../public/recommend4.png';
// import pic5 from '../../../public/card_ppl1.png';
// import pic6 from '../../../public/img1.png';
// import pic7 from '../../../public/img2.png';
// import pic8 from '../../../public/img3.png';

// import profile from '../../../public/card_ppl1.png';

// import { TbPhotoSquareRounded } from 'react-icons/tb';
// import { LuVideo } from 'react-icons/lu';
// import { FaRegCalendarAlt } from 'react-icons/fa';
// import { RiArticleLine } from 'react-icons/ri';
// import { IoPaperPlaneOutline } from 'react-icons/io5';
// import { MdClose } from 'react-icons/md';
// import { useAuth } from '@/utils/AuthProvider';

// interface PostOption {
//     icon: JSX.Element;
//     label: string;
// }

// interface Post {
//     _id: string;
//     userId: string;
//     userFirstName: string;
//     userLastName: string;
//     userImage?: string | null;
//     content: string;
//     images: string[];
//     likes: string[];
//     comments: any[];
//     createdAt: string;
// }

// const defaultPostOptions: PostOption[] = [
//     { icon: <TbPhotoSquareRounded />, label: 'Photo' },
//     { icon: <LuVideo />, label: 'Video' },
//     { icon: <FaRegCalendarAlt />, label: 'Event' },
//     { icon: <RiArticleLine />, label: 'Article' },
// ];

// const CreatePost: React.FC = () => {
//     const [postContent, setPostContent] = useState('');
//     const [selectedImages, setSelectedImages] = useState<File[]>([]);
//     const [imagePreviews, setImagePreviews] = useState<string[]>([]);
//     const [posts, setPosts] = useState<Post[]>([]);
//     const [loading, setLoading] = useState(false);
//     const fileInputRef = useRef<HTMLInputElement>(null);

//     const { user } = useAuth();

//     // Helper function to get user image source
//     const getUserImageSrc = () => {
//         if (user?.image && typeof user.image === 'string') {
//             return user.image;
//         }
//         return profile;
//     };

//     const stories = [
//         { id: 1, name: 'Your Story', avatar: getUserImageSrc(), storyImage: pic1, isYourStory: true },
//         { id: 2, name: 'Ryan Rosiansky', avatar: pic6, storyImage: pic2 },
//         { id: 3, name: 'Ryan Rosiansky', avatar: pic7, storyImage: pic3 },
//         { id: 4, name: 'Ryan Rosiansky', avatar: pic8, storyImage: pic4 },
//         { id: 5, name: 'Ryan Rosiansky', avatar: pic8, storyImage: pic4 },
//         { id: 6, name: 'Ryan Rosiansky', avatar: pic8, storyImage: pic4 },
//         { id: 7, name: 'Ryan Rosiansky', avatar: pic8, storyImage: pic4 },
//         { id: 8, name: 'Ryan Rosiansky', avatar: pic8, storyImage: pic4 },
//     ];

//     // Fetch posts on component mount
//     React.useEffect(() => {
//         fetchPosts();
//     }, []);

//     const fetchPosts = async () => {
//         try {
//             const response = await fetch('/api/posts');
//             const data = await response.json();
//             if (response.ok) {
//                 setPosts(data.posts);
//             }
//         } catch (error) {
//             console.error('Error fetching posts:', error);
//         }
//     };

//     const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const files = e.target.files;
//         if (!files) return;

//         const newFiles = Array.from(files);
//         if (selectedImages.length + newFiles.length > 4) {
//             alert('You can only upload up to 4 images');
//             return;
//         }

//         setSelectedImages(prev => [...prev, ...newFiles]);

//         const newPreviews = newFiles.map(f => URL.createObjectURL(f));
//         setImagePreviews(prev => [...prev, ...newPreviews]);

//         if (fileInputRef.current) fileInputRef.current.value = '';
//     };

//     const removeImage = (index: number) => {
//         setSelectedImages(prev => prev.filter((_, i) => i !== index));
//         setImagePreviews(prev => prev.filter((_, i) => i !== index));
//     };

//     const uploadImages = async (files: File[]): Promise<string[]> => {
//         const uploadedUrls: string[] = [];
        
//         for (const file of files) {
//             const base64 = await convertToBase64(file);
//             uploadedUrls.push(base64);
//         }
        
//         return uploadedUrls;
//     };

//     const convertToBase64 = (file: File): Promise<string> => {
//         return new Promise((resolve, reject) => {
//             const reader = new FileReader();
//             reader.readAsDataURL(file);
//             reader.onload = () => resolve(reader.result as string);
//             reader.onerror = error => reject(error);
//         });
//     };

//     const handlePostSubmit = async () => {
//         if (!postContent.trim() && selectedImages.length === 0) {
//             alert('Please write something or add an image');
//             return;
//         }

//         setLoading(true);
//         try {
//             // Upload images first
//             const imageUrls = await uploadImages(selectedImages);

//             // Create post
//             const response = await fetch('/api/posts', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     content: postContent,
//                     images: imageUrls,
//                 }),
//             });

//             const data = await response.json();

//             if (!response.ok) {
//                 throw new Error(data.error || 'Failed to create post');
//             }

//             // Add new post to the beginning of the posts array (newest first)
//             setPosts(prev => [data.post, ...prev]);

//             // Reset form
//             setPostContent('');
//             setSelectedImages([]);
//             setImagePreviews([]);

//             alert('Post created successfully!');

//         } catch (error) {
//             console.error('Error creating post:', error);
//             alert(error instanceof Error ? error.message : 'Failed to create post');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const formatDate = (dateString: string) => {
//         const date = new Date(dateString);
//         const now = new Date();
//         const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
        
//         if (diffInHours < 1) {
//             return `${Math.floor(diffInHours * 60)}m ago`;
//         } else if (diffInHours < 24) {
//             return `${Math.floor(diffInHours)}h ago`;
//         } else {
//             return date.toLocaleDateString();
//         }
//     };

//     // Check if image is base64 data URL
//     const isBase64Image = (src: string) => {
//         return src.startsWith('data:image');
//     };

//     return (
//         <div className="p-2 md:mt-0">
//             {/* Hidden File Input */}
//             <input
//                 type="file"
//                 ref={fileInputRef}
//                 onChange={handleImageSelect}
//                 accept="image/*"
//                 multiple
//                 className="hidden"
//             />

//             {/* Story Section */}
//             <div className="mb-2">
//                 <div className="flex space-x-3 overflow-x-auto hide-scrollbar">
//                     {stories.map((story) => (
//                         <div key={story.id} className="flex flex-col items-center space-y-1 sm:space-y-2 flex-shrink-0">
//                             {/* Story Container */}
//                             <div className="relative w-16 h-16 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full sm:rounded-sm overflow-hidden cursor-pointer group">
//                                 <Image
//                                     src={story.storyImage}
//                                     alt={story.name}
//                                     width={160}
//                                     height={160}
//                                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent hidden sm:block"></div>
//                                 <div className="absolute top-1 left-1 sm:top-2 sm:left-2 hidden sm:block">
//                                     <div className={`w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full border-2 ${story.isYourStory ? 'border-gray-300 dark:border-gray-500' : 'border-primary'} overflow-hidden`}>
//                                         <Image
//                                             src={story.avatar}
//                                             alt={story.name}
//                                             width={40}
//                                             height={40}
//                                             className="w-full h-full object-cover"
//                                         />
//                                     </div>
//                                 </div>
//                                 {story.isYourStory && (
//                                     <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-primary rounded-full flex items-center justify-center border-2 border-white hidden sm:flex">
//                                         <span className="text-white text-xs font-bold">+</span>
//                                     </div>
//                                 )}
//                                 <div className="absolute bottom-1 sm:bottom-2 left-0 right-0 text-center hidden sm:block">
//                                     <span className="text-white text-xs font-medium px-1 truncate">
//                                         {story.isYourStory ? 'Your Story' : story.name}
//                                     </span>
//                                 </div>
//                                 {story.isYourStory && (
//                                     <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center border-2 border-white sm:hidden">
//                                         <span className="text-white text-xs font-bold">+</span>
//                                     </div>
//                                 )}
//                             </div>
//                             <span className="text-xs text-foreground-muted truncate max-w-[64px] sm:hidden">
//                                 {story.isYourStory ? 'Your Story' : story.name}
//                             </span>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Create Post Area */}
//             <div className="bg-card rounded-sm p-3 sm:p-4 md:p-6 shadow-sm mb-4">
//                 <div className="flex items-start space-x-3 mb-3">
//                     <Image 
//                         src={getUserImageSrc()} 
//                         alt="Profile" 
//                         width={35} 
//                         height={35} 
//                         className="rounded-full" 
//                     />
//                     <div className="flex-1">
//                         <textarea
//                             value={postContent}
//                             onChange={e => setPostContent(e.target.value)}
//                             placeholder="What's on your mind?"
//                             className="w-full rounded-sm p-2 sm:p-3 text-sm resize-none focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary min-h-[120px] bg-input text-foreground placeholder-foreground-muted"
//                             disabled={loading}
//                         />
//                         {imagePreviews.length > 0 && (
//                             <div className="mt-3 grid grid-cols-2 gap-2">
//                                 {imagePreviews.map((preview, index) => (
//                                     <div key={index} className="relative group">
//                                         {/* Use regular img for previews */}
//                                         <img 
//                                             src={preview} 
//                                             alt="Preview" 
//                                             className="w-full h-full rounded-lg object-cover" 
//                                         />
//                                         <button
//                                             onClick={() => removeImage(index)}
//                                             className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg"
//                                             disabled={loading}
//                                         >
//                                             <MdClose size={16} />
//                                         </button>
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 {/* Desktop Options */}
//                 <div className="hidden sm:flex justify-between pt-3">
//                     <div className="flex gap-3">
//                         {defaultPostOptions.map((option, i) => (
//                             <button
//                                 key={i}
//                                 onClick={() => {
//                                     if (option.label === 'Photo') fileInputRef.current?.click();
//                                     else console.log(`${option.label} clicked`);
//                                 }}
//                                 className="flex items-center gap-1 px-3 py-1 rounded-lg hover:bg-background-secondary transition-colors text-foreground-muted hover:text-foreground"
//                                 disabled={loading}
//                             >
//                                 {option.icon}
//                                 <span className="text-sm">{option.label}</span>
//                             </button>
//                         ))}
//                     </div>
//                     <button
//                         onClick={handlePostSubmit}
//                         disabled={(!postContent.trim() && selectedImages.length === 0) || loading}
//                         className={`flex items-center gap-2 px-4 py-1 rounded-lg text-sm transition-colors
//                             ${(postContent.trim() || selectedImages.length > 0) && !loading
//                                 ? 'bg-primary text-primary-foreground hover:bg-primary-dark'
//                                 : 'bg-muted text-muted-foreground cursor-not-allowed'}
//                         `}
//                     >
//                         {loading ? 'Posting...' : (
//                             <>
//                                 <IoPaperPlaneOutline />
//                                 Post
//                             </>
//                         )}
//                     </button>
//                 </div>

//                 {/* Mobile Options */}
//                 <div className="sm:hidden flex justify-between pt-2">
//                     <div className="flex gap-1 flex-1">
//                         {defaultPostOptions.map((option, i) => (
//                             <button
//                                 key={i}
//                                 onClick={() => {
//                                     if (option.label === 'Photo') fileInputRef.current?.click();
//                                     else console.log(`${option.label} clicked`);
//                                 }}
//                                 className="flex items-center justify-center flex-1 p-1 rounded-lg hover:bg-background-secondary transition-colors text-foreground-muted hover:text-foreground"
//                                 disabled={loading}
//                             >
//                                 {option.icon}
//                             </button>
//                         ))}
//                     </div>
//                     <button
//                         onClick={handlePostSubmit}
//                         disabled={(!postContent.trim() && selectedImages.length === 0) || loading}
//                         className={`px-2 py-1 rounded-lg text-xs ml-2 transition-colors
//                             ${(postContent.trim() || selectedImages.length > 0) && !loading
//                                 ? 'bg-primary text-primary-foreground hover:bg-primary-dark'
//                                 : 'bg-muted text-muted-foreground cursor-not-allowed'}
//                         `}
//                     >
//                         {loading ? '...' : 'Post'}
//                     </button>
//                 </div>
//             </div>

//             {/* Display Posts */}
//             <div className="space-y-4">
//                 {posts.map((post) => (
//                     <div key={post._id} className="bg-card rounded-sm p-4 shadow-sm">
//                         {/* Post Header */}
//                         <div className="flex items-center space-x-3 mb-3">
//                             <Image 
//                                 src={post.userImage || profile} 
//                                 alt={`${post.userFirstName} ${post.userLastName}`}
//                                 width={40}
//                                 height={40}
//                                 className="rounded-full"
//                             />
//                             <div>
//                                 <h3 className="font-semibold text-foreground">
//                                     {post.userFirstName} {post.userLastName}
//                                 </h3>
//                                 <p className="text-xs text-foreground-muted">
//                                     {formatDate(post.createdAt)}
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Post Content */}
//                         {post.content && (
//                             <p className="text-foreground mb-3 whitespace-pre-wrap">
//                                 {post.content}
//                             </p>
//                         )}

//                         {/* Post Images */}
//                         {post.images.length > 0 && (
//                             <div className={`grid gap-2 mb-3 ${
//                                 post.images.length === 1 ? 'grid-cols-1' :
//                                 post.images.length === 2 ? 'grid-cols-2' :
//                                 post.images.length === 3 ? 'grid-cols-2' : 'grid-cols-2'
//                             }`}>
//                                 {post.images.map((image, index) => (
//                                     <div key={index} className="relative">
//                                         {/* Use regular img tag for base64 images */}
//                                         {isBase64Image(image) ? (
//                                             <img 
//                                                 src={image} 
//                                                 alt={`Post image ${index + 1}`}
//                                                 className="w-full h-full rounded-lg object-cover"
//                                             />
//                                         ) : (
//                                             <Image 
//                                                 src={image} 
//                                                 alt={`Post image ${index + 1}`}
//                                                 width={400}
//                                                 height={300}
//                                                 className="w-full h-full rounded-lg object-cover"
//                                             />
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                         )}

//                         {/* Post Stats */}
//                         <div className="flex justify-between text-sm text-foreground-muted border-t border-border pt-3">
//                             <span>{post.likes.length} likes</span>
//                             <span>{post.comments.length} comments</span>
//                         </div>

//                         {/* Post Actions */}
//                         <div className="flex justify-between border-t border-border mt-3 pt-3">
//                             <button className="flex-1 text-center py-2 hover:bg-background-secondary rounded transition-colors">
//                                 Like
//                             </button>
//                             <button className="flex-1 text-center py-2 hover:bg-background-secondary rounded transition-colors">
//                                 Comment
//                             </button>
//                             <button className="flex-1 text-center py-2 hover:bg-background-secondary rounded transition-colors">
//                                 Share
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {posts.length === 0 && (
//                 <div className="text-center py-8 text-foreground-muted">
//                     No posts yet. Be the first to share something!
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CreatePost;



















// 'use client';

// import React, { useState, useRef, JSX } from 'react';
// import Image from 'next/image';

// import pic1 from '../../../public/recommend1.png';
// import pic2 from '../../../public/recommend2.png';
// import pic3 from '../../../public/recommend3.png';
// import pic4 from '../../../public/recommend4.png';
// import pic5 from '../../../public/card_ppl1.png';
// import pic6 from '../../../public/img1.png';
// import pic7 from '../../../public/img2.png';
// import pic8 from '../../../public/img3.png';

// import profile from '../../../public/card_ppl1.png';

// import { TbPhotoSquareRounded } from 'react-icons/tb';
// import { LuVideo } from 'react-icons/lu';
// import { FaRegCalendarAlt } from 'react-icons/fa';
// import { RiArticleLine } from 'react-icons/ri';
// import { IoPaperPlaneOutline } from 'react-icons/io5';
// import { MdClose, MdEdit, MdDelete, MdPublic, MdLock, MdMoreVert } from 'react-icons/md';
// import { FaHeart, FaRegHeart, FaRegComment, FaShare } from 'react-icons/fa';
// import { useAuth } from '@/utils/AuthProvider';

// interface PostOption {
//     icon: JSX.Element;
//     label: string;
// }

// interface Like {
//     userId: string;
//     userFirstName: string;
//     userLastName: string;
//     userImage?: string | null;
//     createdAt: string;
// }

// interface Reply {
//     _id: string;
//     userId: string;
//     userFirstName: string;
//     userLastName: string;
//     userImage?: string | null;
//     content: string;
//     likes: Like[];
//     createdAt: string;
// }

// interface Comment {
//     _id: string;
//     userId: string;
//     userFirstName: string;
//     userLastName: string;
//     userImage?: string | null;
//     content: string;
//     likes: Like[];
//     replies: Reply[];
//     createdAt: string;
//     updatedAt: string;
// }

// interface Post {
//     _id: string;
//     userId: string;
//     userFirstName: string;
//     userLastName: string;
//     userImage?: string | null;
//     content: string;
//     images: string[];
//     likes: Like[];
//     comments: Comment[];
//     privacy: 'public' | 'private';
//     createdAt: string;
//     updatedAt: string;
// }

// const defaultPostOptions: PostOption[] = [
//     { icon: <TbPhotoSquareRounded />, label: 'Photo' },
//     { icon: <LuVideo />, label: 'Video' },
//     { icon: <FaRegCalendarAlt />, label: 'Event' },
//     { icon: <RiArticleLine />, label: 'Article' },
// ];

// const CreatePost: React.FC = () => {
//     const [postContent, setPostContent] = useState('');
//     const [selectedImages, setSelectedImages] = useState<File[]>([]);
//     const [imagePreviews, setImagePreviews] = useState<string[]>([]);
//     const [posts, setPosts] = useState<Post[]>([]);
//     const [loading, setLoading] = useState(false);
//     const [privacy, setPrivacy] = useState<'public' | 'private'>('public');
//     const [editingPost, setEditingPost] = useState<string | null>(null);
//     const [editContent, setEditContent] = useState('');
//     const [commentInputs, setCommentInputs] = useState<{ [postId: string]: string }>({});
//     const [replyInputs, setReplyInputs] = useState<{ [commentId: string]: string }>({});
//     const [expandedComments, setExpandedComments] = useState<{ [postId: string]: boolean }>({});
//     const [showLikes, setShowLikes] = useState<{ [postId: string]: boolean }>({});
//     const [showCommentLikes, setShowCommentLikes] = useState<{ [commentId: string]: boolean }>({});
//     const [showReplyLikes, setShowReplyLikes] = useState<{ [replyId: string]: boolean }>({});
    
//     const fileInputRef = useRef<HTMLInputElement>(null);
//     const { user } = useAuth();

//     // Helper function to get user image source
//     const getUserImageSrc = () => {
//         if (user?.image && typeof user.image === 'string') {
//             return user.image;
//         }
//         return profile;
//     };

//     const stories = [
//         { id: 1, name: 'Your Story', avatar: getUserImageSrc(), storyImage: pic1, isYourStory: true },
//         { id: 2, name: 'Ryan Rosiansky', avatar: pic6, storyImage: pic2 },
//         { id: 3, name: 'Ryan Rosiansky', avatar: pic7, storyImage: pic3 },
//         { id: 4, name: 'Ryan Rosiansky', avatar: pic8, storyImage: pic4 },
//     ];

//     // Fetch posts on component mount
//     React.useEffect(() => {
//         fetchPosts();
//     }, []);

//     const fetchPosts = async () => {
//         try {
//             const response = await fetch('/api/posts');
//             const data = await response.json();
//             if (response.ok) {
//                 setPosts(data.posts);
//             }
//         } catch (error) {
//             console.error('Error fetching posts:', error);
//         }
//     };

//     const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const files = e.target.files;
//         if (!files) return;

//         const newFiles = Array.from(files);
//         if (selectedImages.length + newFiles.length > 20) {
//             alert('You can only upload up to 20 images');
//             return;
//         }

//         setSelectedImages(prev => [...prev, ...newFiles]);

//         const newPreviews = newFiles.map(f => URL.createObjectURL(f));
//         setImagePreviews(prev => [...prev, ...newPreviews]);

//         if (fileInputRef.current) fileInputRef.current.value = '';
//     };

//     const removeImage = (index: number) => {
//         setSelectedImages(prev => prev.filter((_, i) => i !== index));
//         setImagePreviews(prev => prev.filter((_, i) => i !== index));
//     };

//     const uploadImages = async (files: File[]): Promise<string[]> => {
//         const uploadedUrls: string[] = [];
        
//         for (const file of files) {
//             const base64 = await convertToBase64(file);
//             uploadedUrls.push(base64);
//         }
        
//         return uploadedUrls;
//     };

//     const convertToBase64 = (file: File): Promise<string> => {
//         return new Promise((resolve, reject) => {
//             const reader = new FileReader();
//             reader.readAsDataURL(file);
//             reader.onload = () => resolve(reader.result as string);
//             reader.onerror = error => reject(error);
//         });
//     };

//     const handlePostSubmit = async () => {
//         if (!postContent.trim() && selectedImages.length === 0) {
//             alert('Please write something or add an image');
//             return;
//         }

//         setLoading(true);
//         try {
//             const imageUrls = await uploadImages(selectedImages);

//             const response = await fetch('/api/posts', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     content: postContent,
//                     images: imageUrls,
//                     privacy: privacy,
//                 }),
//             });

//             const data = await response.json();

//             if (!response.ok) {
//                 throw new Error(data.error || 'Failed to create post');
//             }

//             setPosts(prev => [data.post, ...prev]);
//             setPostContent('');
//             setSelectedImages([]);
//             setImagePreviews([]);
//             setPrivacy('public');

//             alert('Post created successfully!');

//         } catch (error) {
//             console.error('Error creating post:', error);
//             alert(error instanceof Error ? error.message : 'Failed to create post');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleLike = async (postId: string) => {
//         try {
//             const response = await fetch(`/api/posts/${postId}/like`, {
//                 method: 'POST',
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 setPosts(prev => prev.map(post => 
//                     post._id === postId 
//                         ? {
//                             ...post,
//                             likes: data.liked 
//                                 ? [...post.likes, {
//                                     userId: user?.id || '',
//                                     userFirstName: user?.firstName || 'User',
//                                     userLastName: user?.lastName || '',
//                                     userImage: user?.image || null,
//                                     createdAt: new Date().toISOString()
//                                 }]
//                                 : post.likes.filter(like => like.userId !== user?.id)
//                         }
//                         : post
//                 ));
//             }
//         } catch (error) {
//             console.error('Error liking post:', error);
//         }
//     };

//     const handleCommentLike = async (postId: string, commentId: string) => {
//         try {
//             // Implement comment like API call
//             console.log('Like comment:', commentId);
//         } catch (error) {
//             console.error('Error liking comment:', error);
//         }
//     };

//     const handleReplyLike = async (postId: string, commentId: string, replyId: string) => {
//         try {
//             // Implement reply like API call
//             console.log('Like reply:', replyId);
//         } catch (error) {
//             console.error('Error liking reply:', error);
//         }
//     };

//     const handleAddComment = async (postId: string) => {
//         const content = commentInputs[postId];
//         if (!content?.trim()) return;

//         try {
//             const response = await fetch(`/api/posts/${postId}/comments`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ content }),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 setPosts(prev => prev.map(post =>
//                     post._id === postId
//                         ? { ...post, comments: [...post.comments, data.comment] }
//                         : post
//                 ));
//                 setCommentInputs(prev => ({ ...prev, [postId]: '' }));
//             }
//         } catch (error) {
//             console.error('Error adding comment:', error);
//         }
//     };

//     const handleAddReply = async (postId: string, commentId: string) => {
//         const content = replyInputs[commentId];
//         if (!content?.trim()) return;

//         try {
//             // Implement reply API call
//             console.log('Add reply:', { postId, commentId, content });
//         } catch (error) {
//             console.error('Error adding reply:', error);
//         }
//     };

//     const handleEditPost = async (postId: string) => {
//         if (!editContent.trim()) return;

//         try {
//             const response = await fetch(`/api/posts/${postId}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ content: editContent }),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 setPosts(prev => prev.map(post =>
//                     post._id === postId ? data.post : post
//                 ));
//                 setEditingPost(null);
//                 setEditContent('');
//             }
//         } catch (error) {
//             console.error('Error editing post:', error);
//         }
//     };

//     const handleDeletePost = async (postId: string) => {
//         if (!confirm('Are you sure you want to delete this post?')) return;

//         try {
//             const response = await fetch(`/api/posts/${postId}`, {
//                 method: 'DELETE',
//             });

//             if (response.ok) {
//                 setPosts(prev => prev.filter(post => post._id !== postId));
//             }
//         } catch (error) {
//             console.error('Error deleting post:', error);
//         }
//     };

//     const isBase64Image = (src: string) => {
//         return src.startsWith('data:image');
//     };

//     const formatDate = (dateString: string) => {
//         const date = new Date(dateString);
//         const now = new Date();
//         const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
        
//         if (diffInHours < 1) {
//             return `${Math.floor(diffInHours * 60)}m ago`;
//         } else if (diffInHours < 24) {
//             return `${Math.floor(diffInHours)}h ago`;
//         } else {
//             return date.toLocaleDateString();
//         }
//     };

//     const isLiked = (likes: Like[]) => {
//         return likes.some(like => like.userId === user?.id);
//     };

//     const isCommentLiked = (likes: Like[]) => {
//         return likes.some(like => like.userId === user?.id);
//     };

//     const isReplyLiked = (likes: Like[]) => {
//         return likes.some(like => like.userId === user?.id);
//     };

//     return (
//         <div className="p-2 md:mt-0">
//             {/* Hidden File Input */}
//             <input
//                 type="file"
//                 ref={fileInputRef}
//                 onChange={handleImageSelect}
//                 accept="image/*"
//                 multiple
//                 className="hidden"
//             />

//             {/* Story Section */}
//             <div className="mb-2">
//                 <div className="flex space-x-3 overflow-x-auto hide-scrollbar">
//                     {stories.map((story) => (
//                         <div key={story.id} className="flex flex-col items-center space-y-1 sm:space-y-2 flex-shrink-0">
//                             <div className="relative w-16 h-16 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full sm:rounded-sm overflow-hidden cursor-pointer group">
//                                 <Image
//                                     src={story.storyImage}
//                                     alt={story.name}
//                                     width={160}
//                                     height={160}
//                                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent hidden sm:block"></div>
//                                 <div className="absolute top-1 left-1 sm:top-2 sm:left-2 hidden sm:block">
//                                     <div className={`w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full border-2 ${story.isYourStory ? 'border-gray-300 dark:border-gray-500' : 'border-primary'} overflow-hidden`}>
//                                         <Image
//                                             src={story.avatar}
//                                             alt={story.name}
//                                             width={40}
//                                             height={40}
//                                             className="w-full h-full object-cover"
//                                         />
//                                     </div>
//                                 </div>
//                                 {story.isYourStory && (
//                                     <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-primary rounded-full flex items-center justify-center border-2 border-white hidden sm:flex">
//                                         <span className="text-white text-xs font-bold">+</span>
//                                     </div>
//                                 )}
//                                 <div className="absolute bottom-1 sm:bottom-2 left-0 right-0 text-center hidden sm:block">
//                                     <span className="text-white text-xs font-medium px-1 truncate">
//                                         {story.isYourStory ? 'Your Story' : story.name}
//                                     </span>
//                                 </div>
//                                 {story.isYourStory && (
//                                     <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center border-2 border-white sm:hidden">
//                                         <span className="text-white text-xs font-bold">+</span>
//                                     </div>
//                                 )}
//                             </div>
//                             <span className="text-xs text-foreground-muted truncate max-w-[64px] sm:hidden">
//                                 {story.isYourStory ? 'Your Story' : story.name}
//                             </span>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Create Post Area */}
//             <div className="bg-card rounded-sm p-3 sm:p-4 md:p-6 shadow-sm mb-4">
//                 <div className="flex items-start space-x-3 mb-3">
//                     <Image 
//                         src={getUserImageSrc()} 
//                         alt="Profile" 
//                         width={35} 
//                         height={35} 
//                         className="rounded-full" 
//                     />
//                     <div className="flex-1">
//                         <textarea
//                             value={postContent}
//                             onChange={e => setPostContent(e.target.value)}
//                             placeholder="What's on your mind?"
//                             className="w-full rounded-sm p-2 sm:p-3 text-sm resize-none focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary min-h-[120px] bg-input text-foreground placeholder-foreground-muted"
//                             disabled={loading}
//                         />
//                         {imagePreviews.length > 0 && (
//                             <div className="mt-3 grid grid-cols-2 gap-2">
//                                 {imagePreviews.map((preview, index) => (
//                                     <div key={index} className="relative group">
//                                         <img 
//                                             src={preview} 
//                                             alt="Preview" 
//                                             className="w-full h-full rounded-lg object-cover" 
//                                         />
//                                         <button
//                                             onClick={() => removeImage(index)}
//                                             className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg"
//                                             disabled={loading}
//                                         >
//                                             <MdClose size={16} />
//                                         </button>
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 {/* Privacy Settings */}
//                 <div className="flex items-center justify-between mb-3">
//                     <div className="flex items-center space-x-2">
//                         <button
//                             onClick={() => setPrivacy(privacy === 'public' ? 'private' : 'public')}
//                             className="flex items-center space-x-1 px-3 py-1 rounded-lg border border-border hover:bg-background-secondary transition-colors"
//                         >
//                             {privacy === 'public' ? <MdPublic size={16} /> : <MdLock size={16} />}
//                             <span className="text-sm capitalize">{privacy}</span>
//                         </button>
//                     </div>
//                     <div className="text-xs text-foreground-muted">
//                         {selectedImages.length}/20 images
//                     </div>
//                 </div>

//                 {/* Desktop Options */}
//                 <div className="hidden sm:flex justify-between pt-3">
//                     <div className="flex gap-3">
//                         {defaultPostOptions.map((option, i) => (
//                             <button
//                                 key={i}
//                                 onClick={() => {
//                                     if (option.label === 'Photo') fileInputRef.current?.click();
//                                     else console.log(`${option.label} clicked`);
//                                 }}
//                                 className="flex items-center gap-1 px-3 py-1 rounded-lg hover:bg-background-secondary transition-colors text-foreground-muted hover:text-foreground"
//                                 disabled={loading}
//                             >
//                                 {option.icon}
//                                 <span className="text-sm">{option.label}</span>
//                             </button>
//                         ))}
//                     </div>
//                     <button
//                         onClick={handlePostSubmit}
//                         disabled={(!postContent.trim() && selectedImages.length === 0) || loading}
//                         className={`flex items-center gap-2 px-4 py-1 rounded-lg text-sm transition-colors
//                             ${(postContent.trim() || selectedImages.length > 0) && !loading
//                                 ? 'bg-primary text-primary-foreground hover:bg-primary-dark'
//                                 : 'bg-muted text-muted-foreground cursor-not-allowed'}
//                         `}
//                     >
//                         {loading ? 'Posting...' : (
//                             <>
//                                 <IoPaperPlaneOutline />
//                                 Post
//                             </>
//                         )}
//                     </button>
//                 </div>

//                 {/* Mobile Options */}
//                 <div className="sm:hidden flex justify-between pt-2">
//                     <div className="flex gap-1 flex-1">
//                         {defaultPostOptions.map((option, i) => (
//                             <button
//                                 key={i}
//                                 onClick={() => {
//                                     if (option.label === 'Photo') fileInputRef.current?.click();
//                                     else console.log(`${option.label} clicked`);
//                                 }}
//                                 className="flex items-center justify-center flex-1 p-1 rounded-lg hover:bg-background-secondary transition-colors text-foreground-muted hover:text-foreground"
//                                 disabled={loading}
//                             >
//                                 {option.icon}
//                             </button>
//                         ))}
//                     </div>
//                     <button
//                         onClick={handlePostSubmit}
//                         disabled={(!postContent.trim() && selectedImages.length === 0) || loading}
//                         className={`px-2 py-1 rounded-lg text-xs ml-2 transition-colors
//                             ${(postContent.trim() || selectedImages.length > 0) && !loading
//                                 ? 'bg-primary text-primary-foreground hover:bg-primary-dark'
//                                 : 'bg-muted text-muted-foreground cursor-not-allowed'}
//                         `}
//                     >
//                         {loading ? '...' : 'Post'}
//                     </button>
//                 </div>
//             </div>

//             {/* Display Posts */}
//             <div className="space-y-4">
//                 {posts.map((post) => (
//                     <div key={post._id} className="bg-card rounded-sm p-4 shadow-sm">
//                         {/* Post Header */}
//                         <div className="flex items-center justify-between mb-3">
//                             <div className="flex items-center space-x-3">
//                                 <Image 
//                                     src={post.userImage || profile} 
//                                     alt={`${post.userFirstName} ${post.userLastName}`}
//                                     width={40}
//                                     height={40}
//                                     className="rounded-full"
//                                 />
//                                 <div>
//                                     <h3 className="font-semibold text-foreground">
//                                         {post.userFirstName} {post.userLastName}
//                                     </h3>
//                                     <div className="flex items-center space-x-2 text-xs text-foreground-muted">
//                                         <span>{formatDate(post.createdAt)}</span>
//                                         <span>•</span>
//                                         {post.privacy === 'public' ? <MdPublic size={12} /> : <MdLock size={12} />}
//                                         <span className="capitalize">{post.privacy}</span>
//                                     </div>
//                                 </div>
//                             </div>
                            
//                             {/* Post Actions Menu */}
//                             {post.userId === user?.id && (
//                                 <div className="relative">
//                                     <button className="p-1 rounded-full hover:bg-background-secondary transition-colors">
//                                         <MdMoreVert size={20} />
//                                     </button>
//                                     <div className="absolute right-0 top-8 bg-card border border-border rounded-lg shadow-lg z-10 min-w-[120px]">
//                                         <button
//                                             onClick={() => {
//                                                 setEditingPost(post._id);
//                                                 setEditContent(post.content);
//                                             }}
//                                             className="flex items-center space-x-2 w-full px-3 py-2 hover:bg-background-secondary rounded-t-lg"
//                                         >
//                                             <MdEdit size={16} />
//                                             <span>Edit</span>
//                                         </button>
//                                         <button
//                                             onClick={() => handleDeletePost(post._id)}
//                                             className="flex items-center space-x-2 w-full px-3 py-2 hover:bg-background-secondary text-destructive rounded-b-lg"
//                                         >
//                                             <MdDelete size={16} />
//                                             <span>Delete</span>
//                                         </button>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>

//                         {/* Edit Post Form */}
//                         {editingPost === post._id && (
//                             <div className="mb-3">
//                                 <textarea
//                                     value={editContent}
//                                     onChange={e => setEditContent(e.target.value)}
//                                     className="w-full rounded-sm p-2 border border-border focus:outline-none focus:border-primary"
//                                     rows={3}
//                                 />
//                                 <div className="flex space-x-2 mt-2">
//                                     <button
//                                         onClick={() => handleEditPost(post._id)}
//                                         className="px-3 py-1 bg-primary text-primary-foreground rounded-lg text-sm"
//                                     >
//                                         Save
//                                     </button>
//                                     <button
//                                         onClick={() => setEditingPost(null)}
//                                         className="px-3 py-1 bg-muted text-foreground rounded-lg text-sm"
//                                     >
//                                         Cancel
//                                     </button>
//                                 </div>
//                             </div>
//                         )}

//                         {/* Post Content */}
//                         {!editingPost && post.content && (
//                             <p className="text-foreground mb-3 whitespace-pre-wrap">
//                                 {post.content}
//                             </p>
//                         )}

//                         {/* Post Images */}
//                         {post.images.length > 0 && (
//                             <div className={`grid gap-2 mb-3 ${
//                                 post.images.length === 1 ? 'grid-cols-1' :
//                                 post.images.length === 2 ? 'grid-cols-2' :
//                                 post.images.length === 3 ? 'grid-cols-2' : 'grid-cols-2'
//                             }`}>
//                                 {post.images.map((image, index) => (
//                                     <div key={index} className="relative">
//                                         {isBase64Image(image) ? (
//                                             <img 
//                                                 src={image} 
//                                                 alt={`Post image ${index + 1}`}
//                                                 className="w-full h-full rounded-lg object-cover"
//                                             />
//                                         ) : (
//                                             <Image 
//                                                 src={image} 
//                                                 alt={`Post image ${index + 1}`}
//                                                 width={400}
//                                                 height={300}
//                                                 className="w-full h-full rounded-lg object-cover"
//                                             />
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                         )}

//                         {/* Post Stats */}
//                         <div className="flex justify-between text-sm text-foreground-muted border-t border-border pt-3">
//                             <button
//                                 onClick={() => setShowLikes(prev => ({
//                                     ...prev,
//                                     [post._id]: !prev[post._id]
//                                 }))}
//                                 className="hover:underline"
//                             >
//                                 {post.likes.length} likes
//                             </button>
//                             <span>{post.comments.length} comments</span>
//                         </div>

//                         {/* Show Likes Modal */}
//                         {showLikes[post._id] && (
//                             <div className="mt-3 p-3 bg-background-secondary rounded-lg">
//                                 <h4 className="font-semibold mb-2">Liked by</h4>
//                                 <div className="space-y-2 max-h-40 overflow-y-auto">
//                                     {post.likes.map((like, index) => (
//                                         <div key={index} className="flex items-center space-x-2">
//                                             <Image
//                                                 src={like.userImage || profile}
//                                                 alt={`${like.userFirstName} ${like.userLastName}`}
//                                                 width={32}
//                                                 height={32}
//                                                 className="rounded-full"
//                                             />
//                                             <span>{like.userFirstName} {like.userLastName}</span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}

//                         {/* Post Actions */}
//                         <div className="flex justify-between border-t border-border mt-3 pt-3">
//                             <button
//                                 onClick={() => handleLike(post._id)}
//                                 className={`flex-1 text-center py-2 hover:bg-background-secondary rounded transition-colors flex items-center justify-center space-x-2 ${
//                                     isLiked(post.likes) ? 'text-primary' : 'text-foreground-muted'
//                                 }`}
//                             >
//                                 {isLiked(post.likes) ? <FaHeart /> : <FaRegHeart />}
//                                 <span>Like</span>
//                             </button>
//                             <button
//                                 onClick={() => setExpandedComments(prev => ({
//                                     ...prev,
//                                     [post._id]: !prev[post._id]
//                                 }))}
//                                 className="flex-1 text-center py-2 hover:bg-background-secondary rounded transition-colors flex items-center justify-center space-x-2 text-foreground-muted"
//                             >
//                                 <FaRegComment />
//                                 <span>Comment</span>
//                             </button>
//                             <button className="flex-1 text-center py-2 hover:bg-background-secondary rounded transition-colors flex items-center justify-center space-x-2 text-foreground-muted">
//                                 <FaShare />
//                                 <span>Share</span>
//                             </button>
//                         </div>

//                         {/* Comments Section */}
//                         {expandedComments[post._id] && (
//                             <div className="mt-4 border-t border-border pt-4">
//                                 {/* Add Comment */}
//                                 <div className="flex space-x-3 mb-4">
//                                     <Image
//                                         src={getUserImageSrc()}
//                                         alt="Your profile"
//                                         width={32}
//                                         height={32}
//                                         className="rounded-full"
//                                     />
//                                     <div className="flex-1">
//                                         <input
//                                             type="text"
//                                             value={commentInputs[post._id] || ''}
//                                             onChange={e => setCommentInputs(prev => ({
//                                                 ...prev,
//                                                 [post._id]: e.target.value
//                                             }))}
//                                             placeholder="Write a comment..."
//                                             className="w-full rounded-full px-3 py-2 border border-border focus:outline-none focus:border-primary bg-input"
//                                             onKeyPress={e => e.key === 'Enter' && handleAddComment(post._id)}
//                                         />
//                                     </div>
//                                 </div>

//                                 {/* Comments List */}
//                                 <div className="space-y-4">
//                                     {post.comments.map((comment) => (
//                                         <div key={comment._id} className="flex space-x-3">
//                                             <Image
//                                                 src={comment.userImage || profile}
//                                                 alt={`${comment.userFirstName} ${comment.userLastName}`}
//                                                 width={32}
//                                                 height={32}
//                                                 className="rounded-full flex-shrink-0"
//                                             />
//                                             <div className="flex-1">
//                                                 <div className="bg-background-secondary rounded-lg p-3">
//                                                     <div className="flex justify-between items-start mb-1">
//                                                         <h5 className="font-semibold text-sm">
//                                                             {comment.userFirstName} {comment.userLastName}
//                                                         </h5>
//                                                         <span className="text-xs text-foreground-muted">
//                                                             {formatDate(comment.createdAt)}
//                                                         </span>
//                                                     </div>
//                                                     <p className="text-foreground text-sm mb-2">
//                                                         {comment.content}
//                                                     </p>
                                                    
//                                                     {/* Comment Actions */}
//                                                     <div className="flex items-center space-x-4 text-xs text-foreground-muted">
//                                                         <button
//                                                             onClick={() => handleCommentLike(post._id, comment._id)}
//                                                             className={`flex items-center space-x-1 ${
//                                                                 isCommentLiked(comment.likes) ? 'text-primary' : ''
//                                                             }`}
//                                                         >
//                                                             {isCommentLiked(comment.likes) ? <FaHeart /> : <FaRegHeart />}
//                                                             <span>{comment.likes.length}</span>
//                                                         </button>
//                                                         <button
//                                                             onClick={() => setReplyInputs(prev => ({
//                                                                 ...prev,
//                                                                 [comment._id]: !prev[comment._id]
//                                                             }))}
//                                                         >
//                                                             Reply
//                                                         </button>
//                                                     </div>

//                                                     {/* Show Comment Likes */}
//                                                     {showCommentLikes[comment._id] && comment.likes.length > 0 && (
//                                                         <div className="mt-2 p-2 bg-background-tertiary rounded">
//                                                             <h6 className="text-xs font-semibold mb-1">Liked by</h6>
//                                                             {comment.likes.map((like, index) => (
//                                                                 <div key={index} className="flex items-center space-x-1 text-xs">
//                                                                     <Image
//                                                                         src={like.userImage || profile}
//                                                                         alt={`${like.userFirstName} ${like.userLastName}`}
//                                                                         width={20}
//                                                                         height={20}
//                                                                         className="rounded-full"
//                                                                     />
//                                                                     <span>{like.userFirstName} {like.userLastName}</span>
//                                                                 </div>
//                                                             ))}
//                                                         </div>
//                                                     )}

//                                                     {/* Reply Input */}
//                                                     {replyInputs[comment._id] && (
//                                                         <div className="flex space-x-2 mt-3">
//                                                             <input
//                                                                 type="text"
//                                                                 value={replyInputs[comment._id] || ''}
//                                                                 onChange={e => setReplyInputs(prev => ({
//                                                                     ...prev,
//                                                                     [comment._id]: e.target.value
//                                                                 }))}
//                                                                 placeholder="Write a reply..."
//                                                                 className="flex-1 rounded-full px-3 py-1 border border-border focus:outline-none focus:border-primary bg-input text-sm"
//                                                                 onKeyPress={e => e.key === 'Enter' && handleAddReply(post._id, comment._id)}
//                                                             />
//                                                             <button
//                                                                 onClick={() => handleAddReply(post._id, comment._id)}
//                                                                 className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm"
//                                                             >
//                                                                 Reply
//                                                             </button>
//                                                         </div>
//                                                     )}

//                                                     {/* Replies */}
//                                                     {comment.replies.length > 0 && (
//                                                         <div className="mt-3 space-y-2">
//                                                             {comment.replies.map((reply) => (
//                                                                 <div key={reply._id} className="flex space-x-2">
//                                                                     <Image
//                                                                         src={reply.userImage || profile}
//                                                                         alt={`${reply.userFirstName} ${reply.userLastName}`}
//                                                                         width={24}
//                                                                         height={24}
//                                                                         className="rounded-full flex-shrink-0"
//                                                                     />
//                                                                     <div className="flex-1 bg-background-tertiary rounded-lg p-2">
//                                                                         <div className="flex justify-between items-start mb-1">
//                                                                             <h6 className="font-semibold text-xs">
//                                                                                 {reply.userFirstName} {reply.userLastName}
//                                                                             </h6>
//                                                                             <span className="text-xs text-foreground-muted">
//                                                                                 {formatDate(reply.createdAt)}
//                                                                             </span>
//                                                                         </div>
//                                                                         <p className="text-foreground text-xs mb-1">
//                                                                             {reply.content}
//                                                                         </p>
//                                                                         <div className="flex items-center space-x-3 text-xs text-foreground-muted">
//                                                                             <button
//                                                                                 onClick={() => handleReplyLike(post._id, comment._id, reply._id)}
//                                                                                 className={`flex items-center space-x-1 ${
//                                                                                     isReplyLiked(reply.likes) ? 'text-primary' : ''
//                                                                                 }`}
//                                                                             >
//                                                                                 {isReplyLiked(reply.likes) ? <FaHeart /> : <FaRegHeart />}
//                                                                                 <span>{reply.likes.length}</span>
//                                                                             </button>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             ))}
//                                                         </div>
//                                                     )}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>

//             {posts.length === 0 && (
//                 <div className="text-center py-8 text-foreground-muted">
//                     No posts yet. Be the first to share something!
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CreatePost;
























'use client';

import React, { useState, useRef, JSX, useEffect } from 'react';
import Image from 'next/image';

import pic1 from '../../../public/recommend1.png';
import pic2 from '../../../public/recommend2.png';
import pic3 from '../../../public/recommend3.png';
import pic4 from '../../../public/recommend4.png';
import pic5 from '../../../public/card_ppl1.png';
import pic6 from '../../../public/img1.png';
import pic7 from '../../../public/img2.png';
import pic8 from '../../../public/img3.png';

import profile from '../../../public/card_ppl1.png';

import { TbPhotoSquareRounded } from 'react-icons/tb';
import { LuVideo } from 'react-icons/lu';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { RiArticleLine } from 'react-icons/ri';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { MdClose, MdEdit, MdDelete, MdPublic, MdLock, MdMoreVert } from 'react-icons/md';
import { FaHeart, FaRegHeart, FaRegComment, FaShare } from 'react-icons/fa';
import { useAuth } from '@/utils/AuthProvider';

interface PostOption {
    icon: JSX.Element;
    label: string;
}

interface Like {
    userId: string;
    userFirstName: string;
    userLastName: string;
    userImage?: string | null;
    createdAt: string;
}

interface Reply {
    _id: string;
    userId: string;
    userFirstName: string;
    userLastName: string;
    userImage?: string | null;
    content: string;
    likes: Like[];
    createdAt: string;
}

interface Comment {
    _id: string;
    userId: string;
    userFirstName: string;
    userLastName: string;
    userImage?: string | null;
    content: string;
    likes: Like[];
    replies: Reply[];
    createdAt: string;
    updatedAt: string;
}

interface Post {
    _id: string;
    userId: string;
    userFirstName: string;
    userLastName: string;
    userImage?: string | null;
    content: string;
    images: string[];
    likes: Like[];
    comments: Comment[];
    privacy: 'public' | 'private';
    createdAt: string;
    updatedAt: string;
}

const defaultPostOptions: PostOption[] = [
    { icon: <TbPhotoSquareRounded />, label: 'Photo' },
    { icon: <LuVideo />, label: 'Video' },
    { icon: <FaRegCalendarAlt />, label: 'Event' },
    { icon: <RiArticleLine />, label: 'Article' },
];

const CreatePost: React.FC = () => {
    const [postContent, setPostContent] = useState('');
    const [selectedImages, setSelectedImages] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const [privacy, setPrivacy] = useState<'public' | 'private'>('public');
    const [editingPost, setEditingPost] = useState<string | null>(null);
    const [editContent, setEditContent] = useState('');
    const [commentInputs, setCommentInputs] = useState<{ [postId: string]: string }>({});
    const [replyInputs, setReplyInputs] = useState<{ [commentId: string]: boolean }>({});
    const [replyContents, setReplyContents] = useState<{ [commentId: string]: string }>({});
    const [expandedComments, setExpandedComments] = useState<{ [postId: string]: boolean }>({});
    const [showLikes, setShowLikes] = useState<{ [postId: string]: boolean }>({});
    const [showCommentLikes, setShowCommentLikes] = useState<{ [commentId: string]: boolean }>({});
    const [showReplyLikes, setShowReplyLikes] = useState<{ [replyId: string]: boolean }>({});
    const [showPostMenu, setShowPostMenu] = useState<{ [postId: string]: boolean }>({});
    
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { user } = useAuth();

    // Helper function to get user image source
    const getUserImageSrc = () => {
        if (user?.image && typeof user.image === 'string') {
            return user.image;
        }
        return profile;
    };

    const stories = [
        { id: 1, name: 'Your Story', avatar: getUserImageSrc(), storyImage: pic1, isYourStory: true },
        { id: 2, name: 'Ryan Rosiansky', avatar: pic6, storyImage: pic2 },
        { id: 3, name: 'Ryan Rosiansky', avatar: pic7, storyImage: pic3 },
        { id: 4, name: 'Ryan Rosiansky', avatar: pic8, storyImage: pic4 },
    ];

    // Fetch posts on component mount
    useEffect(() => {
        fetchPosts();
    }, []);

    // Add click outside handler for menus
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Close post menus when clicking outside
            setShowPostMenu({});
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch('/api/posts');
            const data = await response.json();
            if (response.ok) {
                setPosts(data.posts);
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        const newFiles = Array.from(files);
        if (selectedImages.length + newFiles.length > 20) {
            alert('You can only upload up to 20 images');
            return;
        }

        setSelectedImages(prev => [...prev, ...newFiles]);

        const newPreviews = newFiles.map(f => URL.createObjectURL(f));
        setImagePreviews(prev => [...prev, ...newPreviews]);

        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const removeImage = (index: number) => {
        setSelectedImages(prev => prev.filter((_, i) => i !== index));
        setImagePreviews(prev => prev.filter((_, i) => i !== index));
    };

    const uploadImages = async (files: File[]): Promise<string[]> => {
        const uploadedUrls: string[] = [];
        
        for (const file of files) {
            const base64 = await convertToBase64(file);
            uploadedUrls.push(base64);
        }
        
        return uploadedUrls;
    };

    const convertToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = error => reject(error);
        });
    };

    const handlePostSubmit = async () => {
        if (!postContent.trim() && selectedImages.length === 0) {
            alert('Please write something or add an image');
            return;
        }

        setLoading(true);
        try {
            const imageUrls = await uploadImages(selectedImages);

            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: postContent,
                    images: imageUrls,
                    privacy: privacy,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to create post');
            }

            setPosts(prev => [data.post, ...prev]);
            setPostContent('');
            setSelectedImages([]);
            setImagePreviews([]);
            setPrivacy('public');

        } catch (error) {
            console.error('Error creating post:', error);
            alert(error instanceof Error ? error.message : 'Failed to create post');
        } finally {
            setLoading(false);
        }
    };

    const handleLike = async (postId: string) => {
        try {
            const response = await fetch(`/api/posts/${postId}/like`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to like post');
            }

            if (response.ok) {
                setPosts(prev => prev.map(post => 
                    post._id === postId 
                        ? {
                            ...post,
                            likes: data.likes
                        }
                        : post
                ));
            }
        } catch (error) {
            console.error('Error liking post:', error);
            alert('Failed to like post. Please try again.');
        }
    };

    const handleCommentLike = async (postId: string, commentId: string) => {
        try {
            const response = await fetch(`/api/posts/${postId}/comments/${commentId}/like`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to like comment');
            }

            if (response.ok) {
                setPosts(prev => prev.map(post =>
                    post._id === postId
                        ? {
                            ...post,
                            comments: post.comments.map(comment =>
                                comment._id === commentId
                                    ? { ...comment, likes: data.likes }
                                    : comment
                            )
                        }
                        : post
                ));
            }
        } catch (error) {
            console.error('Error liking comment:', error);
            alert('Failed to like comment. Please try again.');
        }
    };

    const handleReplyLike = async (postId: string, commentId: string, replyId: string) => {
        try {
            const response = await fetch(`/api/posts/${postId}/comments/${commentId}/replies/${replyId}/like`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to like reply');
            }

            if (response.ok) {
                setPosts(prev => prev.map(post =>
                    post._id === postId
                        ? {
                            ...post,
                            comments: post.comments.map(comment =>
                                comment._id === commentId
                                    ? {
                                        ...comment,
                                        replies: comment.replies.map(reply =>
                                            reply._id === replyId
                                                ? { ...reply, likes: data.likes }
                                                : reply
                                        )
                                    }
                                    : comment
                            )
                        }
                        : post
                ));
            }
        } catch (error) {
            console.error('Error liking reply:', error);
            alert('Failed to like reply. Please try again.');
        }
    };

    const handleAddComment = async (postId: string) => {
        const content = commentInputs[postId];
        if (!content?.trim()) return;

        try {
            const response = await fetch(`/api/posts/${postId}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content }),
            });

            const data = await response.json();

            if (response.ok) {
                setPosts(prev => prev.map(post =>
                    post._id === postId
                        ? { ...post, comments: [...post.comments, data.comment] }
                        : post
                ));
                setCommentInputs(prev => ({ ...prev, [postId]: '' }));
            }
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    const handleAddReply = async (postId: string, commentId: string) => {
        const content = replyContents[commentId];
        if (!content?.trim()) return;

        try {
            const response = await fetch(`/api/posts/${postId}/comments/${commentId}/replies`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content }),
            });

            const data = await response.json();

            if (response.ok) {
                setPosts(prev => prev.map(post =>
                    post._id === postId
                        ? {
                            ...post,
                            comments: post.comments.map(comment =>
                                comment._id === commentId
                                    ? { ...comment, replies: [...comment.replies, data.reply] }
                                    : comment
                            )
                        }
                        : post
                ));
                setReplyContents(prev => ({ ...prev, [commentId]: '' }));
                setReplyInputs(prev => ({ ...prev, [commentId]: false }));
            }
        } catch (error) {
            console.error('Error adding reply:', error);
        }
    };

    const toggleReplyInput = (commentId: string) => {
        setReplyInputs(prev => ({
            ...prev,
            [commentId]: !prev[commentId]
        }));
    };

    const handleEditPost = async (postId: string) => {
        if (!editContent.trim()) return;

        try {
            const response = await fetch(`/api/posts/${postId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: editContent }),
            });

            const data = await response.json();

            if (response.ok) {
                setPosts(prev => prev.map(post =>
                    post._id === postId ? data.post : post
                ));
                setEditingPost(null);
                setEditContent('');
            }
        } catch (error) {
            console.error('Error editing post:', error);
        }
    };

    const handleDeletePost = async (postId: string) => {
        if (!confirm('Are you sure you want to delete this post?')) return;

        try {
            const response = await fetch(`/api/posts/${postId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setPosts(prev => prev.filter(post => post._id !== postId));
            }
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    const handlePrivacyChange = async (postId: string, newPrivacy: 'public' | 'private') => {
        try {
            const response = await fetch(`/api/posts/${postId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ privacy: newPrivacy }),
            });

            if (response.ok) {
                setPosts(prev => prev.map(post =>
                    post._id === postId ? { ...post, privacy: newPrivacy } : post
                ));
                setShowPostMenu(prev => ({ ...prev, [postId]: false }));
            }
        } catch (error) {
            console.error('Error updating privacy:', error);
        }
    };

    const isBase64Image = (src: string) => {
        return src.startsWith('data:image');
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
        
        if (diffInHours < 1) {
            const minutes = Math.floor(diffInHours * 60);
            return minutes === 0 ? 'just now' : `${minutes}m ago`;
        } else if (diffInHours < 24) {
            return `${Math.floor(diffInHours)}h ago`;
        } else {
            return date.toLocaleDateString();
        }
    };

    const isLiked = (likes: Like[]) => {
        if (!user?.id) return false;
        return likes.some(like => like.userId === user.id);
    };

    const isCommentLiked = (likes: Like[]) => {
        if (!user?.id) return false;
        return likes.some(like => like.userId === user.id);
    };

    const isReplyLiked = (likes: Like[]) => {
        if (!user?.id) return false;
        return likes.some(like => like.userId === user.id);
    };

    return (
        <div className="p-2 md:mt-0">
            {/* Hidden File Input */}
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageSelect}
                accept="image/*"
                multiple
                className="hidden"
            />

            {/* Story Section */}
            <div className="mb-2">
                <div className="flex space-x-3 overflow-x-auto hide-scrollbar">
                    {stories.map((story) => (
                        <div key={story.id} className="flex flex-col items-center space-y-1 sm:space-y-2 flex-shrink-0">
                            <div className="relative w-16 h-16 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full sm:rounded-sm overflow-hidden cursor-pointer group">
                                <Image
                                    src={story.storyImage}
                                    alt={story.name}
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent hidden sm:block"></div>
                                <div className="absolute top-1 left-1 sm:top-2 sm:left-2 hidden sm:block">
                                    <div className={`w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full border-2 ${story.isYourStory ? 'border-gray-300 dark:border-gray-500' : 'border-primary'} overflow-hidden`}>
                                        <Image
                                            src={story.avatar}
                                            alt={story.name}
                                            width={40}
                                            height={40}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                {story.isYourStory && (
                                    <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-primary rounded-full flex items-center justify-center border-2 border-white hidden sm:flex">
                                        <span className="text-white text-xs font-bold">+</span>
                                    </div>
                                )}
                                <div className="absolute bottom-1 sm:bottom-2 left-0 right-0 text-center hidden sm:block">
                                    <span className="text-white text-xs font-medium px-1 truncate">
                                        {story.isYourStory ? 'Your Story' : story.name}
                                    </span>
                                </div>
                                {story.isYourStory && (
                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center border-2 border-white sm:hidden">
                                        <span className="text-white text-xs font-bold">+</span>
                                    </div>
                                )}
                            </div>
                            <span className="text-xs text-foreground-muted truncate max-w-[64px] sm:hidden">
                                {story.isYourStory ? 'Your Story' : story.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Create Post Area */}
            <div className="bg-card rounded-sm p-3 sm:p-4 md:p-6 shadow-sm mb-4">
                <div className="flex items-start space-x-3 mb-3">
                    <Image 
                        src={getUserImageSrc()} 
                        alt="Profile" 
                        width={40}
                        height={40}
                        className="rounded-full object-cover" 
                    />
                    <div className="flex-1">
                        <textarea
                            value={postContent}
                            onChange={e => setPostContent(e.target.value)}
                            placeholder="What's on your mind?"
                            className="w-full rounded-sm p-2 sm:p-3 text-sm resize-none focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary min-h-[120px] bg-input text-foreground placeholder-foreground-muted"
                            disabled={loading}
                        />
                        {imagePreviews.length > 0 && (
                            <div className="mt-3 grid grid-cols-2 gap-2">
                                {imagePreviews.map((preview, index) => (
                                    <div key={index} className="relative group">
                                        <img 
                                            src={preview} 
                                            alt="Preview" 
                                            className="w-full h-full rounded-lg object-cover" 
                                        />
                                        <button
                                            onClick={() => removeImage(index)}
                                            className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg"
                                            disabled={loading}
                                        >
                                            <MdClose size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Privacy Settings */}
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => setPrivacy(privacy === 'public' ? 'private' : 'public')}
                            className="flex items-center space-x-1 px-3 py-1 rounded-lg border border-border hover:bg-background-secondary transition-colors"
                        >
                            {privacy === 'public' ? <MdPublic size={16} /> : <MdLock size={16} />}
                            <span className="text-sm capitalize">{privacy}</span>
                        </button>
                    </div>
                    <div className="text-xs text-foreground-muted">
                        {selectedImages.length}/20 images
                    </div>
                </div>

                {/* Desktop Options */}
                <div className="hidden sm:flex justify-between pt-3">
                    <div className="flex gap-3">
                        {defaultPostOptions.map((option, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    if (option.label === 'Photo') fileInputRef.current?.click();
                                    else console.log(`${option.label} clicked`);
                                }}
                                className="flex items-center gap-1 px-3 py-1 rounded-lg hover:bg-background-secondary transition-colors text-foreground-muted hover:text-foreground"
                                disabled={loading}
                            >
                                {option.icon}
                                <span className="text-sm">{option.label}</span>
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={handlePostSubmit}
                        disabled={(!postContent.trim() && selectedImages.length === 0) || loading}
                        className={`flex items-center gap-2 px-4 py-1 rounded-lg text-sm transition-colors
                            ${(postContent.trim() || selectedImages.length > 0) && !loading
                                ? 'bg-primary text-primary-foreground hover:bg-primary-dark'
                                : 'bg-muted text-muted-foreground cursor-not-allowed'}
                        `}
                    >
                        {loading ? 'Posting...' : (
                            <>
                                <IoPaperPlaneOutline />
                                Post
                            </>
                        )}
                    </button>
                </div>

                {/* Mobile Options */}
                <div className="sm:hidden flex justify-between pt-2">
                    <div className="flex gap-1 flex-1">
                        {defaultPostOptions.map((option, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    if (option.label === 'Photo') fileInputRef.current?.click();
                                    else console.log(`${option.label} clicked`);
                                }}
                                className="flex items-center justify-center flex-1 p-1 rounded-lg hover:bg-background-secondary transition-colors text-foreground-muted hover:text-foreground"
                                disabled={loading}
                            >
                                {option.icon}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={handlePostSubmit}
                        disabled={(!postContent.trim() && selectedImages.length === 0) || loading}
                        className={`px-2 py-1 rounded-lg text-xs ml-2 transition-colors
                            ${(postContent.trim() || selectedImages.length > 0) && !loading
                                ? 'bg-primary text-primary-foreground hover:bg-primary-dark'
                                : 'bg-muted text-muted-foreground cursor-not-allowed'}
                        `}
                    >
                        {loading ? '...' : 'Post'}
                    </button>
                </div>
            </div>

            {/* Display Posts */}
            <div className="space-y-4">
                {posts.map((post) => (
                    <div key={post._id} className="bg-card rounded-sm p-4 shadow-sm">
                        {/* Post Header */}
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                                <Image 
                                    src={post.userImage || profile} 
                                    alt={`${post.userFirstName} ${post.userLastName}`}
                                    width={40}
                                    height={40}
                                    className="rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="font-semibold text-foreground">
                                        {post.userFirstName} {post.userLastName}
                                    </h3>
                                    <div className="flex items-center space-x-2 text-xs text-foreground-muted">
                                        <span>{formatDate(post.createdAt)}</span>
                                        <span>•</span>
                                        {post.privacy === 'public' ? <MdPublic size={12} /> : <MdLock size={12} />}
                                        <span className="capitalize">{post.privacy}</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Post Actions Menu */}
                            {post.userId === user?.id && (
                                <div className="relative">
                                    <button 
                                        className="p-1 rounded-full hover:bg-background-secondary transition-colors"
                                        onClick={() => setShowPostMenu(prev => ({
                                            ...prev,
                                            [post._id]: !prev[post._id]
                                        }))}
                                    >
                                        <MdMoreVert size={20} />
                                    </button>
                                    {showPostMenu[post._id] && (
                                        <div className="absolute right-0 top-8 bg-card border border-border rounded-lg shadow-lg z-10 min-w-[120px]">
                                            {/* Privacy Toggle */}
                                            <button
                                                onClick={() => handlePrivacyChange(post._id, post.privacy === 'public' ? 'private' : 'public')}
                                                className="flex items-center space-x-2 w-full px-3 py-2 hover:bg-background-secondary rounded-t-lg"
                                            >
                                                {post.privacy === 'public' ? <MdLock size={16} /> : <MdPublic size={16} />}
                                                <span>Make {post.privacy === 'public' ? 'Private' : 'Public'}</span>
                                            </button>
                                            
                                            {/* Edit Option */}
                                            <button
                                                onClick={() => {
                                                    setEditingPost(post._id);
                                                    setEditContent(post.content);
                                                    setShowPostMenu(prev => ({ ...prev, [post._id]: false }));
                                                }}
                                                className="flex items-center space-x-2 w-full px-3 py-2 hover:bg-background-secondary"
                                            >
                                                <MdEdit size={16} />
                                                <span>Edit</span>
                                            </button>
                                            
                                            {/* Delete Option */}
                                            <button
                                                onClick={() => {
                                                    handleDeletePost(post._id);
                                                    setShowPostMenu(prev => ({ ...prev, [post._id]: false }));
                                                }}
                                                className="flex items-center space-x-2 w-full px-3 py-2 hover:bg-background-secondary text-destructive rounded-b-lg"
                                            >
                                                <MdDelete size={16} />
                                                <span>Delete</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Edit Post Form */}
                        {editingPost === post._id && (
                            <div className="mb-3">
                                <textarea
                                    value={editContent}
                                    onChange={e => setEditContent(e.target.value)}
                                    className="w-full rounded-sm p-2 border border-border focus:outline-none focus:border-primary bg-input text-foreground"
                                    rows={3}
                                />
                                <div className="flex space-x-2 mt-2">
                                    <button
                                        onClick={() => handleEditPost(post._id)}
                                        className="px-3 py-1 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary-dark transition-colors"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => {
                                            setEditingPost(null);
                                            setEditContent('');
                                        }}
                                        className="px-3 py-1 bg-muted text-foreground rounded-lg text-sm hover:bg-background-secondary transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Post Content */}
                        {!editingPost && post.content && (
                            <p className="text-foreground mb-3 whitespace-pre-wrap">
                                {post.content}
                            </p>
                        )}

                        {/* Post Images */}
                        {post.images.length > 0 && (
                            <div className={`grid gap-2 mb-3 ${
                                post.images.length === 1 ? 'grid-cols-1' :
                                post.images.length === 2 ? 'grid-cols-2' :
                                post.images.length === 3 ? 'grid-cols-2' : 'grid-cols-2'
                            }`}>
                                {post.images.map((image, index) => (
                                    <div key={index} className="relative">
                                        {isBase64Image(image) ? (
                                            <img 
                                                src={image} 
                                                alt={`Post image ${index + 1}`}
                                                className="w-full h-full rounded-lg object-cover"
                                            />
                                        ) : (
                                            <Image 
                                                src={image} 
                                                alt={`Post image ${index + 1}`}
                                                width={400}
                                                height={300}
                                                className="w-full h-full rounded-lg object-cover"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Post Stats */}
                        <div className="flex justify-between text-sm text-foreground-muted border-t border-border pt-3">
                            <button
                                onClick={() => setShowLikes(prev => ({
                                    ...prev,
                                    [post._id]: !prev[post._id]
                                }))}
                                className="hover:underline"
                            >
                                {post.likes.length} likes
                            </button>
                            <span>{post.comments.length} comments</span>
                        </div>

                        {/* Show Likes Modal */}
                        {showLikes[post._id] && (
                            <div className="mt-3 p-3 bg-background-secondary rounded-lg">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="font-semibold">Liked by</h4>
                                    <button
                                        onClick={() => setShowLikes(prev => ({ ...prev, [post._id]: false }))}
                                        className="text-foreground-muted hover:text-foreground"
                                    >
                                        <MdClose size={16} />
                                    </button>
                                </div>
                                <div className="space-y-2 max-h-40 overflow-y-auto">
                                    {post.likes.length === 0 ? (
                                        <p className="text-foreground-muted text-sm">No likes yet</p>
                                    ) : (
                                        post.likes.map((like, index) => (
                                            <div key={index} className="flex items-center space-x-2">
                                                <Image
                                                    src={like.userImage || profile}
                                                    alt={`${like.userFirstName} ${like.userLastName}`}
                                                    width={32}
                                                    height={32}
                                                    className="rounded-full object-cover"
                                                />
                                                <span className="text-sm">{like.userFirstName} {like.userLastName}</span>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Post Actions */}
                        <div className="flex justify-between border-t border-border mt-3 pt-3">
                            <button
                                onClick={() => handleLike(post._id)}
                                className={`flex-1 text-center py-2 hover:bg-background-secondary rounded transition-colors flex items-center justify-center space-x-2 ${
                                    isLiked(post.likes) ? 'text-red-500' : 'text-foreground-muted'
                                }`}
                            >
                                {isLiked(post.likes) ? (
                                    <FaHeart className="text-red-500" />
                                ) : (
                                    <FaRegHeart />
                                )}
                                <span>Like</span>
                            </button>
                            <button
                                onClick={() => setExpandedComments(prev => ({
                                    ...prev,
                                    [post._id]: !prev[post._id]
                                }))}
                                className="flex-1 text-center py-2 hover:bg-background-secondary rounded transition-colors flex items-center justify-center space-x-2 text-foreground-muted"
                            >
                                <FaRegComment />
                                <span>Comment</span>
                            </button>
                            <button className="flex-1 text-center py-2 hover:bg-background-secondary rounded transition-colors flex items-center justify-center space-x-2 text-foreground-muted">
                                <FaShare />
                                <span>Share</span>
                            </button>
                        </div>

                        {/* Comments Section */}
                        {expandedComments[post._id] && (
                            <div className="mt-4 border-t border-border pt-4">
                                {/* Add Comment */}
                                <div className="flex space-x-3 mb-4">
                                    <Image
                                        src={getUserImageSrc()}
                                        alt="Your profile"
                                        width={32}
                                        height={32}
                                        className="rounded-full object-cover"
                                    />
                                    <div className="flex-1 flex gap-2">
                                        <input
                                            type="text"
                                            value={commentInputs[post._id] || ''}
                                            onChange={e => setCommentInputs(prev => ({
                                                ...prev,
                                                [post._id]: e.target.value
                                            }))}
                                            placeholder="Write a comment..."
                                            className="flex-1 rounded-full px-3 py-2 border border-border focus:outline-none focus:border-primary bg-input"
                                            onKeyPress={e => e.key === 'Enter' && handleAddComment(post._id)}
                                        />
                                        <button
                                            onClick={() => handleAddComment(post._id)}
                                            className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm hover:bg-primary-dark transition-colors"
                                        >
                                            Send
                                        </button>
                                    </div>
                                </div>

                                {/* Comments List */}
                                <div className="space-y-4">
                                    {post.comments.map((comment) => (
                                        <div key={comment._id} className="flex space-x-3">
                                            <Image
                                                src={comment.userImage || profile}
                                                alt={`${comment.userFirstName} ${comment.userLastName}`}
                                                width={32}
                                                height={32}
                                                className="rounded-full object-cover flex-shrink-0"
                                            />
                                            <div className="flex-1">
                                                <div className="bg-background-secondary rounded-lg p-3">
                                                    <div className="flex justify-between items-start mb-1">
                                                        <h5 className="font-semibold text-sm">
                                                            {comment.userFirstName} {comment.userLastName}
                                                        </h5>
                                                        <span className="text-xs text-foreground-muted">
                                                            {formatDate(comment.createdAt)}
                                                        </span>
                                                    </div>
                                                    <p className="text-foreground text-sm mb-2">
                                                        {comment.content}
                                                    </p>
                                                    
                                                    {/* Comment Actions */}
                                                    <div className="flex items-center space-x-4 text-xs text-foreground-muted">
                                                        <button
                                                            onClick={() => handleCommentLike(post._id, comment._id)}
                                                            className={`flex items-center space-x-1 ${
                                                                isCommentLiked(comment.likes) ? 'text-red-500' : ''
                                                            }`}
                                                        >
                                                            {isCommentLiked(comment.likes) ? (
                                                                <FaHeart className="text-red-500" size={12} />
                                                            ) : (
                                                                <FaRegHeart size={12} />
                                                            )}
                                                            <span>{comment.likes.length}</span>
                                                        </button>
                                                        <button
                                                            onClick={() => setShowCommentLikes(prev => ({
                                                                ...prev,
                                                                [comment._id]: !prev[comment._id]
                                                            }))}
                                                            className="hover:underline"
                                                        >
                                                            View likes
                                                        </button>
                                                        <button
                                                            onClick={() => toggleReplyInput(comment._id)}
                                                        >
                                                            Reply
                                                        </button>
                                                    </div>

                                                    {/* Show Comment Likes */}
                                                    {showCommentLikes[comment._id] && (
                                                        <div className="mt-2 p-2 bg-background-tertiary rounded">
                                                            <div className="flex justify-between items-center mb-1">
                                                                <h6 className="text-xs font-semibold">Liked by</h6>
                                                                <button
                                                                    onClick={() => setShowCommentLikes(prev => ({ ...prev, [comment._id]: false }))}
                                                                    className="text-xs text-foreground-muted"
                                                                >
                                                                    <MdClose size={12} />
                                                                </button>
                                                            </div>
                                                            {comment.likes.length === 0 ? (
                                                                <p className="text-xs text-foreground-muted">No likes yet</p>
                                                            ) : (
                                                                comment.likes.map((like, index) => (
                                                                    <div key={index} className="flex items-center space-x-1 text-xs">
                                                                        <Image
                                                                            src={like.userImage || profile}
                                                                            alt={`${like.userFirstName} ${like.userLastName}`}
                                                                            width={20}
                                                                            height={20}
                                                                            className="rounded-full object-cover"
                                                                        />
                                                                        <span>{like.userFirstName} {like.userLastName}</span>
                                                                    </div>
                                                                ))
                                                            )}
                                                        </div>
                                                    )}

                                                    {/* Reply Input */}
                                                    {replyInputs[comment._id] && (
                                                        <div className="flex space-x-2 mt-3">
                                                            <input
                                                                type="text"
                                                                value={replyContents[comment._id] || ''}
                                                                onChange={e => setReplyContents(prev => ({
                                                                    ...prev,
                                                                    [comment._id]: e.target.value
                                                                }))}
                                                                placeholder="Write a reply..."
                                                                className="flex-1 rounded-full px-3 py-1 border border-border focus:outline-none focus:border-primary bg-input text-sm"
                                                                onKeyPress={e => e.key === 'Enter' && handleAddReply(post._id, comment._id)}
                                                            />
                                                            <button
                                                                onClick={() => handleAddReply(post._id, comment._id)}
                                                                className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm hover:bg-primary-dark transition-colors"
                                                            >
                                                                Send
                                                            </button>
                                                        </div>
                                                    )}

                                                    {/* Replies */}
                                                    {comment.replies.length > 0 && (
                                                        <div className="mt-3 space-y-2">
                                                            {comment.replies.map((reply) => (
                                                                <div key={reply._id} className="flex space-x-2">
                                                                    <Image
                                                                        src={reply.userImage || profile}
                                                                        alt={`${reply.userFirstName} ${reply.userLastName}`}
                                                                        width={24}
                                                                        height={24}
                                                                        className="rounded-full object-cover flex-shrink-0"
                                                                    />
                                                                    <div className="flex-1 bg-background-tertiary rounded-lg p-2">
                                                                        <div className="flex justify-between items-start mb-1">
                                                                            <h6 className="font-semibold text-xs">
                                                                                {reply.userFirstName} {reply.userLastName}
                                                                            </h6>
                                                                            <span className="text-xs text-foreground-muted">
                                                                                {formatDate(reply.createdAt)}
                                                                            </span>
                                                                        </div>
                                                                        <p className="text-foreground text-xs mb-1">
                                                                            {reply.content}
                                                                        </p>
                                                                        <div className="flex items-center space-x-3 text-xs text-foreground-muted">
                                                                            <button
                                                                                onClick={() => handleReplyLike(post._id, comment._id, reply._id)}
                                                                                className={`flex items-center space-x-1 ${
                                                                                    isReplyLiked(reply.likes) ? 'text-red-500' : ''
                                                                                }`}
                                                                            >
                                                                                {isReplyLiked(reply.likes) ? (
                                                                                    <FaHeart className="text-red-500" size={10} />
                                                                                ) : (
                                                                                    <FaRegHeart size={10} />
                                                                                )}
                                                                                <span>{reply.likes.length}</span>
                                                                            </button>
                                                                            <button
                                                                                onClick={() => setShowReplyLikes(prev => ({
                                                                                    ...prev,
                                                                                    [reply._id]: !prev[reply._id]
                                                                                }))}
                                                                                className="hover:underline"
                                                                            >
                                                                                View likes
                                                                            </button>
                                                                        </div>

                                                                        {/* Show Reply Likes */}
                                                                        {showReplyLikes[reply._id] && (
                                                                            <div className="mt-2 p-2 bg-background rounded">
                                                                                <div className="flex justify-between items-center mb-1">
                                                                                    <h6 className="text-xs font-semibold">Liked by</h6>
                                                                                    <button
                                                                                        onClick={() => setShowReplyLikes(prev => ({ ...prev, [reply._id]: false }))}
                                                                                        className="text-xs text-foreground-muted"
                                                                                    >
                                                                                        <MdClose size={12} />
                                                                                    </button>
                                                                                </div>
                                                                                {reply.likes.length === 0 ? (
                                                                                    <p className="text-xs text-foreground-muted">No likes yet</p>
                                                                                ) : (
                                                                                    reply.likes.map((like, index) => (
                                                                                        <div key={index} className="flex items-center space-x-1 text-xs">
                                                                                            <Image
                                                                                                src={like.userImage || profile}
                                                                                                alt={`${like.userFirstName} ${like.userLastName}`}
                                                                                                width={16}
                                                                                                height={16}
                                                                                                className="rounded-full object-cover"
                                                                                            />
                                                                                            <span>{like.userFirstName} {like.userLastName}</span>
                                                                                        </div>
                                                                                    ))
                                                                                )}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                {posts.length === 0 && (
                    <div className="text-center py-8 text-foreground-muted">
                        No posts yet. Be the first to share something!
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreatePost;