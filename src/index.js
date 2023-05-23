import './style.css';

/* These are the tasks for this branch

When the page loads, the webapp retrieves data from the selected API and shows the list of items on screen with the basic data (e.g. title + image).

/Prepare also "Comments" and "Reservations" buttons. They should be doing nothing - just being displayed.

This task does not include displaying the number of likes for each item.

This task does not include the counter of the items. */

    
// Function to make API request and create cards
async function fetchMeals() {
  const nineRandomMealsURL = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const response = await fetch(nineRandomMealsURL);
  const data = await response.json();
  console.log('this is fetch, data =', data)
  return data.meals;
}

const getCard = meal => {
  const card = `
  <div class="card border-primary mb-3" style="max-width: 20rem;">
    <div class="card-header" id="header">Header</div>
    <div class="card-body">
      <h5 class='card-title'> ${meal.strMeal} </h5>
      <img class= 'card-img-top' src = ${meal.strMealThumb} alt= ${meal.strMeal} > </img>
    </div>
    </div>
  </div>`
  return card;
}

// display all 9 random meals
const screenMeals = meals => {
const mealElement = document.getElementById('homepage');

meals.forEach((meal,index) => {
  const card = getCard(meal);
  mealElement.insertAdjacentHTML("beforeend",card);
  });
}

// Call the function to fetch and display random meals
screenMeals(await fetchMeals());
