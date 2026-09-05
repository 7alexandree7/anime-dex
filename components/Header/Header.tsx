

import HeaderButtons from "./HeaderButtons";
import Logo from "./Logo"

const Header = () => {

    return (
        <>
            <header className="flex justify-between items-center py-8 px-12">
                <Logo />
                <HeaderButtons />
            </header>
            <div className="w-full overflow-hidden border-b-3 border-black" />
        </>
    )
}

export default Header
