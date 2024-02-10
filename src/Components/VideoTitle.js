const VideoTitle = ({title,overview}) => {
    
    
    return (
        <div className="pt-[350px] px-12 absolute bg-gradient-to-r from-black w-screen aspect-video text-white">
            <div >
                <h1 className="font-bold text-3xl">{title}</h1>
                <p className="w-1/4">{overview}</p>                
            </div>
            <div className="mt-2 font-bold">
                <button className=" bg-white p-3  text-black w-[100px] rounded-lg ">▶ Play</button>
                <button className="  bg-gray-600 text-white p-3 w-[110px] rounded-lg mx-3">❕ MoreInfo</button>
            </div>
        </div>
    )
}

export default VideoTitle