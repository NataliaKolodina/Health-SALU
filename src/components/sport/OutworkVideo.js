import React, { useState, useEffect } from "react";
import outwork from "../../json/outwork.json";

const OutworkVideo = () => {
  const [randomVideos, setRandomVideos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна
  const [selectedVideo, setSelectedVideo] = useState(null); // Состояние для выбранного видео

  useEffect(() => {
    // Функция для выбора 6 случайных видео
    const getRandomVideos = () => {
      const shuffledVideos = [...outwork].sort(() => 0.6 - Math.random()); // Перемешиваем массив видео
      return shuffledVideos.slice(0, 6); // Берем первые 6 видео
    };

    setRandomVideos(getRandomVideos());
  }, []);

  // Функция для открытия модального окна с видео
  const openModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <>
      <div className="site__list tablet-center">
        {randomVideos.map((video) => (
          <div className="video__item" key={video.id}>
            {/* Кнопка "Посмотреть", расположенная в центре видео */}
            <button
              className=" site__btn video__play "
              onClick={() => openModal(video)}
            >
              Посмотреть
            </button>
            {/* Видео */}
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

      {/* Модальное окно */}
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
                Закрыть
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
