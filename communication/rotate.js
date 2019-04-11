let _onRotate;

export const subscribe = (onRotate) => {
  _onRotate = onRotate;
};

export const rotate = (room) => {
  _onRotate(room);
}