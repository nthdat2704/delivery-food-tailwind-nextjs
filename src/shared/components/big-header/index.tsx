'use client';
import { logo } from '@/shared/assets';
import { MENU_LIST } from '@/shared/constants';
import { CartIcon, HamburgerIcon } from '@/shared/icons';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../button';
import SideBarMenu from '../sidebar-menu';
import { useState } from 'react';
import Input from '../input';
import { herofood } from '@/features/home-features/assets';
import SocialNetwork from '../social-network';
interface BigHeaderProps {}

const BigHeader = (props: BigHeaderProps) => {
    const [showSideBar, setShowSideBar] = useState(false);
    const handleToggleSideBar = () => {
        setShowSideBar(!showSideBar);
    };
    return (
        <header className="bg-hero bg-cover overflow-hidden pb-20 max-lg:bg-hero-mobile max-lg:bg-cover">
            <div className="container">
                <div className=" flex justify-between items-center py-4 ">
                    <Link href="/">
                        <Image src={logo} width={100} height={48} className="object-contain" alt="logo" />
                    </Link>
                    <ul className="flex gap-[60px] text-white text-base max-lg:hidden">
                        {MENU_LIST.map((item) => (
                            <li key={item.id} className="hover:text-orange">
                                <Link href={item.link}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-4 items-center">
                        <Button variant="outlined" color="secondary" className="rounded-md max-lg:hidden">
                            Sign Up
                        </Button>
                        <Button makeCircle={true} roundedFull={true} size="small">
                            <CartIcon />
                        </Button>
                        <Button
                            makeCircle={true}
                            roundedFull={true}
                            size="small"
                            className="hidden max-lg:block"
                            onClick={handleToggleSideBar}
                        >
                            <HamburgerIcon />
                        </Button>
                    </div>
                    {showSideBar && <SideBarMenu />}
                </div>
            </div>

            <div className="container ">
                <div className="flex max-lg:flex-col mt-16 relative max-lg:gap-16">
                    <div className="max-w-[512px] w-full pt-12">
                        <h3 className="text-orange text-3xl font-normal font-caveat ">Best food in town. </h3>
                        <h1 className="text-white text-4xl font-bold font-work mb-12 max-lg:text-3xl max-lg:mb-8">
                            Delivery Food from the Best Restaurants.
                        </h1>
                        <div>
                            <Input
                                placeHolder="Food and Restaurants…"
                                className="shadow"
                                endContent={
                                    <div className="p-[2px]">
                                        <Button className="px-8 rounded-md">Search</Button>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                    <div className="flex-1">
                        <Image
                            src={herofood}
                            width={1911}
                            height={1056}
                            alt="hero-food"
                            className="object-contain ml-12"
                        />
                    </div>
                    <SocialNetwork className="absolute -bottom-8" />
                </div>
            </div>
        </header>
    );
};

export default BigHeader;
