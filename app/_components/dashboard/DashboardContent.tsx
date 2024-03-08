import { FC } from 'react';
import Header from '../shared/Header';
import UploadedFileList from '../files/UploadedFileList';

const DashboardContent: FC = () => {
    return (
        <>
            <div className='overflow-x-hidden ml-5 py-4 px-8 flex-grow  flex-1'>
                <Header text='HI' />
                <br />
                <div className='mt-2'>
                    <UploadedFileList />
                </div>
            </div>
        </>
    );
};

export default DashboardContent;
