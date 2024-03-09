'use client';

import { useRouter } from 'next/navigation';
import { useState, FC } from 'react';
import { useToast } from '@/components/ui/use-toast';
import Link from 'next/link';
import Input from '../shared/Input';
import { Button } from '@/components/ui/button';
import {useForm, SubmitHandler} from "react-hook-form";
import { account } from '@/app/_appwrite/connect';

interface IRegisterFormData {
    email: string;
    password: string;
}

const RegisterForm: FC = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<IRegisterFormData>();
    
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });
    const { toast } = useToast();

    const registerUser: SubmitHandler<IRegisterFormData> = async (data: IRegisterFormData) => {
        const { email, password } = data;
        const response = await account.create('unique()', email, password);
        console.log(response)
    }

    return (
        <>
            <div className='flex justify-center align-top'>
                <div className='lg:w-1/2 xl:max-w-screen-sm'>
                    <div className='mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl'>
                        <h2
                            className='text-center text-4xl text-primary font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold'
                        >
                            Register
                        </h2>
                        <form onSubmit={handleSubmit(registerUser)}>
                        <div className='mt-12'>
                            <div>
                                <div className='text-sm font-bold text-gray-700 tracking-wide'>
                                    Email Address
                                </div>
                                <Input
                                    id='email'
                                    type='email'
                                    value={credentials.email}
                                    {...register('email', { required: true })} 
                                />
                                {errors.email && <p className="text-red-700 font-bold text-xl">Email is required</p>}

                            </div>
                            <div className='mt-8'>
                                <div className='flex justify-between items-center'>
                                    <div className='text-sm font-bold text-gray-700 tracking-wide'>
                                        Password
                                    </div>
                                </div>
                                <Input
                                    type='password'
                                    id='password'
                                    value={credentials.password}
                                    {...register('password', { required: true })}
                                />
                                {errors.password && <p className='text-red-700 font-bold text-xl'>Password is required</p>}
                            </div>
                            <div className='mt-10'>
                                <Button size={'lg'}>
                                    Register
                                </Button>
                            </div>
                            <div className='mt-12 text-sm font-display font-semibold text-gray-700 text-center'>
                                Already have an account ?{' '}
                                <Link
                                    href='/login'
                                    className='cursor-pointer text-primary'
                                >
                                    Login
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

export default RegisterForm;
