"use client";

import BackgroundAuth from "@/components/auth/BackgroundAuth";
import LoginForm from "@/components/auth/LoginForm";
import { useForm } from "react-hook-form"
import { useState } from "react";
import { LoginFormData, loginSchema } from "@/schemas/login";
import { zodResolver } from "@hookform/resolvers/zod";


const Page = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setErrorMessage(null);

    console.log(data);

    // TODO: const { error } = await authClient.signIn.email(data);
    // if (error) setErrorMessage("Email ou senha inválidos.");

    setIsLoading(false);
  }

  return (
    <main className='relative w-screen min-h-screen flex items-center justify-center px-5 overflow-hidden bg-background'>
      <BackgroundAuth />
      <LoginForm
        register={register}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    </main>
  )
}

export default Page
