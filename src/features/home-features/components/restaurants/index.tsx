'use client';
import Card from '@/shared/components/card';
import Chip from '@/shared/components/chip/chip';
import Slider from '@/shared/components/slider';
import { restaurants } from '../../mockup';
import Image from 'next/image';
import { circleleft, circleleftmobile, circleright, circlerightmobile, restauranthero } from '@/shared/assets';
import Input from '@/shared/components/input';
import { MarkIcon } from '../../icons';
import Button from '@/shared/components/button';

interface RestaurantsProps {}

export const Restaurants = (props: RestaurantsProps) => {
    return (
        <>
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
                <div className="relative">
                    <Image src={circleleft} alt="image" className="absolute bottom-[40px] max-lg:hidden" />
                    <Image src={circleright} alt="image" className="absolute right-0 max-lg:hidden" />
                    <Image src={circleleftmobile} alt="image" className="absolute hidden top-[-51px] max-lg:block " />
                    <Image
                        src={circlerightmobile}
                        alt="image"
                        className="absolute right-0 hidden top-[148px] max-lg:block"
                    />
                    <div className="flex relative z-10 max-md:flex-wrap max-md:gap-[55px] max-md:justify-center">
                        <div>
                            <Image src={restauranthero} alt="image" />
                        </div>
                        <div className="max-w-[470px] w-full mt-auto max-lg:px-[24px] max-md:max-w-none">
                            <Chip className="mb-[18px]">Map</Chip>
                            <h1 className="text-3xl text-black-light font-bold font-work mb-1 max-lg:text-2xl">
                                Food Map with more than 9000 Restaurants
                            </h1>
                            <p className="text-base text-black-light/50 font-dm mb-[20px]">
                                Best for active freelancers and designers who need more projects and premium features.
                            </p>
                            <div className="flex items-center gap-[30px] mb-[32px] max-lg:flex-col max-lg:items-start w-full">
                                <Input
                                    placeHolder="Your Address..."
                                    endContent={<MarkIcon />}
                                    className="border-[3px] border-gray shadow-inputShadow py-2 px-4 flex-1"
                                />
                                <Button className="py-[14px] px-[28px] justify-center">Search on Map</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
