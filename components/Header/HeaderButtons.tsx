"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown } from 'lucide-react';
import { headerDictionary } from "@/translate/header";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/hooks/useLanguage";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

interface HeaderButtonsProps {
    initialSession: typeof authClient.$Infer.Session | null;
}

const HeaderButtons = ({ initialSession }: HeaderButtonsProps) => {


    const router = useRouter();
    const { data: clientSession } = authClient.useSession();

    const session = clientSession || initialSession
    const isLoggedIn = !!session;

    const { lang } = useLanguage()
    const t = headerDictionary[lang]

    const handleLogout = async () => {
        await authClient.signOut()
        router.push("/")
        router.refresh()
    }

    return (
        <>
            {!isLoggedIn ? (
                <div className="flex items-center">
                    <LanguageToggle />
                    <div className="flex items-center gap-4 mr-12">
                        <Link
                            href="/login"
                            className={"cursor-pointer decoration-none, text-black font-semibold p-4.5 rounded-none text-base"}
                        >
                            {t.login}
                        </Link>
                        <Link
                            href="/register"
                            className="bg-red border-3 border-black shadow-[3px_3px_0_black] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_black] text-white font-bold p-4.5 rounded-none"
                            style={{ cursor: "pointer", fontSize: "1rem" }}
                        >
                            {t.createAccount}
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-center">
                    <div className="pt-3 mr-1.5">
                        <LanguageToggle />
                    </div>
                    <div className="p-4 border-2 border-black min-w-55 ">
                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage
                                        src={session?.user.image ?? "https://github.com/shadcn.png"}
                                        alt={session?.user.name ?? "@shadcn"}
                                    />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p>{session?.user.name}</p>
                                </div>
                            </div>

                            <div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger style={{ cursor: "pointer" }}>
                                        <ChevronDown className="mt-1.5" size={20} />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" sideOffset={25} className={"bg-background w-50 -mr-4.5 rounded-none p-4"}>
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem className={"cursor-pointer"}>👤 {t.myProfile}</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className={"cursor-pointer"}>📋 {t.myList}</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className={"cursor-pointer"}>⚙️ {t.settings}</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem
                                                className={"cursor-pointer text-red"}
                                                onClick={handleLogout}
                                            >
                                                ↪ {t.logout}
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default HeaderButtons