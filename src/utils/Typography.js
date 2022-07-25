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
