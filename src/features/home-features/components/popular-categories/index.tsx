'use client';
import CardCategories from '@/shared/components/card-categories';
import Chip from '@/shared/components/chip/chip';
import Slider from '@/shared/components/slider';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { categories } from '../../mockup/categories';

interface PopularCategoriesProps {}
export const PopularCategories = (props: PopularCategoriesProps) => {
    return (
        <div className="bg-white">
            <div className="container flex flex-col items-center py-[75px] ">
                <Chip upperCase={true} className="mb-[18px]">
                    Categories
                </Chip>
                <h1 className="text-3xl text-black font-bold max-md:text-2xl mb-[50px] flex items-center max-md:text-center">
                    Popular Categories
                </h1>
                <Slider
                    data={categories}
                    InnerComponent={<CardCategories />}
                    className="!hidden max-md:!block rounded-md"
                />
                <div className="grid grid-cols-6 max-lg:grid-cols-3 max-md:hidden gap-[30px] w-full">
                    {categories.map((item) => {
                        return (
                            <CardCategories
                                key={item.id}
                                icon={item.icon}
                                title={item.title}
                                subTitle={item.subTitle}
                                amount={item.amount}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
