import { FC } from 'react';
import Sidebar from '../dashboard/sidebar/Sidebar';

const MyTeams: FC = () => {
    return (
        <div className='flex text-gray-900 bg-gray-100 dark:bg-dark dark:text-light'>
            <Sidebar />
        </div>
    )
};

export default MyTeams;
