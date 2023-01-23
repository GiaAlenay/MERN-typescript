import { interVideos } from "./Video"
import { OneVideo } from "./OneVideo"
interface Props{
    videos:interVideos[]
}
export const VideoItem=({videos}:Props)=>{

    return(
        <div>
            {videos.map((v,i)=>(
                <div key={i}>
                    <OneVideo video={v}/>
                </div>))}
        </div>
    )

}