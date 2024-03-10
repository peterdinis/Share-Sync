'use client';

import { ColumnDef } from '@tanstack/react-table';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

interface UploadedFile {
    id: string;
    name: string;
    bytes: number;
    image: string;
    createdAt: string | Date;
};

export const useColumns = (): ColumnDef<UploadedFile>[] => {
    const router = useRouter();

    return [
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
        /* {
            id: 'detail',
            header: 'Detail',
            cell: ({ row }) => <Button variant={"link"} size={"sm"} onClick={() => router.push(`/detail/${row.original.id}`)}>Detail</Button>,
        }, */
    ];
};