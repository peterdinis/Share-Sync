'use client';

import { FC } from 'react';
import { useToast } from '@/components/ui/use-toast';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { account } from '@/app/_appwrite/connect';
import { useAuthStore } from '@/app/_store/authStore';
import Cookie from "js-cookie";

interface ILoginFormData {
    email: string;
    password: string;
}

const LoginForm: FC = () => {
    const { setUser } = useAuthStore();
    const { toast } = useToast();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginFormData>();

    const loginUser: SubmitHandler<ILoginFormData> = async (
        data: ILoginFormData
    ) => {
        const { email, password } = data;
        const response = await account.createEmailPasswordSession(
            email,
            password
        );
        if (response.current === true) {
            toast({
                duration: 2000,
                className: 'bg-green-500',
                title: 'Successfull login',
            });
            setUser(response);
            Cookie.set("loggedUserEmail", response?.providerUid);
            window.location.replace("/dashboard");
        } else {
            toast({
                duration: 2000,
                className: 'bg-red-500',
                title: 'Login failed',
            });

            return;
        }
    };

    return (
        <>
            <div className='flex justify-center align-top'>
                <div className='lg:w-1/2 xl:max-w-screen-sm'>
                    <div className='mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl'>
                        <h2
                            className='text-center text-4xl text-primary font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold'
                        >
                            Log in
                        </h2>
                        <form onSubmit={handleSubmit(loginUser)}>
                            <div className='mt-12'>
                                <div>
                                    <div className='text-sm font-bold text-gray-700 tracking-wide'>
                                        Email Address
                                    </div>
                                    <input
                                        id='email'
                                        type='email'
                                        className='w-full text-lg py-2 border-b border-gray-300 rounded-2xl focus:outline-none focus:border-indigo-500'
                                        {...register('email', {
                                            required: true,
                                        })}
                                    />
                                    {errors.email && (
                                        <p className='text-red-700 font-bold text-sm mt-3 ml-3'>
                                            Email is required
                                        </p>
                                    )}
                                </div>
                                <div className='mt-8'>
                                    <div className='flex justify-between items-center'>
                                        <div className='text-sm font-bold text-gray-700 tracking-wide'>
                                            Password
                                        </div>
                                    </div>
                                    <input
                                        type='password'
                                        id='password'
                                        className='w-full text-lg py-2 border-b border-gray-300 rounded-2xl focus:outline-none focus:border-indigo-500'
                                        {...register('password', {
                                            required: true,
                                        })}
                                    />
                                    {errors.password && (
                                        <p className='text-red-700 font-bold text-sm mt-3 ml-3'>
                                            Password is required
                                        </p>
                                    )}
                                </div>
                                <div className='mt-10'>
                                    <Button size={'lg'}>Login</Button>
                                </div>
                                <div className='mt-12 text-sm font-display font-semibold text-gray-700 text-center'>
                                    No account ?{' '}
                                    <Link
                                        href='/register'
                                        className='cursor-pointer text-primary'
                                    >
                                        Create new account here
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
