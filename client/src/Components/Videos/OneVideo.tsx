import { interVideos } from "./Video";
import ReactPlayer from "react-player";
interface Props {
  video: interVideos;
}

export const OneVideo = ({ video }: Props) => {
  return (
    <div className="col-md-4">
      <div className="card card-body">
        <div className="d-flex justify-content-between">
          <h1>{video.title}</h1>
          <span className="text-danger">x</span>
        </div>
        <p>{video.description}</p>
        <div className="embed-responsive embed-responsive-16by9">
          <ReactPlayer
            className="embed-responsive-item"
            url={video.url}
            width="100%"
            height="100%"
            controls={false}
          />
        </div>
      </div>
    </div>
  );
};
