'use client';
import Card from '@/shared/components/card';
import Chip from '@/shared/components/chip/chip';
import Slider from '@/shared/components/slider';
import { restaurants } from '../../mockup';

interface RestaurantsProps {}

export const Restaurants = (props: RestaurantsProps) => {
    return (
        <div className="bg-white">
            <div className="container  pb-[96px]">
                <Chip upperCase={true} className=" mb-[18px]">
                    restaurants
                </Chip>
                <h1 className="text-3xl font-bold text-black font-work mb-[14px]">Restaurants</h1>
                <p className="text-base font-dm text-black/50 mb-[38px]">
                    Best for active freelancers and designers who need more projects and premium features.
                </p>
                <Slider
                    data={restaurants}
                    renderComponent={<Card />}
                    spacing={30}
                    setWrapperSize={false}
                    breakpoints={{
                        375: {
                            slidesPerView: 1,
                        },
                        480: {
                            slidesPerView: 2,
                        },

                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                />
            </div>
        </div>
    );
};
