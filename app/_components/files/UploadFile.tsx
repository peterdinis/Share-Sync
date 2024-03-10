import { FC } from 'react';
import UploadModal from './UploadModal';
import Dropzone, { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';
import { Input } from '@/components/ui/input';

interface IUploadFileProps {
    text?: string;
}

const UploadFile: FC<IUploadFileProps> = ({ text }: IUploadFileProps) => {
    return (
        <>
            <UploadModal modalText={text}>
                <div className=' bg-black text-white flex items-center py-2 px-3 rounded-md hover:bg-opacity-80'>
                    <FiUpload size='1.2em' />
                    <span className=' ml-2 text-sm'>Upload Image</span>
                </div>
            </UploadModal>
        </>
    );
};

export default UploadFile;
