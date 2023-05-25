const counterTotal = ( meals) => {
  const className = '.card';
  // like number from DOM
  const totalMeals = document.querySelectorAll(className);
  let flag = (totalMeals.length === meals.length)
  return flag;
};
export default counterTotal;