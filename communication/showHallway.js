let _showHallway;

export const subscribeHallway = (showHallway) => {
  _showHallway = showHallway;
};

export const showHallway = (room) => {
  _showHallway(room);
}