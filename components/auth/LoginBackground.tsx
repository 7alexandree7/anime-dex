

const LoginBackground = () => {
    return (
        <>
            <video
                autoPlay
                loop
                playsInline
                preload='none'
                className='fixed inset-0 -z-20 w-screen h-screen object-cover'
            >
                <source src={"/editanime.mp4"} />
            </video>
        </>
    )
}

export default LoginBackground
