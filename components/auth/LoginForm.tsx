import { LoginFormData } from "@/schemas/login";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import LanguageToggle from "../Header/LanguageToggle";
import { Button } from "../ui/button";
import Link from "next/link";
import LoginButtons from "./LoginButtons";

interface LoginFormProps {
    register: UseFormRegister<LoginFormData>;
    errors: FieldErrors<LoginFormData>;
    onSubmit: (e: React.FormEvent) => void;
    isLoading?: boolean;
    errorMessage?: string | null;
    googleLogin?: () => void;
    githubLogin?: () => void;
}

const LoginForm = ({ register, errors, onSubmit, isLoading, errorMessage, googleLogin, githubLogin }: LoginFormProps) => {
    return (
        <Card className="relative w-full max-w-115 rounded-none border-3 border-black shadow-[8px_8px_0_black] bg-white p-1">
            <span className="absolute top-[-2.5px] left-[-2.5px] w-3.5 h-3.5 border-l-[2.5px] border-t-[2.5px] border-red" />
            <span className="absolute bottom-[-2.5px] right-[-2.5px] w-3.5 h-3.5 border-r-[2.5px] border-b-[2.5px] border-red" />

            <div className="absolute top-5 right-4">
                <LanguageToggle />
            </div>

            <CardHeader className="pb-2">
                <div className="flex items-center gap-1.5 font-mono text-[10.5px] tracking-wide text-graphite mb-2 pt-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
                    AUTENTICAÇÃO SEGURA
                </div>
                <div className="font-heading text-[19px] mb-4">
                    Anime<span className="text-red">Dex</span>
                </div>
                <CardTitle className="font-heading text-2xl tracking-tight">Bem-vindo de volta</CardTitle>
                <CardDescription className="text-sm">Entre pra continuar sua maratona.</CardDescription>
            </CardHeader>

            <CardContent>
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <div>
                        <label className="block text-[11.5px] font-bold mb-1.5 tracking-wide">Email</label>
                        <input
                            {...register("email")}
                            type="email"
                            placeholder="seu@email.com"
                            className="w-full px-3.5 py-2.5 border-2 border-black bg-background text-sm outline-none focus:shadow-[3px_3px_0_var(--color-red)] transition-shadow"
                        />
                        {errors.email && (
                            <p className="text-red text-xs font-semibold mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-[11.5px] font-bold mb-1.5 tracking-wide">Senha</label>
                        <input
                            {...register("password")}
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-3.5 py-2.5 border-2 border-black bg-background text-sm outline-none focus:shadow-[3px_3px_0_var(--color-red)] transition-shadow"
                        />
                        {errors.password && (
                            <p className="text-red text-xs font-semibold mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    {errorMessage && (
                        <p className="text-red text-xs font-semibold">{errorMessage}</p>
                    )}

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="rounded-none bg-red border-3 border-black shadow-[4px_4px_0_black] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_black] text-white font-bold text-[14.5px] py-3 h-auto mt-0.5 cursor-pointer disabled:opacity-60"
                    >
                        {isLoading ? "Entrando..." : "Entrar"}
                    </Button>

                    <div className="flex items-center gap-2.5 text-[11px] text-graphite my-1">
                        <span className="flex-1 h-px bg-black/15" />
                        ou continue com
                        <span className="flex-1 h-px bg-black/15" />
                    </div>

                    <LoginButtons googleLogin={googleLogin} githubLogin={githubLogin} />
                </form>
            </CardContent>


            <CardFooter className="justify-center pt-0">
                <p className="text-[13px] text-graphite">
                    Ainda não tem conta?{" "}
                    <Link href="/register" className="text-red font-bold underline">Criar conta</Link>
                </p>
            </CardFooter>

        </Card>
    )
}

export default LoginForm