'use client';

import { ColumnDef } from '@tanstack/react-table';

export type UploadedFile = {
    id: string;
    name: string;
    bytes: number;
    image: string;
    createdAt: string | Date;
};

export const columns: ColumnDef<UploadedFile>[] = [
    {
        accessorKey: 'name',
        header: 'Name',
    },
    {
        accessorKey: 'bytes',
        header: 'Bytes',
    },
    {
        accessorKey: 'image',
        header: 'Image',
    },

    {
        accessorKey: 'createdAt',
        header: 'Created At',
    },
];
