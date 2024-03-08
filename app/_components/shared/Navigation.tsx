'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FC, JSX, SVGProps } from 'react';
import { SiFiles } from "react-icons/si";

const Navigation: FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <section className='w-full py-4 px-6 bg-white shadow-md dark:bg-zinc-800'>
            <div className='flex items-center justify-between'>
                <div>
                    <Link href='#'>
                        <HomeIcon className='h-6 w-6 text-zinc-800 dark:text-zinc-200' />
                    </Link>
                </div>
                <div className='hidden md:flex space-x-4'>
                    <Link
                        className='text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100'
                        href='#'
                    >
                        Home
                    </Link>
                    <Link
                        className='text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100'
                        href='#'
                    >
                        About
                    </Link>
                    <Link
                        className='text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100'
                        href='#'
                    >
                        Services
                    </Link>
                    <Link
                        className='text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100'
                        href='#'
                    >
                        Contact
                    </Link>
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
                <Link
                    className='block py-1 text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100'
                    href='#'
                >
                    Home
                </Link>
                <Link
                    className='block py-1 text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100'
                    href='#'
                >
                    About
                </Link>
                <Link
                    className='block py-1 text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100'
                    href='#'
                >
                    Services
                </Link>
                <Link
                    className='block py-1 text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100'
                    href='#'
                >
                    Contact
                </Link>
            </div>
        </section>
    );
};

function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return <SiFiles {...props} />
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <line x1='4' x2='20' y1='12' y2='12' />
            <line x1='4' x2='20' y1='6' y2='6' />
            <line x1='4' x2='20' y1='18' y2='18' />
        </svg>
    );
}

export default Navigation;
