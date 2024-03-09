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

                </div>
            </div>
        </section>
    );
};

export default HeroWrapper;
