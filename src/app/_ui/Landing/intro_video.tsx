
export default function Intro_Video() {
    return (
        <div className="absolute -z-10 w-full min-h-screen min-w-full ">
            <video autoPlay muted loop className="h-screen min-w-full object-cover">
            <source src="/city.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
    )
}