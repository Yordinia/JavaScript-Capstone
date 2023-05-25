const counter = (classname='.heart') => {
  // like number from DOM
  let len = document.querySelectorAll(classname).length;
  return len;
};

export default counter;