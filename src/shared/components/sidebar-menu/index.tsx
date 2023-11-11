import { MENU_LIST } from '@/shared/constants';
import Link from 'next/link';
import React from 'react';

type SideBarMenuProps = {};

const SideBarMenu = (props: SideBarMenuProps) => {
    return (
        <ul className="bg-pink absolute max-w-[300px] w-full top-0 right-0 bottom-0 text-white transform translate-x-[-300px] transition duration-500">
            {MENU_LIST.map((item) => (
                <li key={item.id} className="hover:text-orange bg-green-dark py-4 px-2 border-b-2">
                    <Link href={item.link}>{item.title}</Link>
                </li>
            ))}
        </ul>
    );
};

export default SideBarMenu;
