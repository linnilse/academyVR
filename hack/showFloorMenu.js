let _showFloorMenu;

export const subscribeFloorMenu = (showFloorMenu) => {
  _showFloorMenu = showFloorMenu;
};

export const showFloorMenu = (room) => {
  _showFloorMenu(room);
}