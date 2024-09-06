import clsx from 'clsx';
import React, { Children, FC } from 'react';

interface ButtonProps {
    type: 'button' | 'reset' | 'submit' | undefined;
    fullWidth?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
    danger?: boolean;
    disabled?: boolean;
    secondary?: boolean;
}

const Button: FC<ButtonProps> = ({
    type,
    fullWidth,
    onClick,
    danger,
    disabled,
    secondary,
    children
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={clsx(
                `flex items-center justify-center py-3 px-2 rounded-md  text-sm font-semibold   
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                bg-sky-500
                hover:bg-sky-600
                focus-visible:outline-sky-600
                text-white
                `,
                disabled && 'opacity-50 cursor-default',
                danger &&
                    'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600',
                fullWidth && 'w-full',
                secondary ? 'text-gray-900 ' : 'text-white'
            )}
        >
            {children}
        </button>
    );
};

export default Button;
