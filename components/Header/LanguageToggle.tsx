"use client";

import { useState } from 'react';
import { BR, JP } from "country-flag-icons/react/3x2";

const LanguageToggle = () => {

    const [language, setLanguage] = useState<"pt" | "ja">("pt");

    return (
        <button
            className='w-10 h-10 cursor-pointer'
            onClick={() => setLanguage(language === "pt" ? "ja" : "pt")}
        >
            {language === "pt" ? (
                <BR title='Português' className="w-8 h-8 object-cover " />
            ) : (
                <JP title='日本語' className="w-8 h-8 object-cover" />
            )}
        </button>
    )
}

export default LanguageToggle
