import React from 'react';
import loginIcons from '../../assets/login-image.png'
import { FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <section id='login'>
                <div className='mx-auto container p-4'>
                    <div className='bg-white p-5 w-full max-w-sm mx-auto'>
                        <div className='w-40 h-40 mx-auto'>
                            <img src={loginIcons} alt='login icons' />
                        </div>

                        <form className='pt-3 flex flex-col gap-2'>
                            <div className='grid'>
                                <label>Email : </label>
                                <div className='bg-slate-100 p-2'>
                                    <input
                                        type='email'
                                        placeholder='Enter Your Email'
                                        name='email'
                                        className='w-full h-full outline-none bg-transparent' />
                                </div>
                            </div>

                            <div>
                                <label>Password : </label>
                                <div className='bg-slate-100 p-2 flex'>
                                    <input
                                        type="password"
                                        placeholder='Enter your Password password'
                                        name='password'
                                        className='w-full h-full outline-none bg-transparent' />
                                    <div className='cursor-pointer text-xl'>
                                        <span><FaEyeSlash /></span>
                                    </div>
                                </div>
                                <Link to={'/'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                                    Forgot password ?
                                </Link>
                            </div>

                            <button className='bg-[#FED29C] hover:bg-[#e9ab5f] text-white text-2xl px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>

                        </form>

                        <p className='my-5'>Don't have account ? <Link to={"/"} className=' text-red-600 hover:text-red-700 hover:underline'>Sign up</Link></p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Login;