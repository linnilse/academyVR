let _showPingisWall;

export const subscribePingisWall = (showPingisWall) => {
  _showPingisWall = showPingisWall;
};

export const showPingisWall = (room) => {
  _showPingisWall(room);
}