'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { FC, useMemo } from 'react';
import { motion } from 'framer-motion';
import getScrollAnimation from '@/lib/scrollAnimation';
import Link from 'next/link';

/* TODO: Later break cards to new component */

const TeamsCards: FC = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <motion.div variants={scrollAnimation}>
            <section id='pricing' className='container sm:py-32'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <Card className='drop-shadow-xl shadow-black/10 dark:shadow-white/10'>
                        <CardHeader>
                            <CardTitle className='flex item-center justify-between'>
                                Team Name
                                <Badge
                                    variant='secondary'
                                    className='text-sm text-primary'
                                >
                                    Owner
                                </Badge>
                            </CardTitle>

                            <CardDescription>Members: 1234</CardDescription>
                        </CardHeader>

                        <CardContent>
                            <Button variant={'default'} className='w-full'>
                                <Link href='#'>Team Detail</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </motion.div>
    );
};

export default TeamsCards;
