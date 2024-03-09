'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { FC, ReactNode, useState } from 'react';
import Header from '../shared/Header';

interface IUploadModalProps {
    children?: ReactNode;
    modalText?: string;
}

const UploadModal: FC<IUploadModalProps> = ({
    children,
    modalText,
}: IUploadModalProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog
            open={isOpen}
            onOpenChange={(v: boolean | ((prevState: boolean) => boolean)) => {
                if (!v) {
                    setIsOpen(v);
                }
            }}
        >
            <DialogTrigger
                onClick={() => {
                    setIsOpen(true);
                }}
                asChild
            >
                <Button variant={'ghost'} size='sm'>
                    {modalText}
                </Button>
            </DialogTrigger>

            <DialogContent>
                <Header text='Upload new file' />
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default UploadModal;
