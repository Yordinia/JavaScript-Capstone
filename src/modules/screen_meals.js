const getCard = (meal, { likes }) => {
  const card = `
    <div class="card border-primary mb-3" style="max-width: 20rem;">
      <div class="card-header" id="header">
      <img class= 'card-img-top' src = ${meal.strMealThumb} alt= ${meal.strMeal} ></img>  
      <div class= 'title-like-container'>  
          <h1>${meal.strMeal} </h1>
          <div class='heart'> 
            <button class='btn btn-success like-buttons' id='${meal.idMeal}'>
            ${likes}
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