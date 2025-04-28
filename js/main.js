// Массив с путями к видео
const videos = [
    './assets/videos/media1.mp4',
    './assets/videos/media2.mp4',
    './assets/videos/media3.mp4',
    './assets/videos/media4.mp4'
];

let currentVideoIndex = 0;
const videoElement = document.getElementById('background-video');

// Функция для смены видео
function playNextVideo() {
    videoElement.src = videos[currentVideoIndex];
    videoElement.play().catch(function(error) {
        console.log("Video play failed:", error);
    });
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
}

// Обработчик окончания видео
videoElement.addEventListener('ended', playNextVideo);

// Запускаем первое видео
playNextVideo();