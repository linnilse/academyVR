let _showKlassen;

export const subscribeKlassen = (showKlassen) => {
  _showKlassen = showKlassen;
};

export const showKlassen = (room) => {
  _showKlassen(room);
}