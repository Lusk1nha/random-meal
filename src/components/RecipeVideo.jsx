import '../styles/youtube.css'

export function RecipeVideo(props) {
  const { videoURL, foodTitle } = props

  const formatYoutubeURL = (url) => {
    return url.split('https://www.youtube.com/watch?v=')[1]
  }

  return (
    <div className="video-content">
      <iframe
        width="100%"
        height="400px"
        src={`https://www.youtube.com/embed/${formatYoutubeURL(videoURL)}`}
        frameBorder="0"
        allow='autoplay; encrypted-media'
        allowFullScreen
        title={`${foodTitle} on Youtube`}
      />
    </div>
  );
}