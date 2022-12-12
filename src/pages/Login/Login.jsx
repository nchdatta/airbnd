import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import PageMeta from '../../component/PageMeta';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <PageMeta title='Login' />
            <div className='min-h-screen mx-auto flex flex-col items-center justify-start w-2/3 lg:w-1/3 mt-14'>
                <h2 className='text-center text-xl font-bold text-gray-800 dark:text-gray-200'>Log in</h2>

                <form onSubmit={handleSubmit(onSubmit)} className='w-full mt-8 mb-4'>
                    <div className="border rounded-xl shadow-sm px-3 py-2">
                        <label htmlFor="country_code" className="text-xs text-gray-500 dark:text-gray-200">Country/ Region</label>
                        <select id="country_code"
                            {...register("countrycode", { required: true })}
                            className="block py-2 px-0 w-full text-sm text-gray-500 bg-transparent border-0 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    {errors.countrycode && <span>This field is required</span>}
                    <div className='border rounded-xl shadow-sm px-3 py-3 my-3'>
                        <div class="relative z-0">
                            <input type="tel" id="phone"
                                {...register("phone", { required: true })}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="phone" className="absolute text-sm text-gray-400 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                        </div>
                    </div>
                    {errors.phone && <span>This field is required</span>}
                    <p className='mb-4 px-2 text-xs text-gray-400 dark:text-gray-200'>We will call or text you to confirm your number. Standard message and data rates may apply.</p>

                    <button className='w-full px-6 py-3 rounded-xl shadow-sm font-semibold text-white hover:text-gray-100 bg-gradient-to-r from-blue-600 to-blue-500'>Continue</button>
                </form>
                <h2><span className='text-sm text-gray-500 dark:text-gray-200 mt-6'>Don't have an account? </span>
                    <Link to='/signup' className='text-md font-bold text-gray-700'>Sign up</Link></h2>

            </div>
        </>
    );
};

export default Login;