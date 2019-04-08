let _showInstagram;

export const subscribeInstagram = (showInstagram) => {
  _showInstagram = showInstagram;
};

export const showInstagram = (room) => {
  _showInstagram(room);
}