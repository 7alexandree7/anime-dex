import { authClient } from "@/lib/auth-client";


export const useSocialAuth = () => {
    const googleLogin = async () => {
        await authClient.signIn.social({ provider: "google", callbackURL: "/explore" });
    }

    const githubLogin = async () => {
        await authClient.signIn.social({ provider: "github", callbackURL: "/explore" });
    }

    return { googleLogin, githubLogin };
}