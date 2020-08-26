
export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

// да или нет
export const getTrueOrFaulse = () => Boolean(getRandomInteger(0, 1));


// возвращает массив до элемента с нужным id, вставляет взамен элемента с нужным id
// обновленный элемент, возвращает массив после элемента с нужным id
export const updateItem = (items, update) => {
  // findIndex() возвращает индекс в массиве, если элемент удовлетворяет
  // условию проверяющей функции. В противном случае возвращается -1
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1)
  ];
};
