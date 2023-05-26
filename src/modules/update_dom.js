const updateDom = (button, like) => {
  button.lastChild.textContent = like;
};

export default updateDom;