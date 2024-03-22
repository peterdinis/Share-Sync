'use client';

import { useAuth } from '@/app/_context/AuthContext';
import { FC, ReactNode, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface IPrivateWrapper {
    children?: ReactNode;
}

const PrivateWrapper: FC<IPrivateWrapper> = ({ children }: IPrivateWrapper) => {
    const { user } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const currentPath = pathname;
        const isHomePage = currentPath === '/';

        if (!user && !isHomePage) {
            router.push('/login');
        }
    }, [user]);

    return <>{children}</>;
};

export default PrivateWrapper;
