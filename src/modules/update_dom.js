const updateDom = (button, like) => {
  const mealElement = document.getElementById('homepage');
  button.lastChild.textContent = like;
};

export default updateDom;