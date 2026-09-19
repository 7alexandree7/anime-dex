"use client";

import BackgroundAuth from "@/components/auth/BackgroundAuth";
import LoginForm from "@/components/auth/LoginForm";
import { useForm } from "react-hook-form"
import { useState } from "react";
import { LoginFormData, loginSchema } from "@/schemas/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";


const Page = () => {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setErrorMessage(null);

    const { error } = await authClient.signIn.email({ email: data.email, password: data.password });
    if (error) {
      setErrorMessage("E-mail ou senha inválidos.");
      setIsLoading(false);
      return;
    }
    router.push("/");
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
