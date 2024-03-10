import { NextPage } from 'next';
import HeroWrapper from './_components/hero/HeroWrapper';

const Homepage: NextPage = () => {
    return (
        <div className='mt-3'>
            <HeroWrapper />
        </div>
    );
};

export default Homepage;
