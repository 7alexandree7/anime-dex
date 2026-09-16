"use client";

import BackgroundAuth from "@/components/auth/BackgroundAuth";
import RegisterForm from "@/components/auth/RegisterForm";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { RegisterFormData, RegisterSchema as registerSchema } from "@/schemas/register";
import { zodResolver } from "@hookform/resolvers/zod";

const Page = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: RegisterFormData) => {
        setIsLoading(true);
        setErrorMessage(null);

        console.log(data);

        // TODO: const { error } = await authClient.signUp.email(data);
        // if (error) setErrorMessage("Não foi possível criar a conta.");

        setIsLoading(false);
    };

    return (
        <main className="relative w-screen min-h-screen flex items-center justify-center px-5 overflow-hidden bg-background">
            <BackgroundAuth />
            <RegisterForm
                register={register}
                errors={errors}
                onSubmit={handleSubmit(onSubmit)}
                isLoading={isLoading}
                errorMessage={errorMessage}
            />
        </main>
    );
};

export default Page;