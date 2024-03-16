import { FC } from 'react';
import Sidebar from '../dashboard/sidebar/Sidebar';
import TeamsWrapper from './TeamsWrapper';

const MyTeams: FC = () => {
    return (
        <div className='flex text-gray-900 bg-gray-100 dark:bg-dark dark:text-light'>
            <Sidebar />
            <TeamsWrapper />
        </div>
    );
};

export default MyTeams;
