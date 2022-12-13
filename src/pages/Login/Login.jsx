import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import PageMeta from '../../component/PageMeta';
import auth from '../../utils/firebase.init';
import LoadingButton from '../../component/LoadingButton';
import { async } from '@firebase/util';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signInWithEmailAndPassword, user, loading, eror] = useSignInWithEmailAndPassword(auth);;
    const [signInWithGoogle, gUser, gLoading, gEror] = useSignInWithGoogle(auth);

    const onSubmit = async data => {
        const { email, password } = data;
        await signInWithEmailAndPassword(email, password);
    }


    return (
        <>
            <PageMeta title='Login' />
            <div className='min-h-screen mx-auto flex flex-col items-center justify-start w-2/3 lg:w-1/3 mt-14'>
                <h2 className='text-center text-xl font-bold text-gray-800 dark:text-gray-200'>Log in</h2>

                <form onSubmit={handleSubmit(onSubmit)} className='w-full mt-8 mb-4'>
                    <div className="relative mb-3">
                        <input type="email" id="email"
                            {...register("email", { required: true })}
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="email" className="absolute text-sm text-gray-400 dark:text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email Address</label>
                    </div>
                    {errors.email && <span>This field is required</span>}

                    <div className="relative mb-4">
                        <input type="password" id="password"
                            {...register("password", { required: true })}
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="password" className="absolute text-sm text-gray-400 dark:text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
                    </div>
                    {errors.password && <span>This field is required</span>}
                    {/* <p className='mb-4 px-2 text-xs text-gray-400 dark:text-gray-200'>We will call or text you to confirm your number. Standard message and data rates may apply.</p> */}

                    {loading || gLoading
                        ? <LoadingButton />
                        : <input type='submit' value='Login' className='w-full px-6 py-3 rounded-xl shadow-sm font-semibold text-white hover:text-gray-100 bg-gradient-to-r from-blue-600 to-blue-500 cursor-pointer' />}
                </form>
                <h2><span className='text-sm text-gray-500 dark:text-gray-200 mt-6'>Don't have an account? </span>
                    <Link to='/signup' className='text-sm font-bold text-gray-700'>Sign up</Link></h2>

                <div className="w-1/2 flex justify-center items-center">
                    <div className='w-full h-[1px] bg-gray-800 mr-1'></div> <span><b>or</b></span> <div className='w-full h-[1px] bg-gray-800 ml-1'></div>
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-2 mt-2">
                    <button type="button" onClick={() => signInWithGoogle()} disabled={gLoading}
                        className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50">Continue with Google</button>
                    /
                    <button type="button" className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50">Continue with Facebook</button>
                </div>
            </div>
        </>
    );
};

export default Login;