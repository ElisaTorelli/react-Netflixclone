/**
 * function that is used
 * @param arg  image name
 * @returns img path + arg
 */
function getImg(arg: string) {
  return require(`../assets/images/${arg}`);
}
export { getImg };
