'use client';
import classNames from 'classnames';
import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    variant?: 'outlined' | 'contained';
    color?: 'primary' | 'secondary';
    textColor?: any;
    rounded?: boolean;
    roundedFull?: boolean;
    makeCircle?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    className?: string;
    onClick?: (payload: any) => void;
}

const Button = ({
    children,
    size = 'medium',
    fullWidth = false,
    variant = 'contained',
    color = 'primary',
    textColor = 'text-white',
    rounded = true,
    roundedFull = false,
    makeCircle = false,
    startIcon,
    endIcon,
    className,
    onClick,
}: ButtonProps) => {
    const bgColors = {
        primary: 'bg-pink',
        secondary: 'bg-white',
    };
    const borderColors = {
        primary: 'border-pink',
        secondary: 'border-white',
    };

    const classes = classNames(
        'text-[16px] leading-normal font-dm font-bold flex items-center gap-3',
        {
            'py-3 px-8': size === 'small' && !makeCircle,
            'py-3 px-14': size === 'medium' && !makeCircle,
            'py-3 px-3': size === 'small' && makeCircle,
            'py-6 px-6': size === 'medium' && makeCircle,
            'w-full': fullWidth,
            [`border  ${borderColors[color]} !bg-transparent`]: variant === 'outlined',
            [bgColors[color]]: variant === 'contained',
            [bgColors[color]]: color,
            [textColor]: textColor,
            ['rounded']: rounded,
            ['rounded-full']: roundedFull,
        },
        className,
    );

    return (
        <button className={classes} onClick={onClick}>
            {startIcon && <span className="flex">{startIcon}</span>}
            {children}
            {endIcon && <span className="flex">{endIcon}</span>}
        </button>
    );
};

export default Button;
