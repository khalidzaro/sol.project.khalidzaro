import React from 'react';
import './Video.css';
import clubGif from '../assets/imgs/icons8-clubs.gif';

const Video = () => {
  // Use clean YouTube video IDs without &t parameter
  const videoData = [
    {
      id: 'SqcY0GlETPk', // Just the video ID
      title: 'React Tutorial',
      description: 'Beginner Guide',
      startTime: 120 // Start at 2 minutes (optional)
    },
    {
      id: 'SqcY0GlETPk', // Just the video ID
      title: 'Advanced React', 
      description: 'Design Patterns',
      startTime: 240 // Start at 4 minutes (optional)
    }
  ];

  return (
    <div className="video-section">
      <div className="video-container">
        {videoData.map((video, index) => (
          <div className="video-wrapper" key={index}>
            <div className="video-embed">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1${video.startTime ? `&start=${video.startTime}` : ''}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-info">
              <div className="icon-name">
                <img 
                  src={clubGif} 
                  alt="logo" 
                  className="brand-icon" 
                />
                <div>
                  <strong>{video.title}</strong>
                  <div className="role">{video.description}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;