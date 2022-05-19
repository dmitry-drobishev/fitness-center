const video = document.querySelector('.gym__video');
const videoLink = video.querySelector('.gym__video a');
const videoButton = video.querySelector('.gym__video-button');
const videoMedia = video.querySelector('.gym__video img');
const videoIframe = video.querySelector('.gym__video-iframe');

video.classList.remove('gym__video--enabled');
videoLink.removeAttribute('href');

const playVideo = () => {

  video.addEventListener('click', () => {
    videoLink.remove();
    videoButton.remove();
    videoMedia.remove();
    videoIframe.classList.add('gym__video-iframe--active');
  });
};

export {playVideo};
