let _onMenu;

export const subscribeMenu = (onMenu) => {
  _onMenu = onMenu;
};

export const getMenu = () => {
  _onMenu();
}