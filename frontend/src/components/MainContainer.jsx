import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

export default function MainContainer() {
  const movie = useSelector((state) => state.movie?.nowPlayingMovies);
  if (!movie) return;
  const { overview, id, title } = movie[0];
  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
}
