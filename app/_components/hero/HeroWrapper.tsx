import { FC } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import heroImg from '../../../lib/hero.png';

const HeroWrapper: FC = () => {
    return (
        <section className='dark:bg-gray-800 dark:text-gray-100'>
            <div className='container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between'>
                <div className='flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left'>
                    <h1 className='text-5xl font-bold leadi sm:text-6xl'>
                        Share
                        <span className='text-primary'>Sync</span>
                    </h1>
                    <pre className='mt-6 mb-8 text-lg sm:mb-12 whitespace-pre-line'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deleniti unde voluptatibus repudiandae adipisci minus
                        magnam rerum repellat! Veniam, quos qui totam ducimus
                        ipsam mollitia fugit laborum suscipit iste, repellendus
                        tempora minus, voluptatibus quis quod doloribus magni!
                        Assumenda reiciendis eligendi numquam.
                    </pre>
                    <div className='flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start'>
                        <Button variant={'default'} size={'lg'}>
                            <Link href='/login'>Login</Link>
                        </Button>
                        <Button variant={'secondary'} size={'lg'}>
                            <Link href='/register'>Register</Link>
                        </Button>
                    </div>
                </div>
                <div className='flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128'>
                    <Image
                        src={heroImg}
                        alt='Main image'
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroWrapper;
