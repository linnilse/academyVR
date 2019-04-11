let _showVideoWall;

export const subscribeVideo = (showVideoWall) => {
  _showVideoWall = showVideoWall;
};

export const showVideoWall = (room) => {
  _showVideoWall(room);
}