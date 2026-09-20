"use client";

import BackgroundAuth from "@/components/auth/BackgroundAuth";
import RegisterForm from "@/components/auth/RegisterForm";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { RegisterFormData, RegisterSchema as registerSchema } from "@/schemas/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Page = () => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: RegisterFormData) => {
        setIsLoading(true);
        setErrorMessage(null);

        const { error } = await authClient.signUp.email({
            email: data.email,
            password: data.password,
            name: data.name,
        });

        if (error) {
            setErrorMessage(`Erro ao criar conta: ${error.message}`);
            setIsLoading(false);
            return;
        }

        router.push("/explore");
    };

    const googleLogin = async () => {
    await authClient.signIn.social({ provider: "google" });
    router.push("/explore");
  }

  const githubLogin = async () => {
    await authClient.signIn.social({ provider: "github" });
    router.push("/explore");
  }

    return (
        <main className="relative w-screen min-h-screen flex items-center justify-center px-5 overflow-hidden bg-background">
            <BackgroundAuth />
            <RegisterForm
                register={register}
                errors={errors}
                onSubmit={handleSubmit(onSubmit)}
                isLoading={isLoading}
                errorMessage={errorMessage}
                googleLogin={googleLogin}
                githubLogin={githubLogin}
            />
        </main>
    );
};

export default Page;