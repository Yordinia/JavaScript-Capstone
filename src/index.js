import './style.css';
import { modal } from './modules/modal-block.js';

document.addEventListener('click', (event) => {
  const comments = document.querySelectorAll('.comments');
  const close = document.querySelector('.fa-xmark');
  if (event.target === close) {
    document.querySelector('.modal').classList.remove('view');
  }

  comments.forEach((div, index) => {
    if (event.target === div) {
      document.querySelector('.modal').classList.add('view');
      modal(index);
    }
  });
});

const form = document.querySelector('.add-comment');
if (form !== null) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}
