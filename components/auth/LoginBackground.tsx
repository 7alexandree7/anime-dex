
const LoginBackground = () => {
    return (
        <>
            <video
                autoPlay
                loop
                playsInline
                preload='auto'
                muted
                className='fixed inset-0 -z-20 w-screen h-screen object-cover'
            >
                <source src={"/authvideo.mp4"} type="video/mp4" />
            </video>
        </>
    )
}

export default LoginBackground
