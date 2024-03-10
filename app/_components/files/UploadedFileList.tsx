import { FC } from 'react';
import { GlobalTable } from '../shared/GlobalTable';
import { columns } from './columns';

const UploadedFileList: FC = () => {
    return (
        <>
            <GlobalTable columns={columns()} data={[]} />
        </>
    );
};

export default UploadedFileList;