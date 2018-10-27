

function getData(items = []) {
  const tab = ['README', 'LICENSE','CONDUCT', 'CONTRIBUTING', 'test', 'eslint'];
  const response = new Set();
  tab.forEach(word => {
    items.forEach(item => {
      if (item.name.includes(word)) {
        // if there is a word in the item,
        // i.e return true if the word is README and the item.name is README.md
        response.add(word);
      }
    });
  });
  return Array.from(response);
}


module.exports = {
  getData,
};
