import './style.css';
import screenMeals from './modules/screen_meals.js';
import getLikes from './modules/get_number_of_likes.js';
import setLikes from './modules/set_number_of_likes.js';
import fetchMeals from './modules/fetch_meals.js';
import updateDom from './modules/update_dom.js';

async function fetchMeals_Likes() {
  const meals = await fetchMeals();
  const likes = await getLikes();
  return { all_meals: meals, all_likes: likes };
}

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
    const res = await setLikes(id);
    if (res === 'Created') console.log('Updated like to API sucessfully');

    const { all_likes } = await fetchMeals_Likes();
    const { likes } = all_likes.find((like) => like.item_id === id);
    updateDom(buttonEl, likes);
    console.log('fetch updated (hopefully)', likes);
  }
});

screenMeals(await fetchMeals_Likes());
