import DecryptedText from "../motion/DecryptedText"

const Logo = () => {
    return (
        <div>
            <div className="flex items-center">
                <DecryptedText
                    text="Anime"
                    revealDirection="start"
                    sequential
                    useOriginalCharsOnly={false}
                    animateOn="view"
                    speed={40}
                    className="text-4xl font-bold text-gray-800"
                    style={{ display: "inline-block", width: "115px" }}
                />
                <DecryptedText
                    text="Dex"
                    revealDirection="start"
                    sequential
                    useOriginalCharsOnly={false}
                    animateOn="view"
                    speed={80}
                    className="text-4xl font-bold text-red-600"
                    style={{ display: "inline-block", width: "50px" }}
                />
            </div>
        </div>
    )
}

export default Logo
