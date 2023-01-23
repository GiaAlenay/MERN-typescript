import { useEffect, useState } from "react";
import { getAllVideos } from "../../Services";
import { interVideos } from "./Video";
import { VideoItem } from "./VideoItem";
export const ListProducts = () => {
  const [videos, setVideos] = useState<interVideos[]>([]);
  const [msg, setMsg] = useState<String>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function loadVideos() {
    const res = await getAllVideos();
    setVideos(res?.data);

    setIsLoading(false);

    console.log(res);
  }

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <>
      <div className="container">
        <VideoItem videos={videos} />
      </div>
    </>
  );
};
