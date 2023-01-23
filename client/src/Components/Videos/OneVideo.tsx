import { interVideos } from "./Video"

interface Props{
    video:interVideos
}

export const OneVideo=({video}:Props)=>{
    return (
        <div>
            {video.title}
            {video.description}
        </div>
    )
}