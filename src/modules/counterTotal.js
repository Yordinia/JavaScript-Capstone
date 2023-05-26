const counterTotal = (meals) => {
  const className = '.card';
  // like number from DOM
  const totalMeals = document.querySelectorAll(className);
  const flag = (totalMeals.length === meals.length);
  return flag;
};
export default counterTotal;