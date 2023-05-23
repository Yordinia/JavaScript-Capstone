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
    <div class="card-header" id="header">
    <img class= 'card-img-top' src = ${meal.strMealThumb} alt= ${meal.strMeal} ></img>  
    <div class= 'title-like-container'>  
        <h1>${meal.strMeal} </h1>
        <div class='display-flex-column'> 
          <i>' like icon goes here '</i> 
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
  </div>`
  return card;
}

// display all 9 random meals
const screenMeals = meals => {
const mealElement = document.getElementById('homepage');

meals.forEach(meal => {
  const card = getCard(meal);
  mealElement.insertAdjacentHTML("beforeend",card);
  });
}

const definedData = () => {
  const meals = [
    {
      id: 0,
      strMeal: "alice_in_borderlan_mountains",
      strMealThumb: "/tryWithImages/alice_in_borderlan_mountains.png"
    },
    {
      id: 1,
      strMeal: "alice_in_borderlan_mountains",
      strMealThumb: "/tryWithImages/alice_in_borderlan_Queen_of_heartss.png"
    },
    {
      id: 2,
      strMeal: "alice_in_borderlan_Queen",
      strMealThumb: "/tryWithImages/alice_in_borderlan_Queen.png"
    },
    {
      id: 3,
      strMeal: "alice_in_borderland_ready_to_die",
      strMealThumb: "/tryWithImages/alice_in_borderland_ready_to_die.png"
    },
    {
      id: 4,
      strMeal: "alice_in_borderland_value_of_life",
      strMealThumb: "/tryWithImages/alice_in_borderland_value_of_life.png"
    },
    {
      id: 5,
      strMeal: "alice_in_borderland",
      strMealThumb: "/tryWithImages/alice_in_borderland.png"
    },
  ]
  return meals;
}


// Call the function to fetch and display random meals

//screenMeals(await fetchMeals()); not working

screenMeals(definedData())
