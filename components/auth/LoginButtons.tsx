import { Button } from "../ui/button"


type LoginButtonsProps = {
    googleLogin?: () => void
    githubLogin?: () => void
}

const LoginButtons = ({ googleLogin, githubLogin }: LoginButtonsProps) => {
    return (
        <div className="flex gap-2.5">
            <Button
                onClick={googleLogin}
                type="button"
                variant="outline"
                className="flex-1 rounded-none border-2 border-black bg-background font-semibold text-[13px] hover:shadow-[2px_2px_0_black] cursor-pointer"
            >
                Google
            </Button>
            <Button
                onClick={githubLogin}
                type="button"
                variant="outline"
                className="flex-1 rounded-none border-2 border-black bg-background font-semibold text-[13px] hover:shadow-[2px_2px_0_black] cursor-pointer"
            >
                GitHub
            </Button>
        </div>
    )
}

export default LoginButtons
