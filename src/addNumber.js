function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /[\n,]/;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const delimiterLine = parts[0].slice(2); // Remove the initial `//`

    if (delimiterLine.startsWith("[")) {
      // Handle multiple or long delimiters
      const delimiters = delimiterLine.match(/\[(.*?)\]/g).map(d => d.slice(1, -1));
      delimiter = new RegExp(delimiters.map(d => escapeRegExp(d)).join("|"));
    } else {
      // Single-character delimiter
      delimiter = new RegExp(escapeRegExp(delimiterLine));
    }

    numbers = parts[1];
  }

  const nums = numbers.split(delimiter).map(Number);
  const negatives = nums.filter(num => num < 0);
  if (negatives.length) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return nums.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0);
}

// Helper to escape special characters in delimiters
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
module.exports = add;