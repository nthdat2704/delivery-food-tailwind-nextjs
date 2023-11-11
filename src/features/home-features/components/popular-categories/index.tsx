import CardCategories from '@/shared/components/card-categories';
import Chip from '@/shared/components/chip/chip';
import { categories } from '../../mockup/categories';

interface PopularCategoriesProps {}

export const PopularCategories = (props: PopularCategoriesProps) => {
    return (
        <div className="bg-white">
            <div className="container flex flex-col items-center py-[75px] ">
                <Chip upperCase={true} className="mb-[18px]">
                    Categories
                </Chip>
                <h1 className="text-3xl text-black font-bold max-md:text-2xl mb-[50px] flex items-center">
                    Popular Categories
                </h1>
                <div className="grid grid-cols-6 max-lg:grid-cols-3 max-md:grid-cols-1 gap-[30px] w-full">
                    {categories.map((item) => {
                        const Icon = item.icon;
                        return (
                            <CardCategories
                                key={item.id}
                                image={<Icon />}
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
