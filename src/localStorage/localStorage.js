function getItem(itemName) {
  const items = localStorage.getItem(itemName);
  if (items) {
    return JSON.parse(items);
  }
  return [];
}

function setItem(itemName, value) {
  const items = getItem(itemName);
  if (items.length > 0) {
    localStorage.setItem(itemName, JSON.stringify([...items, value]));
  } else {
    localStorage.setItem(itemName, JSON.stringify([value]));
  }
}
export { getItem, setItem };
