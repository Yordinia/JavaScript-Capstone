import './style.css';
import { modal, loadComments } from './modules/modal-block';
import postComment from './modules/postComments';
import screenMeals from './modules/screen_meals';
import getLikes from './modules/get_number_of_likes';
import setLikes from './modules/set_number_of_likes';
import fetchMeals from './modules/fetch_meals';
import updateDom from './modules/update_dom';

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
    await setLikes(id);

    const { allLikes } = await fetchMealsAndLikes();
    const { likes } = allLikes.find((like) => like.item_id === id);
    updateDom(buttonEl, likes);
    // test count
    // const test = counter(id, likes);
    // test totalCount
    // const test2 = counterTotal(allMeals);
  }
});

screenMeals(await fetchMealsAndLikes());

document.addEventListener('click', (event) => {
  const comments = document.querySelectorAll('.comments');
  const close = document.querySelector('.fa-xmark');
  const submit = document.querySelector('#comment-submit');
  if (event.target === close) {
    document.querySelector('.modal').classList.remove('view');
    document.querySelector('.modal').innerHTML = '';
  }

  if (event.target === submit) {
    const name = document.querySelector('#name').value;
    const comment = document.querySelector('#comment').value;
    const ID = document.querySelector('.add-comment').id;
    postComment(ID, name, comment).then(() => {
      loadComments(ID);
    });
  }

  comments.forEach((div, index) => {
    if (event.target === div) {
      document.querySelector('.modal').classList.add('view');
      modal(index);
    }
  });
});

const form = document.querySelector('.add-comment');
if (form !== null) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}
