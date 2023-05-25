import './style.css';

// Function to make API request and create cards
async function fetchMeals() {
  const meals = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken';
  const response = await fetch(meals);
  const data = await response.json();
  const first9Meals = data.meals.filter((m, i) => i < 9);
  return first9Meals;
}

const getCard = (meal) => {
  const card = `
  <div class="card border-primary mb-3" style="max-width: 20rem;">
    <div class="card-header" id="header">
    <img class= 'card-img-top' src = ${meal.strMealThumb} alt= ${meal.strMeal} ></img>  
    <div class= 'title-like-container'>  
        <h1>${meal.strMeal} </h1>
        <div class='heart'> 
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
