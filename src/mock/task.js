import {COLORS} from "../const.js";
import {getRandomInteger} from "../utils.js";

// получает произвольно выбранное описание
const generateDescription = () => {
  const descriptions = [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`
  ];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);

  return descriptions[randomIndex];
};

// получает случайную дату
const generateDate = () => {
  // есть/нет дедлайн
  const isDate = Boolean(getRandomInteger(0, 1));

  if (!isDate) {
    return null;
  }


  // случайное число в пределах двух недель
  const maxDaysGap = 7;
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);
  const currentDate = new Date();

  // часы
  currentDate.setHours(23, 59, 59, 999);

  // случайная дата в пределах двух недель от сегодняшнего дня
  currentDate.setDate(currentDate.getDate() + daysGap);

  return new Date(currentDate);
};

// получает объект со случайно повторяющимися днями недели
const generateRepeating = () => {
  return {
    mo: false,
    tu: false,
    we: Boolean(getRandomInteger(0, 1)),
    th: false,
    fr: Boolean(getRandomInteger(0, 1)),
    sa: false,
    su: false
  };
};

// получает случайный цвет
const getRandomColor = () => {
  const randomIndex = getRandomInteger(0, COLORS.length - 1);

  return COLORS[randomIndex];
};

// получает задачу со случайными данными
export const generateTask = () => {
  const dueDate = generateDate();
  const repeating = dueDate === null ?
    generateRepeating() :
    {
      mo: false,
      tu: false,
      we: false,
      th: false,
      fr: false,
      sa: false,
      su: false
    };

  return {
    description: generateDescription(),
    dueDate,
    repeating,
    color: getRandomColor(),
    isArchive: Boolean(getRandomInteger(0, 1)),
    isFavorite: Boolean(getRandomInteger(0, 1))
  };
};
