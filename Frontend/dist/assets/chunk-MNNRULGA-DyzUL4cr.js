function range(start, end) {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
}
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
export {
  clamp as c,
  range as r
};
