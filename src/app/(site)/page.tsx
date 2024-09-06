import React from 'react';
import Image from 'next/image';
import AuthForm from './components/AuthForm';
export default function Auth() {
    return (
        <div className="flex felx-col justify-center  min-h-full py-12 bg-gray-100 sm:px-6  lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Image
                    src="/images/logo.png"
                    height="56"
                    width="56"
                    alt="Logo"
                    className="mx-auto"
                />
                <h3 className="text-center mt-6 text-3xl text-gray-900 tracking-tight">
                    Sign in to your account
                </h3>
                <AuthForm></AuthForm>
            </div>
        </div>
    );
}
