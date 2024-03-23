'use client';

import { FC, useState } from 'react';
import classNames from 'classnames';
import { XCircle, Menu, Upload, Files } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { IoMdLogOut } from 'react-icons/io';
import { account } from '@/app/_appwrite/connect';
import Cookie from 'js-cookie';
import UploadFile from '../../files/UploadFile';
import { toast } from '@/components/ui/use-toast';

const Sidebar: FC = () => {
    const [collapsed, setSidebarCollapsed] = useState(false);

    const logoutUser = async () => {
        try {
            await account.deleteSession('current');
            Cookie.remove('loggedUserEmail');
            toast({
                duration: 2000,
                title: 'Logout was successull',
                className: 'bg-green-500',
            });
            window.location.replace('/login');
        } catch (error) {
            toast({
                duration: 2000,
                title: 'Logout failed',
                className: 'bg-red-500',
            });
        }
    };

    return (
        <div
            className={classNames({
                'grid min-h-screen': true,
                'grid-cols-sidebar': !collapsed,
                'grid-cols-sidebar-collapsed': collapsed,
                'transition-[grid-template-columns] duration-300 ease-in-out':
                    true,
            })}
        >
            <div className='bg-white text-black'>
                <button onClick={() => setSidebarCollapsed((prev) => !prev)}>
                    {collapsed === true ? (
                        <Menu className='w-7 h-7' />
                    ) : (
                        <XCircle className='w-7 h-7' />
                    )}
                </button>
                {collapsed === false ? (
                    <>
                        <div>
                            <div className='mt-8'>
                                <Button variant={'ghost'} value='sm'>
                                    <Upload />
                                    <UploadFile text='Upload file' />
                                </Button>
                            </div>

                            <div className='mt-8'>
                                <Button variant={'ghost'} value='sm'>
                                    <Files />
                                    <Link href='/dashboard'>My all files</Link>
                                </Button>
                            </div>

                            <div className='mt-8'>
                                <Button
                                    onClick={logoutUser}
                                    variant={'ghost'}
                                    value='sm'
                                >
                                    <IoMdLogOut className='w-8 h-8' />
                                    <span>Logout</span>
                                </Button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div>
                        <div className='mt-8'>
                            <div>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Button
                                                variant={'ghost'}
                                                size={'sm'}
                                            >
                                                <Upload />
                                                <UploadFile />

                                                <TooltipContent>
                                                    Upload file
                                                </TooltipContent>
                                            </Button>
                                        </TooltipTrigger>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <div className='mt-8'>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Button
                                                variant={'ghost'}
                                                size={'sm'}
                                            >
                                                <Link href='/dashboard'>
                                                    <Files />
                                                </Link>
                                                <TooltipContent>
                                                    My files
                                                </TooltipContent>
                                            </Button>
                                        </TooltipTrigger>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <div className='mt-8'>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Button
                                                variant={'ghost'}
                                                size={'sm'}
                                                onClick={logoutUser}
                                            >
                                                <span>
                                                    <IoMdLogOut className='w-8 h-8' />
                                                </span>
                                                <TooltipContent>
                                                    Logout
                                                </TooltipContent>
                                            </Button>
                                        </TooltipTrigger>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
