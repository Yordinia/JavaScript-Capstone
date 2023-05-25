const counter = (id, likes) => {
  // like number from DOM
  let likeFromDom = document.getElementById(id).textContent;
  likeFromDom = parseInt(likeFromDom, 10);
  // like number from Fetch URL
  const likeFromURL = likes;
  const test = likeFromDom === likeFromURL;
  return test;
};

export default counter;