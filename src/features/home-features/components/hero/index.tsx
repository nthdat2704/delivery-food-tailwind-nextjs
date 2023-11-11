import React from 'react';
import Image from 'next/image';
import { herofood } from '../../assets';
interface HeroProps {}

const Hero = (props: HeroProps) => {
    return (
        <div className="min-h-[880px] overflow-hidden bg-hero">
            <div className="container flex items-center">
                <div className="max-w-[512px] w-full">
                    <h3 className="text-orange text-3xl font-normal font-caveat">Best food in town. </h3>
                    <h1 className="text-white text-4xl font-bold font-work">
                        Delivery Food from the Best Restaurants.
                    </h1>
                    <div>input</div>
                </div>
                <div className="flex-1">
                    <Image src={herofood} width={1911} height={1056} alt="hero-food" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
