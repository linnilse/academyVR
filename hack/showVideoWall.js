let _showVideoWall;

export const subscribeSentiment = (showVideoWall) => {
  _showVideoWall = showVideoWall;
};

export const showVideoWall = (room) => {
  _showVideoWall(room);
}