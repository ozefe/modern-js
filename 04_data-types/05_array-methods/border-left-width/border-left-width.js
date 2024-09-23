function camelize(str) {
  let words = str.split("-");
  let camelized = words.shift();

  for (let word of words) {
    camelized += word[0].toLocaleUpperCase() + word.slice(1);
  }

  return camelized;
}
