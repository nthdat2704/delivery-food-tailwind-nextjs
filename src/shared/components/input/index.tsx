import React from 'react';
import classNames from 'classnames';
type InputProps = {
    type?: 'text' | 'password';
    placeHolder?: string;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    className?: string;
    onChange?: (payload: any) => void;
};

const Input = ({ type = 'text', placeHolder, startContent, endContent, className, onChange }: InputProps) => {
    const classes = classNames(
        'flex items-center gap-3 relative bg-white rounded-md overflow-hidden pl-4 w-full',
        {},
        className,
    );
    return (
        <div className={classes}>
            {startContent && <span className="flex ">{startContent}</span>}
            <input
                className="w-full outline-none font-dm text-base"
                type={type}
                placeholder={placeHolder}
                onChange={onChange}
            />
            {endContent && <span className="flex">{endContent}</span>}
        </div>
    );
};

export default Input;
