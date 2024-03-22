"use client"

import {
    createContext,
    ReactNode,
    useState,
    useEffect,
    useContext,
} from 'react';
import { useRouter } from 'next/navigation';
import { account } from '../_appwrite/connect';
import { Loader2 } from 'lucide-react';

/* Code from appwrite models.d.ts  */

type User = {
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
    user: User | null;
}

interface AuthProviderProps {
    children?: ReactNode;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        checkUserStatus();
    }, []);

    const checkUserStatus = async () => {
        try {
            const accountDetails = await account.get();
            setUser(accountDetails);
        } catch (error) {
            // Handle error if needed
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
