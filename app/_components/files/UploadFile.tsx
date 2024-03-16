'use client';

import { FC, useState } from 'react';
import UploadModal from './UploadModal';
import { uploadFile } from '@/app/_appwrite/services/uploadFunctions';
import { toast } from '@/components/ui/use-toast';

interface IUploadFileProps {
    text?: string;
}

const UploadFile: FC<IUploadFileProps> = ({ text }: IUploadFileProps) => {
    const [image, setImage] = useState<File | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent the default form submission behavior
        if (image) {
            try {
                const response = await uploadFile(image);
                console.log(response);
                toast({
                    duration: 2000,
                    className: 'bg-green-500',
                    title: 'File uploaded successfully',
                });
            } catch (error) {
                console.error(error);
                toast({
                    duration: 2000,
                    className: 'bg-red-500',
                    title: 'Error uploading file',
                });
            }
        } else {
            toast({
                duration: 2000,
                className: 'bg-red-500',
                title: 'No file selected',
            });
        }
    };

    return (
        <>
            <UploadModal modalText={text}>
                <form onSubmit={handleSubmit} className='mt-8 space-y-3'>
                    <div className='grid grid-cols-1 space-y-2'>
                        <label className='text-sm font-bold text-gray-500 tracking-wide'>
                            Attach Document
                        </label>
                        <div className='flex items-center justify-center w-full'>
                            <label className='flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center'>
                                <div className='h-full w-full text-center flex flex-col justify-center items-center'>
                                    {/* SVG and Image placeholder */}
                                    <p className='pointer-none text-gray-500'>
                                        <span className='text-sm'>
                                            Drag and drop
                                        </span>{' '}
                                        files here <br /> or{' '}
                                        <a
                                            href='#'
                                            className='text-blue-600 hover:underline'
                                        >
                                            select a file
                                        </a>{' '}
                                        from your computer
                                    </p>
                                </div>
                                <input
                                    onChange={(event) =>
                                        setImage(
                                            event.target.files
                                                ? event.target.files[0]
                                                : null
                                        )
                                    }
                                    type='file'
                                    className='hidden'
                                />
                            </label>
                        </div>
                    </div>
                    <p className='text-sm text-gray-300'>
                        <span>File type: doc, pdf, types of images</span>
                    </p>
                    <div>
                        <button
                            type='submit'
                            className='my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300'
                        >
                            Upload
                        </button>
                    </div>
                </form>
            </UploadModal>
        </>
    );
};

export default UploadFile;
