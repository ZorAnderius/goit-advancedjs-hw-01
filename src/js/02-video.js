import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const LOCAL_KEY = 'videoplayer-current-time';

const player = new Player(iframe);

const handlerGetTime = (e) => {
    const { seconds, duration } = e;
    if (seconds && duration && seconds >= 0 && seconds <= duration)
        localStorage.setItem(LOCAL_KEY, JSON.stringify(seconds));
};

const currentTime = JSON.parse(localStorage.getItem(LOCAL_KEY)) || 0;

player.setCurrentTime(currentTime);
player.on('timeupdate', handlerGetTime);
