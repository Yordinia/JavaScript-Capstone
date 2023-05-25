async function fetchMeals() {
  const mealsURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken';
  const response = await fetch(mealsURL);
  const { meals } = await response.json();
  return meals;
}

export default fetchMeals;