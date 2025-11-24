// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';

// import shape1 from '../../../public/shape1.svg';
// import shape2 from '../../../public/shape2.svg';
// import shape3 from '../../../public/shape3.svg';
// import dark_shape from '../../../public/dark_shape.svg';
// import dark_shape1 from '../../../public/dark_shape1.svg';
// import dark_shape2 from '../../../public/dark_shape2.svg';
// import google from '../../../public/google.svg';
// import login from '../../../public/login.png';
// import logo from '../../../public/logo.svg';

// export default function Registration() {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//         rememberMe: true
//     });

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value, type, checked } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: type === 'checkbox' ? checked : value
//         }));
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         // Handle registration logic here
//         console.log('Registration data:', formData);
//     };

//     return (
//         <section className="min-h-screen bg-gray-200 font-poppins relative overflow-hidden">
//             {/* Background Shapes - Hidden on md, shown on lg and above */}
//             <div className="absolute top-0 left-0 z-0 hidden lg:block">
//                 <Image
//                     src={shape1}
//                     alt="Shape"
//                     width={150}
//                     height={150}
//                     className="hidden dark:block"
//                 />
//                 <Image
//                     src={dark_shape}
//                     alt="Dark Shape"
//                     width={150}
//                     height={150}
//                     className="block dark:hidden"
//                 />
//             </div>

//             <div className="absolute top-0 right-5 z-0 hidden lg:block">
//                 <Image
//                     src={shape2}
//                     alt="Shape"
//                     width={450}
//                     height={450}
//                     className="hidden dark:block"
//                 />
//                 <Image
//                     src={dark_shape1}
//                     alt="Dark Shape"
//                     width={450}
//                     height={450}
//                     className="block dark:hidden opacity-5"
//                 />
//             </div>

//             <div className="absolute bottom-0 right-80 z-0 hidden lg:block">
//                 <Image
//                     src={shape3}
//                     alt="Shape"
//                     width={494}
//                     height={494}
//                     className="hidden dark:block"
//                 />
//                 <Image
//                     src={dark_shape2}
//                     alt="Dark Shape"
//                     width={494}
//                     height={494}
//                     className="block dark:hidden opacity-5"
//                 />
//             </div>

//             <div className="max-w-7xl mx-auto px-4 py-25 relative z-10">
//                 <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-15 xl:gap-20">
//                     {/* Left Side - Image - Even smaller with maximum gap */}
//                     <div className="lg:w-2/5 w-full mb-8 lg:mb-0">
//                         <div className="max-w-lg mx-auto">
//                             <div className="block dark:hidden">
//                                 <Image
//                                     src={login}
//                                     alt="Registration"
//                                     width={400}
//                                     height={280}
//                                     className="w-full h-auto"
//                                 />
//                             </div>
//                             <div className="hidden dark:block">
//                                 <Image
//                                     src={login}
//                                     alt="Registration Dark"
//                                     width={400}
//                                     height={280}
//                                     className="w-full h-auto"
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Side - Form - Maximum gap from image */}
//                     <div className="lg:w-1/3 w-full">
//                         <div className="bg-white dark:bg-dark-600 rounded-lg shadow-lg p-12">
//                             {/* Logo */}
//                             <div className="mb-7 text-center">
//                                 <Image
//                                     src={logo}
//                                     alt="Logo"
//                                     width={161}
//                                     height={40}
//                                     className="mx-auto"
//                                 />
//                             </div>

//                             {/* Heading */}
//                             <p className="text-gray-950 text-center mb-2">
//                                 Welcome back
//                             </p>
//                             <h4 className="text-2xl font-medium text-gray-950 text-center mb-12">
//                                 Login to your account
//                             </h4>

//                             {/* Google Sign Up */}
//                             <button
//                                 type="button"
//                                 className="w-full border border-gray-200 bg-white dark:bg-dark-600 rounded-lg py-3 px-15 mb-10 flex items-center justify-center hover:border-primary-500 transition-colors"
//                             >
//                                 <Image
//                                     src={google}
//                                     alt="Google"
//                                     width={20}
//                                     height={20}
//                                     className="mr-2"
//                                 />
//                                 <span className="text-gray-950 font-medium">
//                                     or sign-in with google
//                                 </span>
//                             </button>

//                             {/* Divider */}
//                             <div className="relative mb-10 text-center">
//                                 <div className="absolute left-0 top-1/2 w-28 h-0.5 bg-gray-300 rounded"></div>
//                                 <span className="relative z-10 font-medium bg-white px-4 text-gray-400">
//                                     Or
//                                 </span>
//                                 <div className="absolute right-0 top-1/2 w-28 h-0.5 bg-gray-300 rounded"></div>
//                             </div>

//                             {/* Registration Form */}
//                             <form onSubmit={handleSubmit} className="space-y-4">

//                                 {/* Email */}
//                                 <div>
//                                     <label className="block text-center md:text-left text-gray-950 font-medium mb-2">
//                                         Email
//                                     </label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         className="w-full border border-gray-200 rounded-lg p-2 sm:p-3 text-sm resize-none focus:outline-none focus:border-[#1890ff] focus:ring-1 focus:ring-[#1890ff]"
//                                         placeholder="Enter your email"
//                                         required
//                                     />
//                                 </div>

//                                 {/* Password */}
//                                 <div>
//                                     <label className="block text-center md:text-left text-gray-950 font-medium mb-2">
//                                         Password
//                                     </label>
//                                     <input
//                                         type="password"
//                                         name="password"
//                                         value={formData.password}
//                                         onChange={handleChange}
//                                         className="w-full border border-gray-200 rounded-lg p-2 sm:p-3 text-sm resize-none focus:outline-none focus:border-[#1890ff] focus:ring-1 focus:ring-[#1890ff]"
//                                         placeholder="Enter your password"
//                                         required
//                                     />
//                                 </div>

//                                 {/* remember me */}
//                                 <div className='flex justify-between'>
//                                     <div className="flex items-center justify-center md:justify-start">
//                                         <input
//                                             type="radio"
//                                             name="remember_me"
//                                             checked={formData.rememberMe}
//                                             onChange={handleChange}
//                                             className="w-4 h-4 text-primary-500 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-1"
//                                         />
//                                         <label className="ml-2 text-sm font-medium text-gray-700">
//                                             Remember me
//                                         </label>
//                                     </div>
//                                     <div>
//                                         <p className='text-sm font-medium text-[#1890ff]'>Forgot password?</p>
//                                     </div>
//                                 </div>

//                                 {/* Submit Button */}
//                                 <div className="pt-10 pb-15">
//                                     <button
//                                         type="submit"
//                                         className="w-full bg-[#1890ff] text-white font-semibold py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl"
//                                     >
//                                         Login now
//                                     </button>
//                                 </div>
//                             </form>

//                             {/* Bottom Text */}
//                             <div className="text-center text-sm">
//                                 <p className="text-gray-500">
//                                     Don&apos;t have an account?{' '}
//                                     <a
//                                         href="/register"
//                                         className="text-[#1890ff] font-medium transition-colors"
//                                     >
//                                         Create New Account
//                                     </a>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }














'use client';

import { useState } from 'react';
import Image from 'next/image';
import { signIn, getSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

import google from '../../../public/google.svg';
import logo from '../../../public/logo.svg';

import shape1 from '../../../public/shape1.svg';
import shape2 from '../../../public/shape2.svg';
import shape3 from '../../../public/shape3.svg';
import dark_shape from '../../../public/dark_shape.svg';
import dark_shape1 from '../../../public/dark_shape1.svg';
import dark_shape2 from '../../../public/dark_shape2.svg';
import login from '../../../public/login.png';

// ... your imports remain the same

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: true
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();
    const message = searchParams.get('message');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        // Clear error when user starts typing
        if (error) setError('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const result = await signIn('credentials', {
                email: formData.email,
                password: formData.password,
                redirect: false,
            });

            if (result?.error) {
                setError('Invalid email or password');
            } else {
                // Login successful, redirect to dashboard or intended page
                router.push('/');
            }
        } catch (err) {
            setError('An error occurred during login');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = () => {
        signIn('google', { callbackUrl: '/' });
    };

    return (
        <section className="min-h-screen bg-gray-200 font-poppins relative overflow-hidden">
            {/* ... background shapes remain the same */}

            <div className="absolute top-0 left-0 z-0 hidden lg:block">
                            <div className="relative">
                                <Image
                                    src={shape1}
                                    alt="Shape"
                                    width={150}
                                    height={150}
                                    className="dark:hidden"
                                />
                                <Image
                                    src={dark_shape}
                                    alt="Dark Shape"
                                    width={150}
                                    height={150}
                                    className="hidden dark:block"
                                />
                            </div>
                        </div>
            
                        {/* Shape 2 - Top Right */}
                        <div className="absolute top-0 right-0 z-0 hidden lg:block">
                            <div className="relative">
                                <Image
                                    src={shape2}
                                    alt="Shape"
                                    width={450}
                                    height={450}
                                    className="dark:hidden"
                                />
                                <Image
                                    src={dark_shape1}
                                    alt="Dark Shape"
                                    width={450}
                                    height={450}
                                    className="hidden dark:block opacity-70"
                                />
                            </div>
                        </div>
            
                        {/* Shape 3 - Bottom Right */}
                        <div className="absolute bottom-0 right-10 lg:right-20 xl:right-40 2xl:right-96 z-0 hidden lg:block">
                            <div className="relative">
                                <Image
                                    src={shape3}
                                    alt="Shape"
                                    width={494}
                                    height={494}
                                    className="dark:hidden"
                                />
                                <Image
                                    src={dark_shape2}
                                    alt="Dark Shape"
                                    width={494}
                                    height={494}
                                    className="hidden dark:block opacity-70"
                                />
                            </div>
                        </div>

            <div className="max-w-7xl mx-auto px-4 py-25 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-15 xl:gap-20">
                    {/* Left Side - Image */}
                    <div className="lg:w-2/5 w-full mb-8 lg:mb-0">
                        {/* ... image content remains the same */}

                        <div className="max-w-lg mx-auto">
                             <div className="block dark:hidden">
                                 <Image
                                     src={login}
                                     alt="Registration"
                                     width={400}
                                     height={280}
                                     className="w-full h-auto"
                                 />
                             </div>
                             <div className="hidden dark:block">
                                 <Image
                                     src={login}
                                     alt="Registration Dark"
                                     width={400}
                                     height={280}
                                     className="w-full h-auto"
                                 />
                             </div>
                         </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="lg:w-1/3 w-full">
                        <div className="bg-white dark:bg-dark-600 rounded-lg shadow-lg p-12">
                            {/* Logo */}
                            <div className="mb-7 text-center">
                                <Image
                                    src={logo}
                                    alt="Logo"
                                    width={161}
                                    height={40}
                                    className="mx-auto"
                                />
                            </div>

                            {/* Success Message */}
                            {message && (
                                <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded text-center">
                                    {message}
                                </div>
                            )}

                            {/* Error Message */}
                            {error && (
                                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-center">
                                    {error}
                                </div>
                            )}

                            {/* Heading */}
                            <p className="text-gray-950 text-center mb-2">
                                Welcome back
                            </p>
                            <h4 className="text-2xl font-medium text-gray-950 text-center mb-12">
                                Login to your account
                            </h4>

                            {/* Google Sign In */}
                            <button
                                type="button"
                                onClick={handleGoogleSignIn}
                                disabled={loading}
                                className="w-full border border-gray-200 bg-white dark:bg-dark-600 rounded-lg py-3 px-15 mb-10 flex items-center justify-center hover:border-primary-500 transition-colors disabled:opacity-50"
                            >
                                <Image
                                    src={google}
                                    alt="Google"
                                    width={20}
                                    height={20}
                                    className="mr-2"
                                />
                                <span className="text-gray-950 font-medium">
                                    Sign in with google
                                </span>
                            </button>

                            {/* Divider */}
                            <div className="relative mb-10 text-center">
                                <div className="absolute left-0 top-1/2 w-28 h-0.5 bg-gray-300 rounded"></div>
                                <span className="relative z-10 font-medium bg-white px-4 text-gray-400">
                                    Or
                                </span>
                                <div className="absolute right-0 top-1/2 w-28 h-0.5 bg-gray-300 rounded"></div>
                            </div>

                            {/* Login Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Email */}
                                <div>
                                    <label className="block text-center md:text-left text-gray-950 font-medium mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border border-gray-200 rounded-lg p-2 sm:p-3 text-sm resize-none focus:outline-none focus:border-[#1890ff] focus:ring-1 focus:ring-[#1890ff]"
                                        placeholder="Enter your email"
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                {/* Password */}
                                <div>
                                    <label className="block text-center md:text-left text-gray-950 font-medium mb-2">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full border border-gray-200 rounded-lg p-2 sm:p-3 text-sm resize-none focus:outline-none focus:border-[#1890ff] focus:ring-1 focus:ring-[#1890ff]"
                                        placeholder="Enter your password"
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                {/* Remember me & Forgot password */}
                                <div className='flex justify-between'>
                                    <div className="flex items-center justify-center md:justify-start">
                                        <input
                                            type="checkbox"
                                            name="rememberMe"
                                            checked={formData.rememberMe}
                                            onChange={handleChange}
                                            className="w-4 h-4 text-primary-500 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-1"
                                            disabled={loading}
                                        />
                                        <label className="ml-2 text-sm font-medium text-gray-700">
                                            Remember me
                                        </label>
                                    </div>
                                    <div>
                                        <a href="/forgot-password" className='text-sm font-medium text-[#1890ff] hover:underline'>
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-10 pb-15">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-[#1890ff] text-white font-semibold py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {loading ? 'Signing In...' : 'Login Now'}
                                    </button>
                                </div>
                            </form>

                            {/* Bottom Text */}
                            <div className="text-center text-sm">
                                <p className="text-gray-500">
                                    Don&apos;t have an account?{' '}
                                    <a
                                        href="/register"
                                        className="text-[#1890ff] font-medium transition-colors"
                                    >
                                        Create New Account
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}