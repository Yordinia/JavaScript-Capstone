import './style.css';
import screenMeals from './modules/screen_meals.js';
import getLikes from './modules/get_number_of_likes.js';
import setLikes from './modules/set_number_of_likes.js';
import fetchMeals from './modules/fetch_meals.js';
import updateDom from './modules/update_dom.js';

async function fetchMealsAndLikes() {
  const meals = await fetchMeals();
  const likes = await getLikes();
  return { allMeals: meals, allLikes: likes };
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
        <button type="button" class="btn btn-dark comments">Comments</button>
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
document.addEventListener('click', async (event) => {
  const buttons = document.querySelectorAll('.like-buttons');
  let buttonEl;
  let flag = false;
  let id;
  buttons.forEach((button) => {
    if (button.contains(event.target)) {
      flag = true;
      id = button.id;
      buttonEl = button;
    }
  });

  if (flag) {
    // set /POST likes
    const res = await setLikes(id);
    if (res === 'Created') console.log('Updated like to API sucessfully');

screenMeals(await fetchMeals());
import modal from './modules/modal-block.js';

document.addEventListener('click', (event) => {
  const comments = document.querySelectorAll('.comments');
  const close = document.querySelector('.fa-xmark');
  if (event.target === close) {
    document.querySelector('.modal').classList.remove('view');
  }
  comments.forEach((div, index) => {
    if (event.target === div) {
      document.querySelector('.modal').classList.add('view');
      modal(index);
    }
  });
});

const form = document.querySelector('#comment-form');
if (form !== null) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}
    const { allLikes } = await fetchMealsAndLikes();
    const { likes } = allLikes.find((like) => like.item_id === id);
    updateDom(buttonEl, likes);
    console.log('fetch updated (hopefully)', likes);
  }
});

screenMeals(await fetchMealsAndLikes());
