"use client";

import { BR, JP } from "country-flag-icons/react/3x2";
import { useLenguage } from '@/hooks/useLenguage';

const LanguageToggle = () => {

    const { lang, setLang } = useLenguage()

    return (
        <button
            className='w-10 h-10 cursor-pointer'
            onClick={() => setLang(lang === "pt" ? "ja" : "pt")}
        >
            {lang === "pt" ? (
                <BR title='Português' className="w-8 h-8 object-cover " />
            ) : (
                <JP title='日本語' className="w-8 h-8 object-cover" />
            )}
        </button>
    )
}

export default LanguageToggle
