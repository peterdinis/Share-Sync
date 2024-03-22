'use client';

import { useAuth } from '@/app/_context/AuthContext';
import { FC, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface IPrivateWrapper {
    children?: ReactNode;
}

const PrivateWrapper: FC<IPrivateWrapper> = ({ children }: IPrivateWrapper) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    }, [user]);

    return <>{children}</>;
};

export default PrivateWrapper;
