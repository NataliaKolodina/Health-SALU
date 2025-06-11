import React, { useState, useEffect } from "react";
import outwork from "../../json/outwork.json";

const OutworkVideo = () => {
  const [randomVideos, setRandomVideos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal window state
  const [selectedVideo, setSelectedVideo] = useState(null); // Selected video state

  useEffect(() => {
    // Function to select 6 random videos
    const getRandomVideos = () => {
      const shuffledVideos = [...outwork].sort(() => 0.6 - Math.random()); // Shuffle videos array
      return shuffledVideos.slice(0, 6); // Take first 6 videos
    };

    setRandomVideos(getRandomVideos());
  }, []);

  // Function to open modal window with video
  const openModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  // Function to close modal window
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <>
      <div className="site__list tablet-center">
        {randomVideos.map((video) => (
          <div className="video__item" key={video.id}>
            {/* "Watch" button centered over video */}
            <button
              className="site__btn video__play"
              onClick={() => openModal(video)}
            >
              Watch
            </button>
            {/* Video */}
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h2 className="site__text video__discription">{video.title}</h2>
          </div>
        ))}
      </div>

      {/* Modal window */}
      {isModalOpen && selectedVideo && (
        <div className="video__modal">
          <div className="video__modal-video">
            <div className="video__modal-header">
              <h2 className="video__modal-title site__subtitle">
                {selectedVideo.title}
              </h2>
              <button
                className="site__btn video__modal-btn"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
            <iframe
              width="800"
              height="800"
              src={`https://www.youtube.com/embed/${selectedVideo.id}`}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default OutworkVideo;
