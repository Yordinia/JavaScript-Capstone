import getComments from './getComments';

const getMealDetail = async (mealid) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`;
  const response = await fetch(url);
  const recipe = (await response.json()).meals;
  return recipe[0].strInstructions;
};

async function getDetails(mealid) {
  const details = await (getMealDetail(mealid));
  return details;
}

const loadComments = (id) => {
  getComments(id).then((result) => {
    const comments = document.querySelector('.comment-box');
    comments.innerHTML = '';
    if (result[0]) {
      result.forEach((item) => {
        const Element = document.createElement('p');
        Element.innerHTML = `${item.creation_date} ${item.username}: ${item.comment}`;
        comments.appendChild(Element);
      });
    }
  });
};

const modal = async (index) => {
  const APIurl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken';
  const response = await fetch(APIurl);
  const { meals } = await response.json();
  meals.forEach((item, index1) => {
    if (index === index1) {
      const modalbox = document.querySelector('.modal');
      modalbox.innerHTML = '';
      // let details = getDetails(item.idMeal);
      // let detail1 = details;
      getDetails(item.idMeal).then((result) => {
        modalbox.innerHTML = `<div class="modal-container">
      <a href="#"><i class="fa-solid fa-xmark"></i></a>
      <img src="${item.strMealThumb}"/>
      <h2>${item.strMeal}</h2>
      <p>${result}</p>
      <h2> Comments </h2>
      <div class = 'comment-box'>
      
      </div>
      <h2>Add a Comment</h2>
      <form  id="${item.idMeal}" class="add-comment">
        <input id="name" type="text" placeholder="Your Name" required>
        <textarea id="comment" type="text" maxlength="500" placeholder="Your Insights" required></textarea>
        <button id="comment-submit" type="submit">Comment</button>
      </form>
      </div>`;
        loadComments(item.idMeal);
      });
    }
  });
};

export { modal, loadComments };