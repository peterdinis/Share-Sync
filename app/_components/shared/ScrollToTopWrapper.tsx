'use client';

import { FC, Fragment, ReactNode } from 'react';
import ScrollToTop from 'react-scroll-to-top';

interface IScrollToTopWrapperProps {
    children?: ReactNode;
}

const ScrollToTopWrapper: FC<IScrollToTopWrapperProps> = ({
    children,
}: IScrollToTopWrapperProps) => {
    return (
        <Fragment>
            {children}
            <ScrollToTop smooth={true} />
        </Fragment>
    );
};

export default ScrollToTopWrapper;
