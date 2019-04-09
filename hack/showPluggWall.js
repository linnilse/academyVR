let _showPluggWall;

export const subscribePluggWall = (showPluggWall) => {
  _showPluggWall = showPluggWall;
};

export const showPluggWall = (room) => {
  _showPluggWall(room);
}