import './style.css';
import getLikes from './modules/get_number_of_likes';
import setLikes from './modules/set_number_of_likes';

//here
document.addEventListener('click', (event) => {
  const buttons = document.querySelectorAll('.like-buttons');
  let flag = false;

  buttons.forEach((button) => {
    let id;
    if (button.contains(event.target)) {
      flag = true;
      id = button.id;
      return;
    }
  });
  if(flag){
      console.log('button.id',flag,id)
     // setLikes(id)
    }
});

// Function to make API request and create cards
async function fetchMeals() {
  const mealsURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken';
  const response = await fetch(mealsURL);
  const { meals } = await response.json();
  return meals;
}

const getCard = (meal, {likes}) => {
  
  const card = `
  <div class="card border-primary mb-3" style="max-width: 20rem;">
    <div class="card-header" id="header">
    <img class= 'card-img-top' src = ${meal.strMealThumb} alt= ${meal.strMeal} ></img>  
    <div class= 'title-like-container'>  
        <h1>${meal.strMeal} </h1>
        <div class='heart'> 
          <button class='btn btn-success like-buttons' id='${meal.idMeal}' >
            LIKE - ${likes}
          </button>
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
const screenMeals = ({meals, likes}) => {
  let like;
  const mealElement = document.getElementById('homepage');
  meals.forEach((meal) => {
    like = likes.find(like=> like.item_id === meal.idMeal) || {idMeal:meal.idMeal, likes: 0};
    console.log(like)
    const card = getCard(meal, like);
    mealElement.insertAdjacentHTML('beforeend', card);    
  });
  
  
};

// Call the function to fetch and display random meals
const meals =  await fetchMeals();
const likes = await getLikes();

screenMeals({meals, likes});
