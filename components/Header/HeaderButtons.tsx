import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const HeaderButtons = () => {

    const isLoggedIn: boolean = true

    return (
        <>
            {!isLoggedIn ? (
                <div className="flex items-center gap-4 mr-12">
                    <Button
                        variant="link"
                        className={"cursor-pointer decoration-none, text-black font-semibold p-4.5 rounded-none text-base"}
                    >
                        Entrar
                    </Button>
                    <Button
                        variant="default"
                        className="bg-red border-3 border-black shadow-[3px_3px_0_black] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_black] text-white font-bold p-4.5 rounded-none"
                        style={{ cursor: "pointer", fontSize: "1rem" }}
                    >
                        Criar Conta
                    </Button>
                </div>
            ) : (
                <div className="p-4 border-3 border-black min-w-50">
                    <div className="flex items-center justify-between">

                        <div className="flex items-center gap-2">
                            <Avatar>
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <p>Unfast</p>
                            </div>
                        </div>

                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger style={{ cursor: "pointer" }}>
                                    <ChevronDown />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" sideOffset={25} className={"bg-background w-50 -mr-4.5 rounded-none p-4"}>
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem className={"cursor-pointer"}>👤 Meu Perfil</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className={"cursor-pointer"}>📋 Minha Lista</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className={"cursor-pointer"}>⚙️ Configurações</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className={"cursor-pointer text-red"}>↪ Sair</DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default HeaderButtons
