'use client';

import Input from '@/components/Input';
import React, { useCallback, useState } from 'react';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

type Variant = 'LOGIN' | 'REGISTER';

export default function AuthForm() {
    const [variant, setVariant] = useState<Variant>('LOGIN');

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant]);

    const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    id="email"
                    label="Email:"
                    register={register}
                    errors={errors}
                ></Input>
                <Input
                    id="Username"
                    label="Username:"
                    register={register}
                    errors={errors}
                ></Input>

                <Input
                    id="Password"
                    label="Password:"
                    register={register}
                    errors={errors}
                ></Input>

                <button
                    className="inner-block px-4 py-2 rounded-md text-blue-400 bg-blue-500 mt-4 text-whtie"
                    type="submit"
                >
                    submit login
                </button>
            </form>
        </div>
    );
}
