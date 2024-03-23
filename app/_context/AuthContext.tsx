'use client';

import {
    createContext,
    ReactNode,
    useState,
    useEffect,
    useContext,
    FC,
} from 'react';
import { account } from '../_appwrite/connect';
import { Loader2 } from 'lucide-react';
import { toast} from '@/components/ui/use-toast';

/* Code from appwrite models.d.ts User i name this as AppwriteUser  */

type AppwriteUser = {
    /**
     * User ID.
     */
    $id: string;
    /**
     * User creation date in ISO 8601 format.
     */
    $createdAt: string;
    /**
     * User update date in ISO 8601 format.
     */
    $updatedAt: string;
    /**
     * User name.
     */
    name: string;
    /**
     * Hashed user password.
     */
    password?: string;
    /**
     * Password hashing algorithm.
     */
    hash?: string;
    /**
     * Password hashing algorithm configuration.
     */
    hashOptions?: object;
};

interface AuthContextType {
    user: AppwriteUser | null;
}

interface AuthProviderProps {
    children?: ReactNode;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
});

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<AppwriteUser | null>(null);

    useEffect(() => {
        checkUserStatus();
    }, []);

    const checkUserStatus = async () => {
        try {
            const accountDetails = await account.get();
            setUser(accountDetails);
        } catch (error) {
            toast({
                title: "Something went wrong user",
                duration: 2000,
                className: "bg-red-600"
            })
        }
        setLoading(false);
    };

    const contextData: AuthContextType = {
        user,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? (
                <Loader2 className='animate-spin'>Loading...</Loader2>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
