const VideoTitle = ({title,overview}) => {
    
    
    return (
        <div className="pt-[280px] px-12 ">
            <div >
                <h1 className="font-bold text-3xl">{title}</h1>
                <p className="w-1/4">{overview}</p>                
            </div>
            <div className="mt-2 text-white">
                <button className=" bg-gray-600 p-3 w-[100px] rounded-lg ">▶ Play</button>
                <button className=" bg-gray-600 p-3 w-[110px] rounded-lg mx-3">❕ MoreInfo</button>
            </div>
        </div>
    )
}

export default VideoTitle