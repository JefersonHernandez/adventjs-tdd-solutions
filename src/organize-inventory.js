/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
export function organizeInventory(inventory) {
  if (!Array.isArray(inventory))
    throw new Error("inventory should be an array");

  if (inventory.some((item) => typeof item !== "object"))
    throw new Error("inventory should be an array of objects");

  if (
    inventory.some((item) => {
      return (
        typeof item.name !== "string" ||
        typeof item.quantity !== "number" ||
        typeof item.category !== "string"
      );
    })
  ) {
    throw new Error("inventory should have a concise structure");
  }

  const organized = inventory.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || {};

    acc[item.category][item.name] =
      (acc[item.category][item.name] || 0) + item.quantity;

    return acc;
  }, {});

  return organized;
}
