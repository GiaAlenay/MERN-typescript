import { interVideos } from "./Video";
import { OneVideo } from "./OneVideo";
interface Props {
  videos: interVideos[];
  loadVideos: () => void;
}
export const VideoItem = (props: Props) => {
  const { videos, loadVideos } = props;

  return (
    <div className="row">
      {videos.map((v, i) => (
        <OneVideo video={v} key={i} loadVideos={loadVideos} />
      ))}
    </div>
  );
};
