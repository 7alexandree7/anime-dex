
import { auth } from "@/lib/auth";
import HeaderButtons from "./HeaderButtons";
import Logo from "./Logo"
import { headers } from "next/headers";

const Header = async () => {
    
    const session = await auth.api.getSession({ headers: await headers()})

    return (
        <>
            <header className="flex justify-between items-center py-8 px-12">
                <Logo />
                <HeaderButtons  initialSession={session} />
            </header>
            <div className="w-full overflow-hidden border-b-3 border-black mb-20" />
        </>
    )
}

export default Header
