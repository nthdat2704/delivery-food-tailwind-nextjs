import { BestDeals, PopularCategories, Restaurants } from '@/features/home-features/components';

export default function Home() {
    return (
        <>
            <PopularCategories />
            <Restaurants />
            <BestDeals />
        </>
    );
}
