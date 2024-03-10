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
import { AiOutlineTeam } from 'react-icons/ai';
import { IoMdLogOut } from 'react-icons/io';
import { account } from '@/app/_appwrite/connect';
import { useRouter } from 'next/navigation';
import Cookie from 'js-cookie';
import UploadFile from '../files/UploadFile';

const Sidebar: FC = () => {
    const [collapsed, setSidebarCollapsed] = useState(false);
    const router = useRouter();

    const logoutUser = async () => {
        await account.deleteSession('current');
        Cookie.remove('loggedUserEmail');
        window.location.replace('/login');
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
                                    <UploadFile />
                                </Button>
                            </div>

                            <div className='mt-8'>
                                <Button variant={'ghost'} value='sm'>
                                    <Files />
                                    <Link href='/dashboard'>My all files</Link>
                                </Button>
                            </div>

                            <div className='mt-8'>
                                <Button variant={'ghost'} value='sm'>
                                    <AiOutlineTeam className='w-8 h-8' />
                                    <Link href='/teams'>My teams</Link>
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
                            <div className='mt-8'>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Button
                                                variant={'ghost'}
                                                size={'sm'}
                                            >
                                                <Link href='/upload'>
                                                    <Upload />
                                                    <UploadFile />
                                                </Link>
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
                                            >
                                                <Link href='/teams'>
                                                    <AiOutlineTeam className='w-8 h-8' />
                                                </Link>
                                                <TooltipContent>
                                                    My Teams
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
