"use client";

import Logo from "./Logo"

const Header = () => {

    //const isLoggedIn: boolean = false

    return (
        <>
            <header className="flex justify-between items-center py-8 px-12">
                <div>
                    <Logo />
                </div>

                <div>
                    <button>Entrar</button>
                    <button>Criar Conta</button>
                </div>

            </header>

            <div className="w-full overflow-hidden border-b-3 border-black" />

        </>

    )
}

export default Header
