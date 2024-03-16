'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FC} from 'react';
import { account } from '@/app/_appwrite/connect';
import { HomeIcon, MenuIcon } from './Icons';

const Navigation: FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        async function getUser() {
            setUser(await account.get());
        }

        getUser();
    }, []);

    console.log('U', user);

    return (
        <section className='w-full py-4 px-6 bg-white shadow-md dark:bg-zinc-800'>
            <div className='flex items-center justify-between'>
                <div>
                    <Link href='#'>
                        <HomeIcon className='h-6 w-6 text-zinc-800 dark:text-zinc-200' />
                    </Link>
                </div>
                <div className='hidden md:flex space-x-4'>
                    {!user?.email ? (
                        <>
                            <Link
                                className='text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100'
                                href='/'
                            >
                                Home
                            </Link>
                            <Link
                                className='text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100'
                                href='/login'
                            >
                                Login
                            </Link>

                            <Link
                                className='text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100'
                                href='/register'
                            >
                                Register
                            </Link>
                        </>
                    ) : (
                        <>
                            <div className='text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100'>
                                {user?.email}
                            </div>
                        </>
                    )}
                </div>
                <div className='md:hidden'>
                    <Button
                        aria-controls='mobile-menu'
                        aria-expanded={isMobileMenuOpen}
                        size='icon'
                        variant='outline'
                        onClick={toggleMobileMenu}
                    >
                        <MenuIcon className='h-6 w-6 text-zinc-800 dark:text-zinc-200' />
                    </Button>
                </div>
            </div>
            <div
                className={`mt-4 md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                id='mobile-menu'
            >
                {!user?.email ? (
                    <>
                        <Link
                            className='block py-1 text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100'
                            href='/'
                        >
                            Home
                        </Link>
                        <Link
                            className='block py-1 text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100'
                            href='/login'
                        >
                            Login
                        </Link>
                        <Link
                            className='block py-1 text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100'
                            href='/register'
                        >
                            Register
                        </Link>
                    </>
                ) : (
                    <>
                        <div className='text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100'>
                            {user?.email}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Navigation;
