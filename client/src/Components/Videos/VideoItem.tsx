import { interVideos } from "./Video";
import { OneVideo } from "./OneVideo";
interface Props {
  videos: interVideos[];
}
export const VideoItem = ({ videos }: Props) => {
  return (
    <div className="row">
      {videos.map((v, i) => (
        <OneVideo video={v} key={i} />
      ))}
    </div>
  );
};
