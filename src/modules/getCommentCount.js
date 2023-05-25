const getCommentCount = ((classname) => {
  return document.querySelectorAll(classname).length;
});

export default getCommentCount;