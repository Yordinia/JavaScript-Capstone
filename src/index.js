/* Task 12 requirements

When the page loads, the webapp the Involvement API to show the item
likes and combines them with the data from the base API.

Remember that your page should make only 2 requests:

- one to the base API
- and one to the Involvement API.

This task does not include displaying the likes button (heart icon on the
  wireframe) for each item.
 */

import './style.css';

// Function to make API request and create cards
async function fetchMeals() {
  const mealsURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken';
  const response = await fetch(mealsURL);
  const { meals } = await response.json();
  return meals;
}

const getCard = (meal) => {
  const card = `
  <div class="card border-primary mb-3" style="max-width: 20rem;">
    <div class="card-header" id="header">
    <img class= 'card-img-top' src = ${meal.strMealThumb} alt= ${meal.strMeal} ></img>  
    <div class= 'title-like-container'>  
        <h1>${meal.strMeal} </h1>
        <div class='heart'> 
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="pink" class="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>
          </h3>
          <p class='no-of-likes'> 'no of likes' </p>  
        </div>  
    </div>
    </div>

    <div class="card-body">
      <div class= 'buttons'>
        <button type="button" class="btn btn-dark">Comments</button>
        <button type="button" class="btn btn-dark">Reservations</button>
      </div>
    </div>
  </div>`;
  return card;
};

// display all 9 random meals
const screenMeals = (meals) => {
  const mealElement = document.getElementById('homepage');

  meals.forEach((meal) => {
    const card = getCard(meal);
    mealElement.insertAdjacentHTML('beforeend', card);
  });
};

// Call the function to fetch and display random meals

screenMeals(await fetchMeals());
