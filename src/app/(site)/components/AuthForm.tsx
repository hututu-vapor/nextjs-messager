'use client';

import Button from '@/components/Button';
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
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md  ">
            <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {variant === 'REGISTER' && (
                        <Input
                            disabled={isLoading}
                            id="email"
                            label="Email Address:"
                            register={register}
                            errors={errors}
                        ></Input>
                    )}

                    <Input
                        disabled={isLoading}
                        id="Username"
                        label="Username:"
                        register={register}
                        errors={errors}
                    ></Input>

                    <Input
                        disabled={isLoading}
                        id="Password"
                        label="Password:"
                        register={register}
                        errors={errors}
                    ></Input>

                    <div className="mt-6">
                        <Button type="submit" fullWidth disabled={isLoading}>
                            {variant === 'LOGIN' ? 'Sign in' : 'Register'}
                        </Button>
                    </div>
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="flex items-center absolute inset-0">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>

                        <div className="relative text-sm flex justify-center">
                            <span className="px-2 bg-white text-gray-500">
                                or Continue with
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
