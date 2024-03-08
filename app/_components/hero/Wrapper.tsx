import { FC } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroWrapper: FC = () => {
    return (
        <section className='dark:bg-gray-800 dark:text-gray-100'>
            <div className='container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between'>
                <div className='flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left'>
                    <h1 className='text-5xl font-bold leadi sm:text-6xl'>
                        Share
                        <span className='dark:text-violet-400'>Sync</span>
                    </h1>
                    <p className='mt-6 mb-8 text-lg sm:mb-12'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Accusantium, officiis quia. Officiis ratione vel
                        nam accusamus, incidunt quidem voluptas quae quam
                        consequatur quod asperiores sit sunt dolorem maxime
                        excepturi tempora necessitatibus velit sint accusantium
                        numquam saepe fuga beatae esse. Voluptatem?
                    </p>
                    <div className='flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start'>
                        <Button
                            variant={'default'}
                            className='px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900'
                        >
                            <Link href='/login'>Try now</Link>
                        </Button>
                        <Button
                            variant={'secondary'}
                            className='px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100'
                        >
                            <Link href='/register'>Register</Link>
                        </Button>
                    </div>
                </div>
                <div className='flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128'>
                    {/* TODO */}
                    <svg
                        className='object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128'
                        viewBox='0 0 24 24'
                        width='64'
                        height='64'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='#000000'
                    >
                        <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                        <g
                            id='SVGRepo_tracerCarrier'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        ></g>
                        <g id='SVGRepo_iconCarrier'>
                            <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M3 5C3 3.34315 4.34315 2 6 2H18C19.6569 2 21 3.34315 21 5V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V5ZM6 0C3.23858 0 1 2.23858 1 5V19C1 21.7614 3.23858 24 6 24H18C20.7614 24 23 21.7614 23 19V5C23 2.23858 20.7614 0 18 0H6ZM9.70711 13.7071C10.0976 14.0976 10.7308 14.0976 11.1213 13.7071L12 12.8284L12.8787 13.7071C13.2692 14.0976 13.9024 14.0976 14.2929 13.7071C14.6834 13.3166 14.6834 12.6834 14.2929 12.2929L12.2929 10.2929C11.9024 9.90237 11.2692 9.90237 10.8787 10.2929L8.87868 12.2929C8.48815 12.6834 8.48815 13.3166 8.87868 13.7071C9.2692 14.0976 9.90237 14.0976 10.2929 13.7071L12 12.0001L9.70711 13.7071Z'
                            ></path>
                        </g>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default HeroWrapper;
