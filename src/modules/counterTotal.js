const counter = (className = '.card') => {
  // like number from DOM
  const totalMeals = document.querySelectorAll(className);
  console.log('totalMeals', totalMeals, 'leng', totalMeals.length);
};
export default counter;