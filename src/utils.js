const camelCase = str => {
  return str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
};

const getEn = arr => {
  return arr.filter(obj => obj.language.name === 'en');
};

export { camelCase, getEn };
