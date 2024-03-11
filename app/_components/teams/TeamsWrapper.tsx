import { FC } from 'react';
import Header from '../shared/Header';
import TeamsCards from './TeamsCards';

const TeamsWrapper: FC = () => {
    return (
        <div className='overflow-x-hidden ml-5 py-4 px-8 flex-grow  flex-1'>
            <Header text='My Teams' />
            <TeamsCards />
        </div>
    );
};

export default TeamsWrapper;
