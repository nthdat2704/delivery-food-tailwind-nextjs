import React from 'react';
import Chip from '../chip/chip';
import classNames from 'classnames';

type Props = {
    image?: React.ReactNode;
    icon?: React.ReactNode;
    title?: string;
    subTitle?: string;
    amount?: string | number;
    className?: string;
};

const CardCategories = ({ image, icon, title, subTitle, amount, className }: Props) => {
    const classes = classNames(
        'py-8 px-[30px] bg-gray rounded-md hover:bg-orange cursor-pointer flex flex-col items-center w-full',
        className,
    );
    return (
        <div className={classes}>
            <div className="py-[33px] px-9 bg-white rounded-full min-w-[112px] min-h-[112px] relative">
                <span>{image || icon}</span>
                <Chip roundedFull={true} makeCenter={true} className="absolute top-0 right-0 w-10 h-10">
                    {amount}
                </Chip>
            </div>
            <p className="text-xl text-black font-dm hover:text-white">{title}</p>
            <p className="text-sm text-black/50 font-dm hover:text-white/50">{subTitle}</p>
        </div>
    );
};

export default CardCategories;
