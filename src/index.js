import './style.css';

// /* These are the tasks for this branch

// When the page loads, the webapp retrieves data from the selected API and shows the list of items on screen with the basic data (e.g. title + image).

// /Prepare also "Comments" and "Reservations" buttons. They should be doing nothing - just being displayed.

// This task does not include displaying the number of likes for each item.

// This task does not include the counter of the items. */

    
// // Function to make API request and create cards
// async function fetchMeals() {
//   const meals = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken';
//   const response = await fetch(meals);
//   const data = await response.json();
//   const first9Meals = data.meals.filter((m,i)=> i<9);
//   return first9Meals;
// }

// const getCard = meal => {
//   const card = `
//   <div class="card border-primary mb-3" style="max-width: 20rem;">
//     <div class="card-header" id="header">
//     <img class= 'card-img-top' src = ${meal.strMealThumb} alt= ${meal.strMeal} ></img>  
//     <div class= 'title-like-container'>  
//         <h1>${meal.strMeal} </h1>
//         <div class='heart'> 
//           <h3>
//             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="pink" class="bi bi-heart" viewBox="0 0 16 16">
//             <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
//             </svg>
//           </h3>
//           <p class='no-of-likes'> 'no of likes' </p>  
//         </div>  
//     </div>
//     </div>

//     <div class="card-body">
//       <div class= 'buttons'>
//         <button type="button" class="btn btn-dark">Comments</button>
//         <button type="button" class="btn btn-dark">Reservations</button>
//       </div>
//     </div>
//   </div>`
//   return card;
// }

// // display all 9 random meals
// const screenMeals = meals => {
// const mealElement = document.getElementById('homepage');

// meals.forEach(meal => {
//   const card = getCard(meal);
//   mealElement.insertAdjacentHTML("beforeend", card);
//   });
// }

// // Call the function to fetch and display random meals

// screenMeals(await fetchMeals());
import { createApiId, getLikes } from './mod/code';

const apiUrl = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/"

let id= await createApiId(apiUrl);

// Assume you have an element with an associated like count
const elementId = "element-id";
let likeCount = await getLikes({apiUrl, id}) || 0; // The current number of likes for the element

// Prepare the data payload
const data = {
  item_id: elementId,
  like_count: likeCount,
};

 // storing likes
const createButton = () => {
  const el = document.createElement('button')
  el.id = 'element-id';
  el.classList.add('btn','btn-secondary')
  el.style.width = "max-content"
  el.style.alignSelf = 'center'
  el.textContent = '0 likes'
  el.onclick = () => handleLikes;
  document.body.appendChild(el)
}

const handleLikes = async () => {
  likeCount += 1;
  console.log('just clicked ', el, 'like count is', likeCount);
  setLikes();
  updateDom();
}

const updateDom = async () => {
  const el = document.getElementById(elementId);
  el.textContent = `${likeCount} likes`;
}
// Make a POST request to store the like information
const setLikes = async () => {
const res = await fetch(`${apiUrl}${id}/likes`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});

if (res.ok) {
  console.log('Like information POST successfully.', res);
  console.log('this is response.text', await res.text())
} else {
  console.log('Failed to store like information:', res.status);
}
}





createApiId();
createButton();
updateDom();
/*
{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'Game-ID' }),
}

*/