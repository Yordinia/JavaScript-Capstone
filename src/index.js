import './style.css';
import screenMeals from './modules/screen_meals.js';
import getLikes from './modules/get_number_of_likes.js';
import setLikes from './modules/set_number_of_likes.js';
import fetchMeals from './modules/fetch_meals.js';
import updateDom from './modules/update_dom.js';
import counter from './modules/counter.js';
import counterTotal from './modules/counterTotal';

async function fetchMealsAndLikes() {
  const meals = await fetchMeals();
  const likes = await getLikes();
  return { allMeals: meals, allLikes: likes };
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
    // set /POST likes
    const res = await setLikes(id);
    if (res === 'Created') console.log('Updated like to API sucessfully');

    const { allMeals, allLikes } = await fetchMealsAndLikes();
    const { likes } = allLikes.find((like) => like.item_id === id);
    updateDom(buttonEl, likes);
    // test count
    const test = counter(id, likes);
    // test totalCount
    const test2 = counterTotal(allMeals);
    console.log('fetch updated (hopefully successfully), TESTs are - ', test === test2);
  }
});

screenMeals(await fetchMealsAndLikes());
