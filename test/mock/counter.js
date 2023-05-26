const counter = (classname = '.heart') => {
  // like number from DOM
  const len = document.querySelectorAll(classname).length;
  return len;
};

export default counter;