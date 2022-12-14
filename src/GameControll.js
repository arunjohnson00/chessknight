let knightPosition = [1, 7];
let observers = [];
function emitChange() {
  observers.forEach((o) => o && o(knightPosition));
}
export const observe = (o) => {
  observers.push(o);
  emitChange();
  return () => {
    console.log("clear:");
    observers = observers.filter((t) => t !== o);
  };
};
export const moveKnight = (toX, toY) => {
  knightPosition = [toX, toY];
  emitChange();
};
export const canMoveKnight = (toX, toY) => {
  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;
  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  );
};
