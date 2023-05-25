const getCard = (meal, { likes }) => {
  const card = `
    <div class="card border-primary mb-3" style="max-width: 20rem;">
      <div class="card-header" id="header">
      <img class= 'card-img-top' src = ${meal.strMealThumb} alt= ${meal.strMeal} ></img>  
      <div class= 'title-like-container'>  
          <h1>${meal.strMeal} </h1>
          <div class='heart'> 
            <button class='btn btn-success like-buttons' id='${meal.idMeal}'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>
            ${likes}
            </button>
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

const screenMeals = ({ allMeals: meals, allLikes: likes }) => {
  let like;
  const mealElement = document.getElementById('homepage');
  meals.forEach((meal) => {
    like = likes.find((like) => like.item_id === meal.idMeal) || { item_id: meal.idMeal, likes: 0 };
    const card = getCard(meal, like);
    mealElement.insertAdjacentHTML('beforeend', card);
  });
  console.log('Posting, fething');
  console.log('Done screening meals');
};

export default screenMeals;