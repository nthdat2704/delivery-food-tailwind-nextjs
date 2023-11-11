import { ApplePayIcon, AppleStoreIcon, GooglePlayIcon, MasterCardIcon, SendIcon, VisaCardIcon } from '@/shared/icons';
import Button from '../button';
import Image from 'next/image';
import { iphone } from '@/shared/assets';
import SocialNetwork from '../social-network';
import Input from '../input';

interface FooterProps {}

const Footer = (props: FooterProps) => {
    return (
        <footer>
            <div className="bg-green-dark">
                <div className="container flex gap-5 max-md:flex-col max-md:items-center ">
                    <div className="max-w-[402px] w-full py-24 ">
                        <h1 className="text-3xl text-white font-work font-bold mb-9 max-md:text-2xl">
                            Order Food in Our App Easily
                        </h1>
                        <div className="flex gap-8 max-md:gap-[10px]">
                            <Button startIcon={<AppleStoreIcon />} className="px-6 max-md:px-5">
                                App Store
                            </Button>
                            <Button startIcon={<GooglePlayIcon />} className="px-6 max-md:px-5">
                                Google Play
                            </Button>
                        </div>
                    </div>
                    <div className=" flex-1 max-h-[407px] overflow-hidden max-md:max-h-[342px]">
                        <Image
                            src={iphone}
                            alt="iphone"
                            width={567}
                            height={647}
                            className="pt-[74px] ml-auto max-md:pt-0"
                        />
                    </div>
                </div>
                <div className="bg-black-light">
                    <div className="container flex justify-between pt-[58px] pb-[80px] border-b-[1px] border-white flex-wrap gap-3">
                        <div className="max-w-[160px] w-full ">
                            <h1 className="font-work text-white text-2xl font-bold mb-[38px]">FooD</h1>
                            <SocialNetwork />
                        </div>
                        <div className="max-w-[253px] w-full text-white">
                            <p className="uppercase font-dm text-sm mb-8">Menu</p>
                            <div className="flex justify-between ">
                                <ul>
                                    <li className="text-base">About</li>
                                    <li className="text-base">Restaurants</li>
                                </ul>
                                <ul>
                                    <li className="text-base">Map</li>
                                    <li className="text-base">Submit</li>
                                </ul>
                            </div>
                        </div>
                        <div className="max-w-[270px] w-full text-white">
                            <p className="uppercase font-dm text-sm mb-[38px]">Subscribe</p>
                            <div>
                                <Input className="py-2 pr-3" placeHolder="Your email" endContent={<SendIcon />} />
                            </div>
                        </div>
                    </div>
                    <div className="container flex justify-between py-[46px] max-md:flex-col max-md:gap-12 max-md:items-center">
                        <div className="flex gap-4 ">
                            <span>
                                <VisaCardIcon />
                            </span>
                            <span>
                                <MasterCardIcon />
                            </span>
                            <span>
                                <ApplePayIcon />
                            </span>
                        </div>
                        <div className="max-w-[455px] w-full ">
                            <ul className="flex items-center justify-between text-white max-md:flex-wrap max-md:gap-[46px] max-md:justify-center">
                                <li>Terms and conditions</li>
                                <li>Privacy</li>
                                <li className="text-white/50">© 2019 FooD. Laaqiq</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
