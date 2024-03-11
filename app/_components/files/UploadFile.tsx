'use client';

import { FC, useCallback, useState } from 'react';
import UploadModal from './UploadModal';
import Dropzone, { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';
import { Input } from '@/components/ui/input';

interface IUploadFileProps {
    text?: string;
}

const UploadFile: FC<IUploadFileProps> = ({ text }: IUploadFileProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [progress, setProgress] = useState(0);
    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            const selectedImage = acceptedFiles[0];
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });
    return (
        <>
            <UploadModal modalText={text}>
                <div
                    {...getRootProps()}
                    className=' flex items-center justify-center w-full'
                >
                    <Input
              {...getInputProps()}
              id="dropzone-file"
              accept="image/png, image/jpeg"
              type="file"
              className='bg-green-500'
              placeholder='TU som'
              /* disabled={loading || uploadedImagePath !== null}
              onChange={handleImageChange} */
            />
                </div>
            </UploadModal>
        </>
    );
};

export default UploadFile;
