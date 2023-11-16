import Card from '@/shared/components/card';
import Chip from '@/shared/components/chip/chip';
import { bestDeals } from '../../mockup';

interface BestDealsProps {}

export const BestDeals = (props: BestDealsProps) => {
    return (
        <div className="bg-white pt-[170px]">
            <div className="container">
                <Chip upperCase={true} className="mb-[18px]">
                    restaurants
                </Chip>
                <h1 className="text-3xl text-black-light font-bold font-work mb-[14px] max-lg:text-2xl ">Best Deals</h1>
                <p className="text-base text-black-light/50 font-dm mb-[38px]">
                    Best for active freelancers and designers who need more projects and premium features.
                </p>
                <div className="grid grid-cols-2 gap-[30px] max-lg:grid-cols-1">
                    {bestDeals.map((item, index) => {
                        return <Card horizontal={true} className="max-sm:flex-col" {...item} />;
                    })}
                </div>
            </div>
        </div>
    );
};
