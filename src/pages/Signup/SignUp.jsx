import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import PageMeta from '../../component/PageMeta';
import auth from '../../utils/firebase.init';
import LoadingButton from '../../component/LoadingButton';

const SignUp = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [createUserWithEmailAndPassword, user, creating, cError] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    const [signInWithGoogle, gUser, loading, gEror] = useSignInWithGoogle(auth);

    const onSubmit = async data => {
        const { name, email, countrycode, number, password } = data;
        let phone;
        if (number.charAt(0) == 0) {
            phone = countrycode + number.slice(1);
        } else {
            phone = countrycode + number;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }

    if (user || gUser) {
        navigate('/', { replace: true });
    }
    // if (cError) {
    //     console.log(cError)
    // }

    return (
        <>
            <PageMeta title='Signup' />
            <div className='min-h-screen mx-auto flex flex-col items-center justify-start w-2/3 lg:w-1/3 mt-14'>
                <h2 className='text-center text-xl font-bold text-gray-800 dark:text-gray-200'>Sign up</h2>

                <form onSubmit={handleSubmit(onSubmit)} className='w-full mt-8 mb-4'>
                    <div className="relative mb-3">
                        <input type="text" id="name"
                            {...register("name", { required: true })}
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="name" className="absolute text-sm text-gray-400 dark:text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Full Name</label>
                    </div>
                    {errors.name && <span>This field is required</span>}
                    <div className="relative mb-3">
                        <input type="email" id="email"
                            {...register("email", { required: true })}
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="email" className="absolute text-sm text-gray-400 dark:text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email Address</label>
                    </div>
                    {errors.email && <span>This field is required</span>}

                    <div className="border rounded-xl shadow-sm px-3 mb-3">
                        <label htmlFor="country_code" className="text-xs text-gray-500 dark:text-gray-200">Country/ Region</label>
                        <select id="country_code"
                            {...register("countrycode", { required: true })}
                            className="block py-2 px-0 w-full text-sm text-gray-500 bg-transparent border-0 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option value="+880">Bangladesh</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    {errors.countrycode && <span>This field is required</span>}
                    <div className="relative mb-3">
                        <input type="tel" id="number"
                            {...register("number", { required: true })}
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="number" className="absolute text-sm text-gray-400 dark:text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Phone Number</label>
                    </div>
                    {errors.number && <span>This field is required</span>}
                    <div className="relative mb-3">
                        <input type="password" id="password"
                            {...register("password", { required: true })}
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="password" className="absolute text-sm text-gray-400 dark:text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
                    </div>
                    {errors.password && <span>This field is required</span>}
                    {/* <p className='mb-4 px-2 text-xs text-gray-400 dark:text-gray-200'>We will call or text you to confirm your number. Standard message and data rates may apply.</p> */}

                    {creating || loading
                        ? <LoadingButton />
                        : <input type='submit' value='Signup'
                            className='w-full px-6 py-3 rounded-xl shadow-sm font-semibold text-white hover:text-gray-100 bg-gradient-to-r from-blue-600 to-blue-500 cursor-pointer' />}
                </form>
                <h2><span className='text-sm text-gray-500 dark:text-gray-200 mt-6'>Already have an account? </span>
                    <Link to='/login' className='text-sm font-bold text-gray-700'>Login</Link></h2>

                <div className="w-1/2 flex justify-center items-center">
                    <div className='w-full h-[1px] bg-gray-800 mr-1'></div> <span><b>or</b></span> <div className='w-full h-[1px] bg-gray-800 ml-1'></div>
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-2 mt-2">
                    <button type="button" onClick={() => signInWithGoogle()} disabled={loading}
                        className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50">Continue with Google</button>
                    /
                    <button type="button" className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50">Continue with Facebook</button>
                </div>
            </div>
        </>
    );
};

export default SignUp;