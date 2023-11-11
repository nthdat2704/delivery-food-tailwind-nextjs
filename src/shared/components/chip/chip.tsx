import classNames from 'classnames';
import React from 'react';

interface ChipProps {
    children: React.ReactNode;
    color?: 'primary' | 'secondary';
    roundedFull?: boolean;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    className?: string;
}

const Chip = ({ children, color, roundedFull = false, startContent, endContent }: ChipProps) => {
    const classes = classNames('px-4 flex items-center gap-[10px]', {
        'bg-green': color === 'primary',
        'bg-pink': color === 'secondary',
        'rounded-full': roundedFull,
    });
    return (
        <span className={classes}>
            {startContent && <span>{startContent}</span>}
            {children}
            {endContent && <span>{endContent}</span>}
        </span>
    );
};

export default Chip;
