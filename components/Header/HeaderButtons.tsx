import { Button } from "../ui/button";

const HeaderButtons = () => {

    const isLoggedIn: boolean = false

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
                <div>
                    <p>Alexandre</p>
                </div>
            )}
        </>
    )
}

export default HeaderButtons
