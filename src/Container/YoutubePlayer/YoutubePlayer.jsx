import PropTypes from 'prop-types'; 
import './YouTubePlayer.scss';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const YouTubePlayer = ({ videoId }) => {
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Card className="youtube-video-card">
      <CardMedia
        component="iframe"
        src={videoSrc}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="youtube-video-media"
      />
    </Card>
  );
};

YouTubePlayer.propTypes = {
  videoId: PropTypes.string.isRequired, 
};

export default YouTubePlayer;


