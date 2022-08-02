export const ucWords = (words) => {
  const arrWords = words.split(" ");
  let newWords = [];

  arrWords.forEach((val) => {
    let firstChar = val.charAt(0).toUpperCase();
    let tailWord = val.slice(1);

    newWords.push(`${firstChar}${tailWord}`);
  });

  return newWords.join(" ");
};

export const firstChar = (words) => {
  if (!words || words.length < 1) return "MF";

  const firstChar = words.charAt(0).toUpperCase();

  return firstChar;
};

export const Slugify = (words) => {
  return (
    words
      .toString()
      .normalize("NFKD")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      // eslint-disable-next-line
      .replace(/[^\w\-]+/g, "")
      // eslint-disable-next-line
      .replace(/\-\-+/g, "-")
  );
};
