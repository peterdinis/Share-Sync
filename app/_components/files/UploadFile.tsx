import { FC } from 'react';
import UploadModal from './UploadModal';

interface IUploadFileProps {
    text?: string;
}

const UploadFile: FC<IUploadFileProps> = ({ text }: IUploadFileProps) => {
    return (
        <>
            <UploadModal modalText={text}></UploadModal>
        </>
    );
};

export default UploadFile;
