import classNames from 'classnames';
import React from 'react';

interface ChipProps {
    children: React.ReactNode;
    color?: 'primary' | 'secondary';
    upperCase?: boolean;
    roundedFull?: boolean;
    makeCenter?: boolean;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    className?: string;
}

const Chip = ({
    children,
    color = 'primary',
    roundedFull = false,
    makeCenter = false,
    startContent,
    endContent,
    className,
    upperCase = false,
}: ChipProps) => {
    const classes = classNames(
        'px-4 gap-[10px] rounded text-white font-dm text-base inline-block cursor-pointer',
        {
            'flex items-center': startContent || endContent,
            'flex items-center justify-center': makeCenter,
            uppercase: upperCase,
            'bg-green': color === 'primary',
            'bg-pink': color === 'secondary',
            'rounded-full': roundedFull,
        },
        className,
    );
    return (
        <span className={classes}>
            {startContent && <span>{startContent}</span>}
            {children}
            {endContent && <span>{endContent}</span>}
        </span>
    );
};

export default Chip;
