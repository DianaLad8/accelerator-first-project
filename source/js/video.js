const playButton = document.querySelector('.video__play');
const videoFond = document.querySelector('.video__picture-fond');
const videoPlayer = document.querySelector('.video__iframe');

const initVideo = () => {

  playButton.addEventListener('click', () => {
    const loadPlayer = videoPlayer.dataset.src;
    if (loadPlayer) {
      videoPlayer.innerHTML = `<iframe width="560" height="315" src="${loadPlayer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
      videoPlayer.removeAttribute('data-src');
    }

    setTimeout(() => {
      videoFond.style.opacity = 0.5;
      playButton.style.opacity = 0.5;
    }, 300);

    setTimeout(() => {
      videoFond.style.opacity = 0;
      playButton.style.opacity = 0;
    }, 600);

    const videoIframe = videoPlayer.querySelector('iframe');

    videoIframe.src += '&autoplay=1';
  });
};

export {initVideo};
