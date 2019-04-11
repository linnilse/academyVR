let _showKaffeWall;

export const subscribeKaffe = (showKaffeWall) => {
  _showKaffeWall = showKaffeWall;
};

export const showKaffeWall = (room) => {
  _showKaffeWall(room);
}