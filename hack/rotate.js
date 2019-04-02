let _onRotate;

export const subscribe = (onRotate) => {
  _onRotate = onRotate;
};

export const rotate = (room) => {
  console.log('rotate2')
  _onRotate(room);
}