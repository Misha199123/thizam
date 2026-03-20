const buttons = document.querySelectorAll('.btn-video');
const videos = document.querySelectorAll('.video-player');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const videoId = this.getAttribute('data-video');

        buttons.forEach(btn => btn.classList.remove('active'));
        videos.forEach(video => {
            video.classList.remove('active');
            video.pause();
            video.curentTime = 0;
        });

        this.classList.add('active');

        const selectedVideo = document.getElementById('video' + videoId);
        // console.log(selectedVideo)
        selectedVideo.classList.add('active'); 
        // noVideoText.style.display = 'none';

        selectedVideo.play() 
        // .catch(e => {
        //     console.log('Автовоспроизведение заблокировано');
        // })
    })
})