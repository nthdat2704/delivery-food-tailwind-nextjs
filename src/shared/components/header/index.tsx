import { logo } from '@/shared/assets';
import { MENU_LIST } from '@/shared/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../button';
import { CartIcon } from '@/shared/icons';
interface HeaderProps {}

const Header = (props: HeaderProps) => {
    return (
        <header>
            <div className="container flex justify-between items-center py-4">
                <Link href="/">
                    <Image src={logo} width={100} height={48} className="object-contain" alt="logo" />
                </Link>
                <ul className="flex gap-[60px] text-white text-base">
                    {MENU_LIST.map((item, index) => (
                        <li key={item.id} className="hover:text-orange">
                            <Link href={item.link}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
                <div className="flex gap-4 items-center">
                    <Button>Sign Up</Button>
                    <span>
                        <CartIcon />
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
