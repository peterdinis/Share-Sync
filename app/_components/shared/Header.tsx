'use client';

import { FC } from 'react';

type HeaderType = {
    text: string;
};

const Header: FC<HeaderType> = ({ text }: HeaderType) => {
    return (
        <h2 className='mt-10 text-center pb-2 text-3xl font-semibold tracking-tight transition-colors'>
            {text}
        </h2>
    );
};

export default Header;
