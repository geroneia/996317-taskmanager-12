export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

// текущая дата
const getCurrentDate = () => {
  const currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);

  return new Date(currentDate);
};

// проверяет просрочена ли задача
export const isTaskExpired = (dueDate) => {
  if (dueDate === null) {
    return false;
  }

  const currentDate = getCurrentDate();

  // если текущая дата позже сгенерированной - true
  return currentDate.getTime() > dueDate.getTime();
};

export const isTaskExpiringToday = (dueDate) => {
  if (dueDate === null) {
    return false;
  }

  const currentDate = getCurrentDate();

  return currentDate.getTime() === dueDate.getTime();
};

// берет из объекта с повтороми по дням есть/нет повтор, возвращает true/false
export const isTaskRepeating = (repeating) => Object.values(repeating).some(Boolean);

export const humanizeTaskDueDate = (dueDate) => {
  return dueDate.toLocaleString(`en-US`, {
    day: `numeric`,
    month: `long`
  });
};

// да или нет
export const getTrueOrFaulse = () => Boolean(getRandomInteger(0, 1));
