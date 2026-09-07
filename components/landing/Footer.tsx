import { GitCommitIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="px-12 py-9 border-t-3 border-black flex justify-between items-center flex-wrap gap-3.5 text-sm text-graphite">
            <div>©&nbsp;2026 - AnimeDex — projeto pessoal</div>
            <div className="font-mono flex items-center gap-2">
                <GitCommitIcon />
                <Link className="font-mono" href="https://github.com/7alexandree7/anime-dex">  7alexandree7 </Link>
            </div>
        </footer>
    );
};

export default Footer;