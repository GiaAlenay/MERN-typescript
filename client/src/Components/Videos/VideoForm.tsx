import { ChangeEvent, FormEvent, useState } from "react";
import { interVideos } from "./Video";
import { createVideos } from "../../Services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const VideoForm = () => {
  const initialState = {
    title: "",
    url: "",
    description: "",
  };
  const [newVideo, setNewVideo] = useState<interVideos>(initialState);
  const navigate = useNavigate();
  const handleEvent = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewVideo({
      ...newVideo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createVideos(newVideo);
    toast.success("new video added");
    navigate("/");
    console.log(newVideo.title);
    setNewVideo(initialState);
  };
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3> New Video</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  className="form-control"
                  autoFocus
                  type="text"
                  onChange={handleEvent}
                  name="title"
                  placeholder="Write a title..."
                  value={newVideo.title}
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  name="url"
                  onChange={handleEvent}
                  placeholder="https://somesite.com"
                  value={newVideo.url}
                />
              </div>

              <div className="mb-3">
                <textarea
                  name="description"
                  rows={3}
                  placeholder={"Write a description"}
                  className="form-control"
                  onChange={handleEvent}
                  value={newVideo.description}
                />
              </div>

              <button className="btn btn-primary">Add Video</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
