/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
export function createXmasTree(height, ornament) {
  /* Code here */
  if (typeof height !== "number" || typeof ornament !== "string") {
    throw new Error("Invalid params");
  }

  if (height < 1 || height > 100) {
    throw new Error("Invalid height");
  }

  if (ornament.length !== 1) {
    throw new Error("Invalid ornament");
  }

  let tree = "";

  for (let i = 0; i < height; i++) {
    const spaces = "_".repeat(height - i - 1);
    const stars = ornament.repeat(i * 2 + 1);
    tree += spaces + stars + spaces + "\n";
  }

  const spaces = "_".repeat(height - 1 - 0);
  const stars = "#".repeat(1);
  tree += spaces + stars + spaces + "\n";
  tree += spaces + stars + spaces;

  return tree;
}
