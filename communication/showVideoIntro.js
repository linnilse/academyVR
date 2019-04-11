let _showVideoIntro;

export const subscribeIntro = (showVideoIntro) => {
  _showVideoIntro = showVideoIntro;
};

export const showVideoIntro = (room) => {
  _showVideoIntro(room);
}