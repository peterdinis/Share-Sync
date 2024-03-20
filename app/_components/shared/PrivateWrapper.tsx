'use client';

import { useRouter } from 'next/navigation';
import { FC, ReactNode, useEffect, useState } from 'react';
import { account } from '@/app/_appwrite/connect';
import { toast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';

interface IPrivateWrapperProps {
    children?: ReactNode;
}

const PrivateWrapper: FC<IPrivateWrapperProps> = ({
    children,
}: IPrivateWrapperProps) => {
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        const checkSession = async () => {
            try {
                const session = account.get();
                if (!session) {
                    toast({
                        variant: 'destructive',
                        title: 'Session Expired',
                    });
                    router.push('/login');
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
                router.push('/login');
            }
        };

        checkSession();
    }, []);

    return (
        <>
            {loading ? (
                <>
                    <main className='w-screen h-screen fixed flex items-center justify-center'>
                        <Loader2 className='animate-spin' />
                    </main>
                </>
            ) : (
                <>{children}</>
            )}
        </>
    );
};

export default PrivateWrapper;
