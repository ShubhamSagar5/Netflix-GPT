const VideoTitle = ({title,overview}) => {
    
    
    return (
        <div className="pt-[350px] -mt-[185px] md:m-0 md:px-12 absolute bg-gradient-to-r from-black w-[98.7vw] aspect-video text-white ">
            <div >
                <h1 className="font-bold ml-2 md:m-0 text-2xl md:text-3xl">{title}</h1>
                <p className=" hidden md:inline-block w-1/4">{overview}</p>                
            </div>
            <div className="mt-2 font-bold  flex justify-between md:flex-none md:justify-start  ">
                <button className=" bg-white p-1  md:p-3  text-black w-[100px] rounded-lg ">▶ Play</button>
                <button className=" hidden md:inline-block  bg-gray-600 text-white p-3 w-[110px] rounded-lg mx-3">❕ MoreInfo</button>
            </div>
        </div>
    )
}

export default VideoTitle