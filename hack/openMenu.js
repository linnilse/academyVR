let _onMenu;

export const subscribeMenu = (onMenu) => {
  _onMenu = onMenu;
};

export const getMenu = () => {
  console.log('rotate2')
  _onMenu();
}