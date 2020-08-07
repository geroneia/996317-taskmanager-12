import {COLORS, MAX_DAYS_GAP, DESCRIPTIONS} from "../const.js";
import {getRandomInteger, getTrueOrFaulse} from "../utils.js";

// получает произвольно выбранное описание
const generateDescription = () => {

  const randomIndex = getRandomInteger(0, DESCRIPTIONS.length - 1);

  return DESCRIPTIONS[randomIndex];
};

// получает случайную дату
const generateDate = () => {
  // есть/нет дедлайн
  const isDate = getTrueOrFaulse();

  if (!isDate) {
    return null;
  }


  // случайное число в пределах двух недель
  const daysGap = getRandomInteger(-MAX_DAYS_GAP, MAX_DAYS_GAP);
  const currentDate = new Date();

  // часы
  currentDate.setHours(23, 59, 59, 999);

  // случайная дата в пределах двух недель от сегодняшнего дня
  currentDate.setDate(currentDate.getDate() + daysGap);

  return new Date(currentDate);
};

// получает объект со случайно повторяющимися днями недели
const generateRepeating = () => ({
  mo: false,
  tu: false,
  we: getTrueOrFaulse(),
  th: false,
  fr: getTrueOrFaulse(),
  sa: false,
  su: false
});

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
    isArchive: getTrueOrFaulse(),
    isFavorite: getTrueOrFaulse()
  };
};
