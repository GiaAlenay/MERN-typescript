import { interVideos } from "./Video";
import ReactPlayer from "react-player";
import { deleteVideos, getAllVideos } from "../../Services";

interface Props {
  video: interVideos;
  loadVideos: () => void;
}

export const OneVideo = (props: Props) => {
  const { video, loadVideos } = props;
  const handleDelete = async () => {
    await deleteVideos(video._id);
    loadVideos();
  };

  return (
    <div className="col-md-4">
      <div className="card card-body">
        <div className="d-flex justify-content-between">
          <h1>{video.title}</h1>
          <span className="text-danger" onClick={handleDelete}>
            x
          </span>
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
