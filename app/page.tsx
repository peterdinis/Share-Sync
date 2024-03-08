import { NextPage } from 'next';
import HeroWrapper from './_components/hero/Wrapper';
import Footer from './_components/shared/Footer';

const Homepage: NextPage = () => {
    return (
        <div className="mt-3">
            <HeroWrapper />
            <Footer />
        </div>
    )
};

export default Homepage;
