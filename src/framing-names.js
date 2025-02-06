export function framingNames(names) {
  if (!Array.isArray(names)) {
    throw new Error("The parameter must be an array");
  }

  const maxLength = Math.max(...names.map((name) => name.length));

  let result = "";
  for (const name of names) {
    result += `* ${name.padEnd(maxLength, " ")} *\n`;
  }

  return "*".repeat(maxLength + 4) + "\n" + result + "*".repeat(maxLength + 4);
}
