function playVideo() {
    const video = document.querySelector('.video-wrap video')
    const play = document.querySelector('.icon-wrap');

    play.addEventListener('click', () => {
        video.play()
        play.style.display = 'none';
    })
    video.addEventListener('ended', () => {
        play.style.display = 'block';
    })
}
playVideo()


function playVideoStory() {
    const video = document.querySelector('.story__video video')
    const play = document.querySelector('.story__video .icon-wrap');

    play.addEventListener('click', () => {
        video.play()
        play.style.display = 'none';
    })
    
    video.addEventListener('ended', () => {
        play.style.display = 'block';
    })
    video.addEventListener ('click', () => {
        if(video.play) {
            video.pause()
            play.style.display = 'block';
        } else {
            video.play()

        }
    })
}
playVideoStory()







// function reviewsVideo() {
//     const video = document.querySelectorAll('.reviews-video');

//     video.forEach(vi => {
//         vi.addEventListener('mouseover', () => {
//             vi.play();
//         })

//         vi.addEventListener('mouseout', () => {
//             vi.pause()
//         })
//     })

// }
// reviewsVideo()


